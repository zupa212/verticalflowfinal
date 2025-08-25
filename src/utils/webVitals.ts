// Core Web Vitals monitoring and reporting

import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// Core Web Vitals thresholds
const VITAL_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },
  FID: { good: 100, poor: 300 },
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  TTFB: { good: 800, poor: 1800 }
};

// Performance rating function
const getVitalRating = (value: number, thresholds: { good: number; poor: number }) => {
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.poor) return 'needs-improvement';
  return 'poor';
};

// Send metrics to analytics
const sendToAnalytics = (metric: any) => {
  const rating = getVitalRating(metric.value, VITAL_THRESHOLDS[metric.name as keyof typeof VITAL_THRESHOLDS]);
  
  // Send to Google Analytics
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'web_vitals', {
      event_category: 'Web Vitals',
      event_label: metric.name,
      value: Math.round(metric.value),
      custom_parameter_1: rating,
      custom_parameter_2: metric.id
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`Web Vital: ${metric.name}`, {
      value: metric.value,
      rating,
      id: metric.id
    });
  }
};

// Initialize Core Web Vitals monitoring
export const initWebVitals = () => {
  // Largest Contentful Paint (LCP)
  getLCP(sendToAnalytics);

  // First Input Delay (FID)
  getFID(sendToAnalytics);

  // Cumulative Layout Shift (CLS)
  getCLS(sendToAnalytics);

  // First Contentful Paint (FCP)
  getFCP(sendToAnalytics);

  // Time to First Byte (TTFB)
  getTTFB(sendToAnalytics);
};

// Performance monitoring utilities
export const performanceUtils = {
  // Monitor resource loading
  monitorResources: () => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const resourceEntry = entry as PerformanceResourceTiming;
          
          // Track slow resources (> 2 seconds)
          if (resourceEntry.duration > 2000) {
            console.warn('Slow resource detected:', {
              name: resourceEntry.name,
              duration: resourceEntry.duration,
              size: resourceEntry.transferSize
            });
          }
        });
      });

      observer.observe({ entryTypes: ['resource'] });
    }
  },

  // Monitor navigation timing
  monitorNavigation: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          if (perfData) {
            const metrics = {
              domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
              loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
              dnsLookup: perfData.domainLookupEnd - perfData.domainLookupStart,
              tcpConnection: perfData.connectEnd - perfData.connectStart,
              serverResponse: perfData.responseEnd - perfData.requestStart
            };

            // Send navigation metrics
            Object.entries(metrics).forEach(([name, value]) => {
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'timing_complete', {
                  event_category: 'Navigation Timing',
                  event_label: name,
                  value: Math.round(value)
                });
              }
            });
          }
        }, 1000);
      });
    }
  },

  // Monitor user interactions
  monitorInteractions: () => {
    if (typeof window !== 'undefined') {
      let interactionCount = 0;
      let lastInteractionTime = Date.now();

      const trackInteraction = () => {
        interactionCount++;
        const timeSinceLastInteraction = Date.now() - lastInteractionTime;
        lastInteractionTime = Date.now();

        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'user_interaction', {
            event_category: 'User Engagement',
            event_label: 'interaction',
            value: interactionCount,
            custom_parameter_1: timeSinceLastInteraction
          });
        }
      };

      // Track various user interactions
      ['click', 'scroll', 'keypress', 'mousemove'].forEach(eventType => {
        window.addEventListener(eventType, trackInteraction, { passive: true });
      });
    }
  },

  // Monitor memory usage
  monitorMemory: () => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      
      setInterval(() => {
        const memoryUsage = {
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit
        };

        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'memory_usage', {
            event_category: 'Performance',
            event_label: 'memory',
            value: Math.round(memoryUsage.used / 1024 / 1024), // MB
            custom_parameter_1: Math.round(memoryUsage.total / 1024 / 1024),
            custom_parameter_2: Math.round(memoryUsage.limit / 1024 / 1024)
          });
        }
      }, 30000); // Check every 30 seconds
    }
  }
};

// Initialize all performance monitoring
export const initPerformanceMonitoring = () => {
  initWebVitals();
  performanceUtils.monitorResources();
  performanceUtils.monitorNavigation();
  performanceUtils.monitorInteractions();
  performanceUtils.monitorMemory();
};

// Performance optimization utilities
export const performanceOptimization = {
  // Preload critical resources
  preloadCriticalResources: () => {
    const criticalResources = [
      '/src/assets/hero-illustration.jpg',
      '/src/assets/portfolio-1.jpg',
      '/src/assets/portfolio-2.jpg'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'image';
      document.head.appendChild(link);
    });
  },

  // Optimize images
  optimizeImages: () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" to non-critical images
      if (!img.classList.contains('critical')) {
        img.loading = 'lazy';
      }
      
      // Add decoding="async" for better performance
      img.decoding = 'async';
    });
  },

  // Optimize fonts
  optimizeFonts: () => {
    // Preload critical fonts
    const fontLinks = document.querySelectorAll('link[rel="stylesheet"][href*="fonts"]');
    fontLinks.forEach(link => {
      link.setAttribute('rel', 'preload');
      link.setAttribute('as', 'style');
      link.setAttribute('onload', "this.onload=null;this.rel='stylesheet'");
    });
  }
};

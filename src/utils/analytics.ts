import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const analytics = {
  // Initialize Google Analytics
  init: () => {
    const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;
    
    if (!GA_TRACKING_ID) {
      console.warn('GA_TRACKING_ID not found in environment variables');
      return;
    }

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });

    console.log('Google Analytics initialized');
  },

  // Track page views
  pageView: (url?: string) => {
    if (typeof window.gtag !== 'function') return;
    
    window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
      page_path: url || window.location.pathname,
      page_title: document.title,
      page_location: window.location.href,
    });
  },

  // Track custom events
  event: (action: string, parameters?: any) => {
    if (typeof window.gtag !== 'function') return;
    
    window.gtag('event', action, {
      event_category: 'engagement',
      event_label: parameters?.label,
      value: parameters?.value,
      ...parameters,
    });
  },

  // Track button clicks
  buttonClick: (buttonName: string, location?: string) => {
    analytics.event('click', {
      event_category: 'button',
      event_label: buttonName,
      event_location: location || window.location.pathname,
    });
  },

  // Track form submissions
  formSubmit: (formName: string, success: boolean = true) => {
    analytics.event('form_submit', {
      event_category: 'form',
      event_label: formName,
      success: success,
    });
  },

  // Track scroll depth
  scrollDepth: (percentage: number) => {
    analytics.event('scroll_depth', {
      event_category: 'engagement',
      event_label: `${percentage}%`,
      value: percentage,
    });
  },

  // Track video interactions
  videoPlay: (videoTitle: string) => {
    analytics.event('video_play', {
      event_category: 'video',
      event_label: videoTitle,
    });
  },

  videoPause: (videoTitle: string, progress: number) => {
    analytics.event('video_pause', {
      event_category: 'video',
      event_label: videoTitle,
      value: Math.round(progress),
    });
  },

  // Track downloads
  download: (fileName: string, fileType: string) => {
    analytics.event('file_download', {
      event_category: 'download',
      event_label: fileName,
      file_type: fileType,
    });
  },

  // Track external link clicks
  externalLink: (url: string) => {
    analytics.event('click', {
      event_category: 'external_link',
      event_label: url,
    });
  },

  // Track search
  search: (searchTerm: string, results?: number) => {
    analytics.event('search', {
      search_term: searchTerm,
      event_category: 'search',
      value: results,
    });
  },

  // Track page timing
  timing: (name: string, value: number, category: string = 'performance') => {
    analytics.event('timing_complete', {
      event_category: category,
      event_label: name,
      value: Math.round(value),
    });
  },

  // Track errors
  exception: (description: string, fatal: boolean = false) => {
    if (typeof window.gtag !== 'function') return;
    
    window.gtag('event', 'exception', {
      description: description,
      fatal: fatal,
    });
  }
};

// Performance Observer for Core Web Vitals
export const performanceObserver = () => {
  // Track Core Web Vitals using the correct web-vitals API
  onCLS((metric) => {
    analytics.timing('CLS', metric.value, 'web_vitals');
  });

  onFID((metric) => {
    analytics.timing('FID', metric.value, 'web_vitals');
  });

  onFCP((metric) => {
    analytics.timing('FCP', metric.value, 'web_vitals');
  });

  onLCP((metric) => {
    analytics.timing('LCP', metric.value, 'web_vitals');
  });

  onTTFB((metric) => {
    analytics.timing('TTFB', metric.value, 'web_vitals');
  });

  // Track navigation timing
  if ('performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (perfData) {
          analytics.timing('DOM_Content_Loaded', perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart);
          analytics.timing('Load_Complete', perfData.loadEventEnd - perfData.loadEventStart);
          analytics.timing('DNS_Lookup', perfData.domainLookupEnd - perfData.domainLookupStart);
          analytics.timing('TCP_Connection', perfData.connectEnd - perfData.connectStart);
        }
      }, 1000);
    });
  }

  // Track resource timing for critical assets
  if ('PerformanceObserver' in window) {
    const resourceObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const resourceEntry = entry as PerformanceResourceTiming;
        
        // Track slow resources (> 1 second)
        if (resourceEntry.duration > 1000) {
          analytics.timing('Slow_Resource', resourceEntry.duration, 'performance');
        }
      });
    });

    resourceObserver.observe({ entryTypes: ['resource'] });
  }
};

// Enhanced error tracking
export const setupErrorTracking = () => {
  // Global error handler
  window.addEventListener('error', (event) => {
    analytics.exception(`${event.error?.name}: ${event.error?.message}`, false);
  });

  // Unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    analytics.exception(`Unhandled Promise: ${event.reason}`, false);
  });
};

// Initialize error tracking
setupErrorTracking();

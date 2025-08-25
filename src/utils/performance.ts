// Performance optimization utilities

// Debounce function for expensive operations
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for scroll events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Preload critical resources
export const preloadResource = (href: string, as: string = 'image') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

// Preload critical images
export const preloadCriticalImages = () => {
  const criticalImages = [
    '/lovable-uploads/ELITE.png',
    '/lovable-uploads/IZIPEN.png',
    '/lovable-uploads/PNG10F.png',
    '/lovable-uploads/domination414.png'
  ];
  
  criticalImages.forEach(src => preloadResource(src, 'image'));
};

// Optimize animations with requestAnimationFrame
export const optimizedAnimation = (callback: () => void) => {
  let ticking = false;
  
  return () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: (entry: IntersectionObserverEntry) => void,
  options: IntersectionObserverInit = {}
) => {
  return new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, {
    threshold: 0.1,
    rootMargin: '50px',
    ...options
  });
};

// Memory management for large lists
export const virtualizeList = <T>(
  items: T[],
  itemHeight: number,
  containerHeight: number,
  scrollTop: number
) => {
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight) + 1,
    items.length
  );
  
  return {
    items: items.slice(startIndex, endIndex),
    startIndex,
    endIndex,
    totalHeight: items.length * itemHeight,
    offsetY: startIndex * itemHeight
  };
};

// Optimize CSS animations
export const optimizeAnimations = () => {
  // Add will-change to elements that will animate
  const animatedElements = document.querySelectorAll('[data-animate]');
  animatedElements.forEach(el => {
    (el as HTMLElement).style.willChange = 'transform, opacity';
  });
};

// Clean up animations when elements are out of view
export const cleanupAnimations = () => {
  const animatedElements = document.querySelectorAll('[data-animate]');
  animatedElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (!isInView) {
      (el as HTMLElement).style.willChange = 'auto';
    }
  });
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start}ms`);
};

// Optimize video loading
export const optimizeVideoLoading = (videoElement: HTMLVideoElement) => {
  // Set preload to metadata only for better performance
  videoElement.preload = 'metadata';
  
  // Use Intersection Observer to load video when needed
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        videoElement.preload = 'auto';
        observer.unobserve(videoElement);
      }
    });
  });
  
  observer.observe(videoElement);
  
  return observer;
};

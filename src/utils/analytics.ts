// Analytics and tracking utilities

// Google Analytics 4 Configuration
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual measurement ID

// Facebook Pixel Configuration
const FB_PIXEL_ID = 'XXXXXXXXXX'; // Replace with your actual Pixel ID

// Initialize Google Analytics 4
export const initGA4 = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };

    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        'custom_parameter_1': 'user_type',
        'custom_parameter_2': 'service_category'
      }
    });
  }
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title || document.title
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submit', 'engagement', formName);
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', 'engagement', `${buttonName}_${location}`);
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll', 'engagement', `scroll_depth_${depth}%`);
};

// Track video interactions
export const trackVideoInteraction = (action: string, videoTitle: string) => {
  trackEvent(action, 'video', videoTitle);
};

// Track social media clicks
export const trackSocialClick = (platform: string, linkType: string) => {
  trackEvent('social_click', 'social', `${platform}_${linkType}`);
};

// Track service page views
export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', 'business', serviceName);
};

// Track contact method usage
export const trackContactMethod = (method: string) => {
  trackEvent('contact_method', 'business', method);
};

// Initialize Facebook Pixel
export const initFacebookPixel = () => {
  if (typeof window !== 'undefined' && !window.fbq) {
    // Load Facebook Pixel script
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${FB_PIXEL_ID}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);
  }
};

// Track Facebook Pixel events
export const trackFacebookEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

// Performance monitoring
export const performanceObserver = () => {
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          trackEvent('lcp', 'web_vitals', 'largest_contentful_paint', Math.round(entry.startTime));
        }
        if (entry.entryType === 'first-input') {
          trackEvent('fid', 'web_vitals', 'first_input_delay', Math.round(entry.processingStart - entry.startTime));
        }
        if (entry.entryType === 'layout-shift') {
          trackEvent('cls', 'web_vitals', 'cumulative_layout_shift', Math.round(entry.value * 1000));
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  }
};

// Analytics initialization
export const analytics = {
  init: () => {
    initGA4();
    initFacebookPixel();
    performanceObserver();
  },
  
  pageView: () => {
    trackPageView(window.location.pathname, document.title);
    trackFacebookEvent('PageView');
  },
  
  scrollDepth: (depth: number) => {
    trackScrollDepth(depth);
  },
  
  formSubmission: (formName: string) => {
    trackFormSubmission(formName);
    trackFacebookEvent('Lead');
  },
  
  serviceView: (serviceName: string) => {
    trackServiceView(serviceName);
  },
  
  contactMethod: (method: string) => {
    trackContactMethod(method);
    trackFacebookEvent('Contact');
  },
  
  socialClick: (platform: string, linkType: string) => {
    trackSocialClick(platform, linkType);
  }
};

// TypeScript declarations
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    dataLayer: any[];
  }
}

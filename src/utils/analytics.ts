
// Google Analytics 4 Integration
interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

interface GAPageView {
  page_title: string;
  page_location: string;
  page_path: string;
  content_group1?: string; // Service type
  content_group2?: string; // Language
  content_group3?: string; // User type
}

interface GAConversion {
  currency?: string;
  value?: number;
  transaction_id?: string;
  items?: Array<{
    item_id: string;
    item_name: string;
    category: string;
    quantity: number;
    price: number;
  }>;
}

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'get',
      targetId: string | Date,
      config?: any
    ) => void;
    dataLayer: any[];
  }
}

class VerticalFlowAnalytics {
  private trackingId: string;
  private debugMode: boolean;
  private isInitialized: boolean = false;

  constructor(trackingId: string = 'G-XXXXXXXXXX', debugMode: boolean = false) {
    this.trackingId = trackingId;
    this.debugMode = debugMode;
  }

  // Initialize Google Analytics
  init(): void {
    if (typeof window === 'undefined' || this.isInitialized) return;

    // Create script elements
    const gtag = document.createElement('script');
    gtag.async = true;
    gtag.src = `https://www.googletagmanager.com/gtag/js?id=${this.trackingId}`;
    document.head.appendChild(gtag);

    const gtagScript = document.createElement('script');
    gtagScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${this.trackingId}', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'dimension1': 'service_type',
          'dimension2': 'language',
          'dimension3': 'user_type',
          'dimension4': 'content_category'
        },
        enhanced_ecommerce: true,
        link_attribution: true,
        anonymize_ip: true,
        allow_google_signals: true,
        send_page_view: false
      });
    `;
    document.head.appendChild(gtagScript);

    this.isInitialized = true;
    this.log('Analytics initialized');
  }

  // Track page views
  pageView(data: Partial<GAPageView> = {}): void {
    if (!this.isInitialized) return;

    const pageData: GAPageView = {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
      content_group1: this.getServiceType(),
      content_group2: this.getLanguage(),
      content_group3: this.getUserType(),
      ...data,
    };

    window.gtag('event', 'page_view', pageData);
    this.log('Page view tracked', pageData);
  }

  // Track custom events
  event({ action, category, label, value }: GAEvent): void {
    if (!this.isInitialized) return;

    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      service_type: this.getServiceType(),
      language: this.getLanguage(),
    });

    this.log('Event tracked', { action, category, label, value });
  }

  // Track conversions
  conversion(conversionData: GAConversion): void {
    if (!this.isInitialized) return;

    window.gtag('event', 'conversion', {
      send_to: this.trackingId,
      ...conversionData,
    });

    this.log('Conversion tracked', conversionData);
  }

  // Track form interactions
  formInteraction(formName: string, action: string, fieldName?: string): void {
    this.event({
      action: 'form_interaction',
      category: 'engagement',
      label: `${formName}_${action}${fieldName ? `_${fieldName}` : ''}`,
    });
  }

  // Track video interactions
  videoInteraction(videoTitle: string, action: string, progress?: number): void {
    this.event({
      action: 'video_interaction',
      category: 'engagement',
      label: `${videoTitle}_${action}`,
      value: progress,
    });
  }

  // Track scroll depth
  scrollDepth(percentage: number): void {
    this.event({
      action: 'scroll_depth',
      category: 'engagement',
      label: `${percentage}%`,
      value: percentage,
    });
  }

  // Track file downloads
  fileDownload(fileName: string, fileType: string): void {
    this.event({
      action: 'file_download',
      category: 'engagement',
      label: `${fileName}.${fileType}`,
    });
  }

  // Track external link clicks
  externalLinkClick(url: string, linkText: string): void {
    this.event({
      action: 'external_link_click',
      category: 'navigation',
      label: `${linkText} -> ${url}`,
    });
  }

  // Track search queries
  search(query: string, resultsCount?: number): void {
    window.gtag('event', 'search', {
      search_term: query,
      content_group1: this.getServiceType(),
      value: resultsCount,
    });
  }

  // Track social interactions
  socialInteraction(network: string, action: string, target?: string): void {
    this.event({
      action: 'social_interaction',
      category: 'social',
      label: `${network}_${action}${target ? `_${target}` : ''}`,
    });
  }

  // Performance tracking
  performanceTiming(): void {
    if (typeof window.performance === 'undefined') return;

    window.addEventListener('load', () => {
      setTimeout(() => {
        const timing = window.performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        const domReady = timing.domContentLoadedEventEnd - timing.navigationStart;
        const firstPaint = timing.responseEnd - timing.fetchStart;

        this.event({
          action: 'performance_timing',
          category: 'performance',
          label: 'page_load_time',
          value: Math.round(loadTime),
        });

        this.event({
          action: 'performance_timing',
          category: 'performance', 
          label: 'dom_ready_time',
          value: Math.round(domReady),
        });

        this.event({
          action: 'performance_timing',
          category: 'performance',
          label: 'first_paint_time',
          value: Math.round(firstPaint),
        });
      }, 1000);
    });
  }

  // Helper methods
  private getServiceType(): string {
    const path = window.location.pathname;
    if (path.includes('reels')) return 'reels';
    if (path.includes('social-media')) return 'social-media';
    if (path.includes('video-editing')) return 'video-editing';
    if (path.includes('tiktok')) return 'tiktok';
    return 'general';
  }

  private getLanguage(): string {
    return document.documentElement.lang || 'el';
  }

  private getUserType(): string {
    // You can implement user type detection based on your business logic
    return 'visitor'; // visitor, lead, customer
  }

  private log(message: string, data?: any): void {
    if (this.debugMode) {
      console.log(`[VerticalFlow Analytics] ${message}`, data);
    }
  }
}

// Singleton instance
export const analytics = new VerticalFlowAnalytics(
  import.meta.env.VITE_GA_TRACKING_ID || 'G-XXXXXXXXXX',
  import.meta.env.DEV
);

// React hook for analytics
export const useAnalytics = () => {
  const trackPageView = (data?: Partial<GAPageView>) => analytics.pageView(data);
  const trackEvent = (event: GAEvent) => analytics.event(event);
  const trackConversion = (data: GAConversion) => analytics.conversion(data);
  const trackFormInteraction = (formName: string, action: string, fieldName?: string) => 
    analytics.formInteraction(formName, action, fieldName);

  return {
    trackPageView,
    trackEvent,
    trackConversion,
    trackFormInteraction,
    analytics,
  };
};

// Enhanced performance monitoring
export const performanceObserver = () => {
  if (typeof window === 'undefined') return;

  // Core Web Vitals
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS((metric) => {
      analytics.event({
        action: 'web_vitals',
        category: 'performance',
        label: 'CLS',
        value: Math.round(metric.value * 1000),
      });
    });

    getFID((metric) => {
      analytics.event({
        action: 'web_vitals',
        category: 'performance',
        label: 'FID',
        value: Math.round(metric.value),
      });
    });

    getFCP((metric) => {
      analytics.event({
        action: 'web_vitals',
        category: 'performance',
        label: 'FCP',
        value: Math.round(metric.value),
      });
    });

    getLCP((metric) => {
      analytics.event({
        action: 'web_vitals',
        category: 'performance',
        label: 'LCP',
        value: Math.round(metric.value),
      });
    });

    getTTFB((metric) => {
      analytics.event({
        action: 'web_vitals',
        category: 'performance',
        label: 'TTFB',
        value: Math.round(metric.value),
      });
    });
  }).catch(() => {
    // Fallback if web-vitals package is not available
    analytics.performanceTiming();
  });
};

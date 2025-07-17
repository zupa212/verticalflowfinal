import { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  jsonLd?: object;
}

export const useSEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  canonicalUrl,
  noindex = false,
  jsonLd
}: SEOProps) => {
  useEffect(() => {
    // Update title
    if (title) {
      document.title = title;
    }

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    if (description) {
      updateMetaTag('description', description);
      updateMetaTag('og:description', ogDescription || description, true);
    }

    if (keywords) {
      updateMetaTag('keywords', keywords);
    }

    if (ogTitle || title) {
      updateMetaTag('og:title', ogTitle || title || '', true);
    }

    if (ogImage) {
      updateMetaTag('og:image', ogImage, true);
    }

    if (ogUrl) {
      updateMetaTag('og:url', ogUrl, true);
    }

    // Handle canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
    }

    // Handle noindex
    if (noindex) {
      updateMetaTag('robots', 'noindex,nofollow');
    } else {
      updateMetaTag('robots', 'index,follow');
    }

    // Handle JSON-LD structured data
    if (jsonLd) {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, canonicalUrl, noindex, jsonLd]);
};

// SEO utility functions
export const generatePageSEO = (pageName: string, customData?: Partial<SEOProps>): SEOProps => {
  const baseUrl = 'https://verticalflow.gr';
  
  const seoData = {
    home: {
      title: 'VerticalFlow - Digital Agency Θεσσαλονίκη | Reels & Social Media Marketing',
      description: 'Η κορυφαία Digital Agency στη Θεσσαλονίκη για Reels, Social Media Marketing, Video Editing και Personal Branding. Δημιουργούμε viral content που αυξάνει τις πωλήσεις σας.',
      keywords: 'digital agency Θεσσαλονίκη, reels Θεσσαλονίκη, social media Θεσσαλονίκη, video editing Θεσσαλονίκη, personal branding Θεσσαλονίκη',
      ogImage: `${baseUrl}/hero-image.jpg`,
      ogUrl: baseUrl,
    },
    'reels-thessaloniki': {
      title: 'Reels Θεσσαλονίκη - Δημιουργία Viral Short-Form Videos | VerticalFlow',
      description: 'Εξειδικευμένη υπηρεσία Reels στη Θεσσαλονίκη. Δημιουργούμε viral Instagram Reels και TikTok videos που αυξάνουν τους followers και τις πωλήσεις σας.',
      keywords: 'reels Θεσσαλονίκη, short form videos, Instagram reels agency, TikTok videos Greece, viral videos Θεσσαλονίκη',
      ogImage: `${baseUrl}/reels-service.jpg`,
      ogUrl: `${baseUrl}/reels-thessaloniki`,
    },
    'social-media-thessaloniki': {
      title: 'Social Media Marketing Θεσσαλονίκη - Διαχείριση & Στρατηγική | VerticalFlow',
      description: 'Ολοκληρωμένες υπηρεσίες Social Media Marketing στη Θεσσαλονίκη. Διαχείριση λογαριασμών, content creation και paid advertising που φέρνουν αποτελέσματα.',
      keywords: 'social media Θεσσαλονίκη, social media manager Θεσσαλονίκη, digital marketing Θεσσαλονίκη, Instagram marketing',
      ogImage: `${baseUrl}/social-media-service.jpg`,
      ogUrl: `${baseUrl}/social-media-thessaloniki`,
    },
    'video-editing-thessaloniki': {
      title: 'Video Editing Θεσσαλονίκη - Επαγγελματικό Μοντάζ | VerticalFlow',
      description: 'Επαγγελματικές υπηρεσίες Video Editing στη Θεσσαλονίκη. Μοντάζ για Reels, YouTube, εταιρικά videos και personal branding content.',
      keywords: 'video editing Θεσσαλονίκη, μοντάζ videos, video production Θεσσαλονίκη, YouTube editing',
      ogImage: `${baseUrl}/video-editing-service.jpg`,
      ogUrl: `${baseUrl}/video-editing-thessaloniki`,
    },
    'tiktok-greece': {
      title: 'TikTok Marketing Greece - Viral Content Strategy | VerticalFlow',
      description: 'Εξειδικευμένη στρατηγική TikTok Marketing για την ελληνική αγορά. Δημιουργία viral TikTok videos και content που φέρνει followers και engagement.',
      keywords: 'TikTok Greece, TikTok marketing, viral TikTok videos, TikTok strategy Greece, content creator Greece',
      ogImage: `${baseUrl}/tiktok-service.jpg`,
      ogUrl: `${baseUrl}/tiktok-greece`,
    },
    about: {
      title: 'Panagiotis Xorianopoulos - Digital Marketing Expert & Personal Branding | VerticalFlow',
      description: 'Γνωρίστε τον Panagiotis Xorianopoulos, Digital Marketing Expert και founder του VerticalFlow. Εξειδίκευση σε Reels, Social Media και Personal Branding.',
      keywords: 'Panagiotis Xorianopoulos, personal branding Θεσσαλονίκη, digital marketing expert, social media expert Greece',
      ogImage: `${baseUrl}/panagiotis-profile.jpg`,
      ogUrl: `${baseUrl}/about`,
    },
    contact: {
      title: 'Επικοινωνία - VerticalFlow Digital Agency Θεσσαλονίκη',
      description: 'Επικοινωνήστε με το VerticalFlow για συνεργασία σε Digital Marketing, Reels, Social Media και Video Editing. Γραφεία στη Θεσσαλονίκη.',
      keywords: 'επικοινωνία VerticalFlow, digital agency Θεσσαλονίκη contact, social media agency contact',
      ogImage: `${baseUrl}/contact-verticalflow.jpg`,
      ogUrl: `${baseUrl}/contact`,
    },
  };

  const pageData = seoData[pageName as keyof typeof seoData] || seoData.home;
  
  return {
    ...pageData,
    ...customData,
    canonicalUrl: customData?.canonicalUrl || pageData.ogUrl,
  };
};
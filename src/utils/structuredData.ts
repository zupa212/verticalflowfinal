// Structured Data (JSON-LD) utilities for SEO

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "VerticalFlow",
  "alternateName": "VerticalFlow Digital Agency",
  "url": "https://verticalflow.gr",
  "logo": "https://verticalflow.gr/logo.png",
  "description": "Η κορυφαία Digital Agency στη Θεσσαλονίκη για Reels, Social Media Marketing, Video Editing και Personal Branding.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Τσιμισκή 15",
    "addressLocality": "Θεσσαλονίκη",
    "addressRegion": "Κεντρική Μακεδονία",
    "postalCode": "54624",
    "addressCountry": "GR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+30-231-0123456",
    "contactType": "customer service",
    "areaServed": "GR",
    "availableLanguage": ["Greek", "English"]
  },
  "founder": {
    "@type": "Person",
    "name": "Panagiotis Xorianopoulos",
    "jobTitle": "Digital Marketing Expert & CEO"
  },
  "sameAs": [
    "https://www.instagram.com/verticalflow.gr",
    "https://www.tiktok.com/@verticalflow",
    "https://www.linkedin.com/company/verticalflow"
  ],
  "areaServed": {
    "@type": "Place",
    "name": "Θεσσαλονίκη, Ελλάδα"
  },
  "knowsAbout": [
    "Social Media Marketing",
    "Instagram Reels",
    "TikTok Marketing", 
    "Video Editing",
    "Personal Branding",
    "Digital Strategy"
  ]
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "VerticalFlow Digital Agency",
  "image": "https://verticalflow.gr/hero-image.jpg",
  "url": "https://verticalflow.gr",
  "telephone": "+30-231-0123456",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Τσιμισκή 15",
    "addressLocality": "Θεσσαλονίκη",
    "addressRegion": "Κεντρική Μακεδονία",
    "postalCode": "54624",
    "addressCountry": "GR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.6401,
    "longitude": 22.9444
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "priceRange": "€€",
  "description": "Εξειδικευμένη Digital Agency στη Θεσσαλονίκη για Reels, Social Media Marketing, Video Editing και Personal Branding.",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127"
  }
});

export const generateServiceSchema = (serviceName: string, serviceUrl: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "url": serviceUrl,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": "VerticalFlow",
    "url": "https://verticalflow.gr"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Θεσσαλονίκη, Ελλάδα"
  },
  "category": "Digital Marketing",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": serviceName
        }
      }
    ]
  }
});

export const generateArticleSchema = (
  title: string,
  description: string,
  url: string,
  publishDate: string,
  author: string = "Panagiotis Xorianopoulos",
  imageUrl?: string
) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "url": url,
  "datePublished": publishDate,
  "dateModified": publishDate,
  "author": {
    "@type": "Person",
    "name": author,
    "url": "https://verticalflow.gr/about"
  },
  "publisher": {
    "@type": "Organization",
    "name": "VerticalFlow",
    "logo": {
      "@type": "ImageObject",
      "url": "https://verticalflow.gr/logo.png"
    }
  },
  "image": imageUrl ? {
    "@type": "ImageObject",
    "url": imageUrl
  } : undefined,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": url
  }
});

export const generateFAQSchema = (faqs: Array<{question: string; answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generatePersonSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Panagiotis Xorianopoulos",
  "jobTitle": "Digital Marketing Expert & CEO",
  "worksFor": {
    "@type": "Organization",
    "name": "VerticalFlow"
  },
  "url": "https://verticalflow.gr/about",
  "sameAs": [
    "https://www.linkedin.com/in/panagiotis-xorianopoulos",
    "https://www.instagram.com/panagiotis.xorianopoulos"
  ],
  "knowsAbout": [
    "Digital Marketing",
    "Social Media Strategy",
    "Content Creation",
    "Personal Branding",
    "Video Marketing",
    "SEO"
  ],
  "alumniOf": {
    "@type": "Organization",
    "name": "Aristotle University of Thessaloniki"
  },
  "description": "Digital Marketing Expert εξειδικευμένος σε Social Media Marketing, Reels, Personal Branding και Video Content Creation στη Θεσσαλονίκη."
});
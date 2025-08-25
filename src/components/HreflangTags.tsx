import React from 'react';
import { Helmet } from 'react-helmet-async';

interface HreflangTagsProps {
  currentUrl: string;
  currentLang: 'el' | 'en';
}

const HreflangTags: React.FC<HreflangTagsProps> = ({ currentUrl, currentLang }) => {
  const baseUrl = 'https://verticalflow.gr';
  
  // Generate alternate language URLs
  const getAlternateUrl = (lang: 'el' | 'en') => {
    if (lang === 'el') {
      // Greek version - remove /en/ if present
      return currentUrl.replace('/en/', '/');
    } else {
      // English version - add /en/ if not present
      return currentUrl.includes('/en/') ? currentUrl : currentUrl.replace(baseUrl, `${baseUrl}/en`);
    }
  };

  const greekUrl = getAlternateUrl('el');
  const englishUrl = getAlternateUrl('en');

  return (
    <Helmet>
      {/* Hreflang tags for language alternatives */}
      <link rel="alternate" hreflang="el" href={greekUrl} />
      <link rel="alternate" hreflang="en" href={englishUrl} />
      <link rel="alternate" hreflang="x-default" href={greekUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Language-specific meta tags */}
      <html lang={currentLang} />
      <meta property="og:locale" content={currentLang === 'el' ? 'el_GR' : 'en_US'} />
      <meta property="og:locale:alternate" content={currentLang === 'el' ? 'en_US' : 'el_GR'} />
    </Helmet>
  );
};

export default HreflangTags;

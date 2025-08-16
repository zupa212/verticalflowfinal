
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ReelsSection from '@/components/ReelsSection';
import Achievements from '@/components/Achievements';
import BrandCarousel from '@/components/BrandCarousel';
import GSAPScrollStack from '@/components/GSAPScrollStack';
import ComparisonSection from '@/components/ComparisonSection';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import TechStackSection from '@/components/TechStackSection';
import BlogSection from '@/components/BlogSection';
import BrandsSlider from '@/components/BrandsSlider';
import LevelUpCTA from '@/components/LevelUpCTA';
import Footer from '@/components/Footer';
import { useSEO, generatePageSEO } from '@/hooks/useSEO';
import { generateOrganizationSchema, generateLocalBusinessSchema } from '@/utils/structuredData';

const Index = () => {
  const seoData = generatePageSEO('home');
  
  useSEO({
    ...seoData,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        generateOrganizationSchema(),
        generateLocalBusinessSchema()
      ]
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <ReelsSection />
        <BrandCarousel />
        <Achievements />
        <Testimonials />
        <Process />
        
        {/* GSAP ScrollStack Services Section */}
        <GSAPScrollStack />
        
        <Portfolio />
        <TechStackSection />
        <BlogSection />
        <BrandsSlider />
        <LevelUpCTA />
        <ComparisonSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

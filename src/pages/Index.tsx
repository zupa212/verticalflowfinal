
import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ReelsSection from '@/components/ReelsSection';
import Achievements from '@/components/Achievements';
import BrandCarousel from '@/components/BrandCarousel';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack';
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
        
        {/* ScrollStack Section */}
        <div className="h-screen">
          <ScrollStack>
            <ScrollStackItem>
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Our Creative Process</h2>
                <p className="text-muted-foreground text-lg">We combine strategic thinking with creative execution to deliver content that resonates with your audience and drives real results.</p>
              </div>
            </ScrollStackItem>
            <ScrollStackItem>
              <div className="bg-gradient-to-br from-secondary/20 to-secondary/5 border border-secondary/20">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Data-Driven Insights</h2>
                <p className="text-muted-foreground text-lg">Every piece of content is backed by comprehensive analytics and market research to ensure maximum engagement and conversion.</p>
              </div>
            </ScrollStackItem>
            <ScrollStackItem>
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Premium Production</h2>
                <p className="text-muted-foreground text-lg">Our state-of-the-art equipment and expert team deliver Hollywood-quality content that sets your brand apart from the competition.</p>
              </div>
            </ScrollStackItem>
            <ScrollStackItem>
              <div className="bg-gradient-to-br from-primary/20 to-accent/5 border border-primary/20">
                <h2 className="text-3xl font-bold mb-4 text-foreground">Results That Matter</h2>
                <p className="text-muted-foreground text-lg">See measurable growth in engagement, brand awareness, and conversions with our proven content strategies.</p>
              </div>
            </ScrollStackItem>
          </ScrollStack>
        </div>
        
        <BrandCarousel />
        <Achievements />
        <Testimonials />
        <Process />
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

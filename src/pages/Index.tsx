import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Achievements from '@/components/Achievements';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import BrandsSlider from '@/components/BrandsSlider';
import LevelUpCTA from '@/components/LevelUpCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Achievements />
        <Testimonials />
        <Process />
        <Portfolio />
        <BrandsSlider />
        <LevelUpCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

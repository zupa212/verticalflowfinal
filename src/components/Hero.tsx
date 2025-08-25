import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';
import TypewriterText from '@/components/TypewriterText';
import { LottieAnimation } from '@/components/LottieAnimation';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(headlineRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(ctaRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.3"
    );
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Enhanced Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/5 via-transparent to-background/5" />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full text-sm font-medium border border-green-500/20 mb-12"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium">
            {t('hero.badge')}
          </span>
        </motion.div>

        {/* Main Headline */}
        <div ref={headlineRef} className="mb-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-4 text-foreground hover-glow cursor-default">
            {t('hero.title.main')}
          </h1>
          <TypewriterText 
            staticText={t('hero.title.for')} 
            phrases={t('hero.title.phrases', { returnObjects: true }) as string[]}
            className="justify-center"
          />
        </div>

        {/* Subheadline */}
        <p
          ref={subtitleRef}
          className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12"
        >
          {t('hero.description')}
        </p>

        {/* CTA Button */}
        <div
          ref={ctaRef}
          className="mb-20"
        >
          <Button 
            size="lg" 
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 py-4 text-base font-semibold shadow-lg button-glow"
          >
            {t('hero.cta.main')}
          </Button>
        </div>


      </div>
    </section>
  );
};

export default Hero;
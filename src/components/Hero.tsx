import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Clock, FileText, Infinity } from 'lucide-react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

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
    )
    .fromTo(featuresRef.current?.children ? Array.from(featuresRef.current.children) : [],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: "power2.out" },
      "-=0.2"
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
            Available for New Projects
          </span>
        </motion.div>

        {/* Main Headline */}
        <h1
          ref={headlineRef}
          className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 text-foreground hover-glow cursor-default"
        >
          A DEDICATED DESIGN TEAM<br />
          FOR STARTUPS
        </h1>

        {/* Subheadline */}
        <p
          ref={subtitleRef}
          className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12"
        >
          We don't just design, we solve your brand's biggest challenges
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
            View Plans and Pricing
          </Button>
        </div>

        {/* Feature Icons Row */}
        <div
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center gap-3 hover-glow cursor-pointer group">
            <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center group-hover:bg-muted/70 transition-all duration-300">
              <Clock className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-sm font-medium text-foreground text-center group-hover:text-foreground/80 transition-colors duration-300">48 Hours Delivery</span>
          </div>
          
          <div className="flex flex-col items-center gap-3 hover-glow cursor-pointer group">
            <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center group-hover:bg-muted/70 transition-all duration-300">
              <FileText className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-sm font-medium text-foreground text-center group-hover:text-foreground/80 transition-colors duration-300">Access to Private Design Portal</span>
          </div>
          
          <div className="flex flex-col items-center gap-3 hover-glow cursor-pointer group">
            <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center group-hover:bg-muted/70 transition-all duration-300">
              <Infinity className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-sm font-medium text-foreground text-center group-hover:text-foreground/80 transition-colors duration-300">Unlimited Design Requests</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
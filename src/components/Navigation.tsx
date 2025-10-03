"use client";

import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { gsap } from 'gsap';

const Navigation: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(logoRef.current,
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(linksRef.current?.children ? Array.from(linksRef.current.children) : [],
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
      "-=0.3"
    )
    .fromTo(buttonRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
      "-=0.2"
    );
  }, []);

  return (
    <header className="fixed top-2 sm:top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-2 sm:px-4">
      {/* Grid background for header area */}
      <div className="absolute inset-0 grid-bg rounded-full" />
      <nav 
        ref={navRef}
        className="relative bg-background/95 backdrop-blur-md border border-border rounded-full px-3 sm:px-6 py-3 sm:py-4 shadow-lg nav-glow"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div 
              ref={logoRef}
              className="text-lg sm:text-xl md:text-2xl font-black text-foreground cursor-pointer relative group"
            >
              <span className="inline-block group-hover:animate-bounce transition-all duration-300">
                Verticalflow
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md blur-sm -z-10" />
            </div>
          </div>

          {/* Navigation Links */}
          <div 
            ref={linksRef}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#achievements" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">
              Achievements
            </a>
            <a href="#work" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">
              Our Work
            </a>
            <a href="#comparison" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">
              Comparison
            </a>
            <a href="#faqs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105">
              FAQs
            </a>
          </div>

          {/* CTA Button */}
          <div ref={buttonRef}>
            <Button 
              variant="default" 
              size="sm"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-3 sm:px-6 py-2 text-xs sm:text-sm font-semibold shadow-md button-glow"
            >
              <span className="hidden sm:inline">Plans and Pricing</span>
              <span className="sm:hidden">Pricing</span>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;

"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Home, Trophy, Shield, BarChart3, HelpCircle, X, Instagram, Mail } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);
const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const navigationItems = [{
    icon: Home,
    label: 'Home',
    href: '#'
  }, {
    icon: Trophy,
    label: 'Achievements',
    href: '#achievements'
  }, {
    icon: Shield,
    label: 'Our Work',
    href: '#work'
  }, {
    icon: BarChart3,
    label: 'Comparison',
    href: '#comparison'
  }, {
    icon: HelpCircle,
    label: 'FAQs',
    href: '#faqs'
  }];
  const socialItems = [{
    icon: X,
    label: 'X',
    href: '#'
  }, {
    icon: Instagram,
    label: 'Instagram',
    href: '#'
  }, {
    icon: Mail,
    label: 'Email',
    href: '#'
  }];
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo animation
      gsap.fromTo(logoRef.current, {
        y: 30,
        opacity: 0,
        scale: 0.8
      }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: logoRef.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse"
        }
      });

      // Navigation items animation
      if (navRef.current && navRef.current.children.length > 0) {
        const navItems = Array.from(navRef.current.children);
        gsap.fromTo(navItems, {
          y: 20,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: navRef.current,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Social items animation
      if (socialRef.current && socialRef.current.children.length > 0) {
        const socialItems = Array.from(socialRef.current.children);
        gsap.fromTo(socialItems, {
          scale: 0,
          rotation: -180,
          opacity: 0
        }, {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: socialRef.current,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse"
          }
        });
      }
    }, footerRef);
    return () => ctx.revert();
  }, []);
  return <footer ref={footerRef} className="relative bg-muted/30 border-t border-border section-separator">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-sm text-muted-foreground">
              © 2025 Kree8 All rights reserved
            </p>
          </div>

          {/* Center Navigation */}
          <div ref={navRef} className="flex justify-center">
            <div className="flex items-center gap-8 bg-background/50 backdrop-blur-sm border border-border rounded-full px-8 py-4 nav-glow">
              {navigationItems.map((item, index) => <motion.a key={item.label} href={item.href} className="flex flex-col items-center gap-1 hover-glow cursor-pointer group transition-all duration-300" whileHover={{
              y: -2
            }} whileTap={{
              scale: 0.95
            }}>
                  <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:scale-110 transition-all duration-300" />
                  <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300 hidden sm:block">
                    {item.label}
                  </span>
                </motion.a>)}
            </div>
          </div>

          {/* Right Side - Social & CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-end">
            {/* Social Links */}
            <div ref={socialRef} className="flex items-center gap-3">
              {socialItems.map((item, index) => <motion.a key={item.label} href={item.href} className="w-10 h-10 bg-muted/50 hover:bg-muted/70 rounded-full flex items-center justify-center hover-glow cursor-pointer group transition-all duration-300" whileHover={{
              scale: 1.1,
              rotate: 5
            }} whileTap={{
              scale: 0.9
            }}>
                  <item.icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
                </motion.a>)}
            </div>

            {/* CTA Button */}
            <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 font-semibold shadow-md button-glow">
              View Plans and Pricing
            </Button>
          </div>
        </div>

        {/* Bottom Logo */}
        <div className="mt-16 pt-8 border-t border-border">
          <div ref={logoRef} className="text-center">
            <div className="text-4xl font-black text-foreground hover-glow cursor-pointer inline-block">VERTICALFLOW

          </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
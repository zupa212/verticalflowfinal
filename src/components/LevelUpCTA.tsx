import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Mouse, Instagram, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LevelUpCTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const tasks = [
    "Page need to update",
    "Pitch deck urgent", 
    "Branding",
    "Landing Page",
    "Logo",
    "Website redesign",
    "Social media kit",
    "Email templates"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section animation
      if (sectionRef.current) {
        gsap.to(sectionRef.current, {
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 40%",
            toggleActions: "play none none reverse"
          }
        });
      }

      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 80, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Button animation
      gsap.fromTo(buttonRef.current,
        { scale: 0.5, opacity: 0, rotation: -10 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Slider animation
      if (sliderRef.current) {
        const cards = Array.from(sliderRef.current.querySelectorAll('.task-card'));
        gsap.fromTo(cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sliderRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    // Auto-slide effect
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % Math.max(1, tasks.length - 3));
    }, 3000);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, [tasks.length]);

  const handleJoinClick = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Container */}
        <div className="bg-foreground text-background rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' fill='white' fill-opacity='0.1' stroke='white' stroke-opacity='0.1' stroke-width='1'%3E%3Cpath d='M0 16h32M16 0v32'/%3E%3C/svg%3E")`
            }} />
          </div>
          
          <div className="relative z-10 text-center">
            {/* Main Title */}
            <h2
              ref={titleRef}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-8 text-background leading-tight"
            >
              If you scrolled this far, It's time to <span className="text-green-400">LEVEL UP</span>
            </h2>

            {/* CTA Button with Glow */}
            <div ref={buttonRef} className="mb-8">
              <div className="relative inline-block">
                <Button 
                  onClick={handleJoinClick}
                  size="lg" 
                  className="bg-background text-foreground hover:bg-background/90 rounded-full px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-bold shadow-2xl group relative overflow-hidden animate-pulse hover:animate-none transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Mouse className="w-5 h-5 group-hover:animate-bounce" />
                    Join the Elite Club
                  </span>
                  {/* Continuous glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 animate-pulse rounded-full" />
                </Button>
                
                {/* Just click indicator */}
                <motion.div 
                  className="mt-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <span className="text-xs sm:text-sm text-background/80 bg-background/10 px-3 py-1 rounded-full border border-background/20">
                    Just click
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Trust message */}
            <p className="text-base sm:text-lg text-background/80 mb-12">
              Trust me we are good at this :)
            </p>

            {/* Task Slider */}
            <div 
              ref={sliderRef}
              className="relative mb-16"
            >
              <div className="flex gap-3 sm:gap-4 overflow-hidden justify-center">
                <div 
                  className="flex gap-3 sm:gap-4 transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}px)` }}
                >
                  {tasks.map((task, index) => (
                    <motion.div
                      key={index}
                      className="task-card flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-background/20 rounded-full px-3 sm:px-4 py-2 whitespace-nowrap flex-shrink-0"
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                      </div>
                      <span className="text-xs sm:text-sm text-background/90 font-medium">{task}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Copyright and Social */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-background/20">
              <p className="text-xs sm:text-sm text-background/60">
                © 2025 Verticalflow All rights reserved
              </p>
              
              <div className="flex items-center gap-3">
                <motion.a
                  href="#"
                  className="w-8 h-8 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="w-4 h-4 text-background/80" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-8 h-8 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail className="w-4 h-4 text-background/80" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevelUpCTA;
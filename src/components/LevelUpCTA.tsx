import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LevelUpCTA: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const tasksRef = useRef<HTMLDivElement>(null);
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);

  const leftTasks = [
    "Logo to update",
    "Pitch deck urgent", 
    "Branding",
    "Landing Page",
    "Contact Page need to update"
  ];

  const rightTasks = [
    "Contact Page need to update",
    "Pitch deck urgent",
    "Branding", 
    "Logo",
    "Landing Page"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section background animation - removed due to GSAP color parsing issues
      // Instead, we'll use CSS transitions for the background
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

      // Tasks animation
      if (tasksRef.current) {
        const leftTaskElements = Array.from(tasksRef.current.querySelectorAll('.left-task'));
        const rightTaskElements = Array.from(tasksRef.current.querySelectorAll('.right-task'));

        if (leftTaskElements.length > 0) {
          gsap.fromTo(leftTaskElements,
            { x: -100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: tasksRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        if (rightTaskElements.length > 0) {
          gsap.fromTo(rightTaskElements,
            { x: 100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: tasksRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      }
    }, sectionRef);

    // Simulate task completion
    const interval = setInterval(() => {
      if (completedTasks.length < rightTasks.length) {
        setCompletedTasks(prev => [...prev, prev.length]);
      }
    }, 1500);

    return () => {
      ctx.revert();
      clearInterval(interval);
    };
  }, [completedTasks.length, rightTasks.length]);

  const handleJoinClick = () => {
    // Animate button click
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
      className="relative py-32 overflow-hidden bg-gradient-to-br from-foreground via-foreground/95 to-foreground text-background section-separator"
    >
      {/* Grid Background - inverted for dark section */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' fill='white' fill-opacity='0.1' stroke='white' stroke-opacity='0.1' stroke-width='1'%3E%3Cpath d='M0 16h32M16 0v32'/%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 text-background leading-tight"
          >
            If you scrolled this far, It's time to <span className="text-gradient-inverse">LEVEL UP</span>
          </h2>

          {/* CTA Button */}
          <div ref={buttonRef} className="mb-12">
            <Button 
              onClick={handleJoinClick}
              size="lg" 
              className="bg-background text-foreground hover:bg-background/90 rounded-full px-12 py-6 text-lg font-bold shadow-2xl group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                Join the Elite Club
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-background to-background/80 group-hover:from-background/90 group-hover:to-background transition-all duration-300" />
            </Button>
            
            {/* Just click indicator */}
            <motion.div 
              className="mt-3 flex items-center justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <span className="text-sm text-background/80 bg-background/10 px-3 py-1 rounded-full border border-background/20">
                Just click
              </span>
            </motion.div>
          </div>

          <p className="text-lg text-background/80 mb-20">
            Trust me we are good at this :)
          </p>
        </div>

        {/* Task Lists Comparison */}
        <div 
          ref={tasksRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center"
        >
          {/* Left Tasks (Before) */}
          <div className="space-y-4">
            {leftTasks.map((task, index) => (
              <motion.div
                key={index}
                className="left-task flex items-center gap-3 p-4 bg-background/10 rounded-lg border border-background/20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-4 h-4 border-2 border-background/40 rounded" />
                <span className="text-background/80 text-sm">{task}</span>
              </motion.div>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex justify-center">
            <div className="text-6xl font-black text-background hover-glow cursor-pointer">
              kree8
            </div>
          </div>

          {/* Right Tasks (After) */}
          <div className="space-y-4">
            {rightTasks.map((task, index) => (
              <motion.div
                key={index}
                className={`right-task flex items-center gap-3 p-4 rounded-lg border transition-all duration-500 ${
                  completedTasks.includes(index) 
                    ? 'bg-green-500/20 border-green-500/40' 
                    : 'bg-background/10 border-background/20'
                }`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-4 h-4 rounded transition-all duration-300 flex items-center justify-center ${
                  completedTasks.includes(index)
                    ? 'bg-green-500'
                    : 'border-2 border-background/40'
                }`}>
                  {completedTasks.includes(index) && (
                    <Check className="w-3 h-3 text-white" />
                  )}
                </div>
                <span className={`text-sm transition-all duration-300 ${
                  completedTasks.includes(index)
                    ? 'text-green-300 line-through'
                    : 'text-background/80'
                }`}>
                  {task}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LevelUpCTA;
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      // GSAP grid animation
      const gridLines = gridRef.current.querySelectorAll('.grid-line');
      
      gsap.fromTo(gridLines, 
        { 
          opacity: 0,
          scale: 0.8 
        },
        {
          opacity: 0.3,
          scale: 1,
          duration: 2,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  const steps = [
    {
      number: "Step 1",
      title: "Choose Your Plan",
      description: "Select the best plan that suits your requirement",
      icon: <Star className="w-6 h-6" />
    },
    {
      number: "Step 2", 
      title: "Submit Your Request",
      description: "Use our private design portal to submit your design needs.",
      icon: <ArrowDown className="w-6 h-6" />
    },
    {
      number: "Step 3",
      title: "We Deliver :)",
      description: "Our talented team delivers in 2-3 days",
      icon: <Star className="w-6 h-6" />
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Animated Grid Background */}
      <div ref={gridRef} className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="grid-line absolute h-full w-px bg-border"
            style={{ left: `${(i + 1) * 5}%` }}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="grid-line absolute w-full h-px bg-border"
            style={{ top: `${(i + 1) * 6.67}%` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black mb-6">
            How simple it can be to get
            <br />
            your Projects Done
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Just step away from those traditional old methods of
            <br />
            hiring plus managing and see for yourself
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Video Preview Panel */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-full max-w-md lg:max-w-lg">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-muted rounded-xl overflow-hidden relative group">
                  {/* Video Preview Mockup */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-background/80 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <div className="w-0 h-0 border-l-6 border-r-0 border-t-4 border-b-4 border-l-primary border-t-transparent border-b-transparent ml-1"></div>
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">Sample Design Process</p>
                    </div>
                  </div>
                  
                  {/* Grid overlay for design tool aesthetic */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                      {[...Array(48)].map((_, i) => (
                        <div key={i} className="border border-border/30"></div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <h4 className="font-semibold text-foreground">Watch Our Process</h4>
                  <p className="text-sm text-muted-foreground mt-1">See how we transform your ideas into reality</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Step Cards */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        {step.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                        {step.number}: {step.title}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="mt-4 h-1 bg-gradient-to-r from-primary/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
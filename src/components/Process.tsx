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
          {/* Left Column - Interactive Card */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Most Popular Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
              >
                <div className="flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 shadow-lg">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">Most popular</span>
                </div>
              </motion.div>

              {/* Main Card */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="bg-brand text-brand-foreground rounded-3xl p-12 w-80 h-96 flex flex-col items-center justify-center text-center shadow-2xl"
                style={{ 
                  background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                  transform: 'perspective(1000px) rotateX(5deg)'
                }}
              >
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="mb-8"
                >
                  <ArrowDown className="w-12 h-12 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  You have done
                  <br />
                  your part
                </h3>

                <div className="mt-8">
                  <span className="text-white/80">It's our turn now</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Steps */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{step.number}</h4>
                  <h5 className="text-lg font-semibold mb-2">{step.title}</h5>
                  <p className="text-muted-foreground">{step.description}</p>
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
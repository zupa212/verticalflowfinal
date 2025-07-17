import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';

gsap.registerPlugin(ScrollTrigger);

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const gridLines = gridRef.current.querySelectorAll('.grid-line');
      
      gsap.fromTo(gridLines, 
        { 
          opacity: 0,
          y: 20 
        },
        {
          opacity: 0.2,
          y: 0,
          duration: 1.5,
          stagger: 0.05,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  const projects = [
    {
      id: 1,
      title: "Feather - Task Management",
      category: "Mobile App Design",
      image: portfolio1,
      gradient: "from-green-400 to-blue-500"
    },
    {
      id: 2,
      title: "Sound Station",
      category: "Music Platform",
      image: portfolio2,
      gradient: "from-purple-400 to-pink-500"
    },
    {
      id: 3,
      title: "Meeting Platform",
      category: "Web Application",
      image: portfolio3,
      gradient: "from-orange-400 to-red-500"
    },
    {
      id: 4,
      title: "Fashion Store",
      category: "E-commerce App",
      image: portfolio4,
      gradient: "from-gray-400 to-gray-600"
    }
  ];

  return (
    <section ref={sectionRef} id="work" className="py-16 lg:py-24 bg-muted/20 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div ref={gridRef} className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="grid-line absolute h-full w-px bg-border"
            style={{ left: `${i * 4}%` }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="grid-line absolute w-full h-px bg-border"
            style={{ top: `${i * 5}%` }}
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
          <p className="text-muted-foreground mb-4">Still confused about us</p>
          <h2 className="text-4xl lg:text-5xl font-black">See our work</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{ aspectRatio: '4/5' }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
              
              {/* Project Image */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-64 h-48 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-white/10 rounded-2xl" />
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="text-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-between"
                  >
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/80">{project.category}</p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black px-6 py-3 rounded-full font-semibold"
                  >
                    View Project
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Navigation Bar */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <div className="bg-card rounded-full p-4 shadow-lg border border-border">
            <div className="flex items-center gap-8">
              <motion.div whileHover={{ scale: 1.1 }} className="p-3 hover:bg-muted rounded-full cursor-pointer">
                <div className="w-6 h-6 bg-primary rounded-sm" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-3 hover:bg-muted rounded-full cursor-pointer">
                <div className="w-6 h-6 border-2 border-muted-foreground rounded-sm" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-3 hover:bg-muted rounded-full cursor-pointer">
                <div className="w-6 h-6 bg-muted-foreground rounded-full" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-3 hover:bg-muted rounded-full cursor-pointer">
                <div className="w-6 h-6 border-2 border-muted-foreground" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="p-3 hover:bg-muted rounded-full cursor-pointer">
                <div className="w-6 h-6 bg-muted-foreground rounded-sm" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
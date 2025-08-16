import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import LazyImage from '@/components/LazyImage';
import { analytics } from '@/utils/analytics';
import { useTranslation } from 'react-i18next';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';

gsap.registerPlugin(ScrollTrigger);

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
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

  const handleProjectClick = (project: any) => {
    analytics.event('project_click', {
      event_category: 'portfolio',
      event_label: project.title,
    });
  };

  const projects = [
    {
      id: 1,
      title: t('portfolio.project1.title'),
      category: t('portfolio.project1.category'),
      image: portfolio1,
      logo: portfolio1,
      description: "Μοντέρνη πλατφόρμα e-commerce με ολοκληρωμένο σύστημα πληρωμών και διαχείρισης παραγγελιών.",
      technologies: ["React", "Node.js", "MongoDB"],
      client: t('portfolio.project1.client'),
      url: "https://example.com",
      gradient: "from-green-400 to-blue-500"
    },
    {
      id: 2,
      title: t('portfolio.project2.title'),
      category: t('portfolio.project2.category'),
      image: portfolio2,
      logo: portfolio2,
      description: "Δημιουργική ταυτότητα για digital agency στη Θεσσαλονίκη με έμφαση στα reels και το social media.",
      technologies: ["Figma", "Illustrator", "After Effects"],
      client: t('portfolio.project2.client'),
      url: "https://example.com",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      id: 3,
      title: t('portfolio.project3.title'),
      category: t('portfolio.project3.category'),
      image: portfolio3,
      logo: portfolio3,
      description: "Καινοτόμα εφαρμογή για τοπικές επιχειρήσεις με GPS integration και real-time notifications.",
      technologies: ["React Native", "Firebase", "Google Maps API"],
      client: t('portfolio.project3.client'),
      url: "https://example.com",
      gradient: "from-orange-400 to-red-500"
    },
    {
      id: 4,
      title: t('portfolio.project4.title'),
      category: t('portfolio.project4.category'),
      image: portfolio4,
      logo: portfolio4,
      description: "Στρατηγική καμπάνια social media με viral reels που αύξησε την επισκεψιμότητα κατά 300%.",
      technologies: ["Meta Ads", "Google Ads", "Analytics"],
      client: t('portfolio.project4.client'),
      url: "https://example.com",
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
          <p className="text-muted-foreground mb-4">{t('portfolio.subtitle')}</p>
          <h2 className="text-4xl lg:text-5xl font-black">{t('portfolio.title')}</h2>
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
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/20 backdrop-blur-sm"
              style={{ aspectRatio: '4/5' }}
              onClick={() => handleProjectClick(project)}
            >
              {/* Glassmorphism Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70`} />
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl" />
              
              {/* Project Image */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="relative">
                      <LazyImage
                        src={project.image}
                        alt={`${project.title} - ${project.category} project by VerticalFlow Digital Agency Θεσσαλονίκη showcasing ${project.description.slice(0, 50)}...`}
                        className="w-64 h-48 rounded-2xl shadow-2xl border border-white/30"
                        width={256}
                        height={192}
                        priority={index < 2}
                      />
                      {/* Glassmorphism overlay on image */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/20 rounded-2xl backdrop-blur-[1px]" />
                      
                      {/* Glass layers effect */}
                      <div className="absolute inset-2 bg-white/5 rounded-xl border border-white/20" />
                      <div className="absolute inset-4 bg-white/5 rounded-lg border border-white/10" />
                    </div>
                    
                    {/* Project Logo with glassmorphism */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/40 shadow-2xl">
                      <LazyImage
                        src={project.logo}
                        alt={`${project.client} company logo - VerticalFlow client success story in ${project.category}`}
                        className="w-10 h-10 rounded-full"
                        width={40}
                        height={40}
                        priority={index < 2}
                      />
                    </div>
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
                      <p className="text-white/60 text-sm mt-1">{project.client}</p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-lg"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Detailed Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0, x: "100%" }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 bg-black/95 backdrop-blur-sm flex flex-col justify-between p-8"
                >
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                        <img
                          src={project.logo}
                          alt={`${project.client} logo - VerticalFlow digital marketing success story`}
                          className="w-14 h-14 object-cover rounded-full"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{project.title}</h4>
                        <p className="text-white/80 font-medium">{project.client}</p>
                        <p className="text-white/60 text-sm">{project.category}</p>
                      </div>
                    </div>
                    
                    <p className="text-white/90 text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h5 className="text-white font-semibold mb-3 text-sm">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-white/20 text-white text-xs rounded-full border border-white/30 backdrop-blur-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white/90 backdrop-blur-md text-black font-bold py-4 px-6 rounded-2xl flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300 border border-white/30"
                  >
                    <span>{t('portfolio.view.project')}</span>
                    <ExternalLink size={18} />
                  </motion.a>
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

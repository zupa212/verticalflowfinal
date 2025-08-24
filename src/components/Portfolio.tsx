import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Star } from 'lucide-react';

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: "Elite Media Course",
      subtitle: "Premium Digital Marketing Education",
      category: "Education & Training",
      description: "Comprehensive digital marketing course designed for professionals seeking to master modern media strategies and techniques.",
      image: "/assets/portfolio-1.jpg",
      video: "/videos/elite-media-course.mp4",
      technologies: ["Video Production", "Course Design", "Digital Marketing"],
      rating: 5,
      year: "2024",
      link: "#elite-media-course"
    },
    {
      id: 2,
      title: "Ten Fabric",
      subtitle: "Luxury Fashion Brand",
      category: "Fashion & Retail",
      description: "Premium fabric and fashion brand showcasing high-quality materials and sophisticated design aesthetics.",
      image: "/assets/portfolio-2.jpg",
      video: "/videos/ten-fabric.mp4",
      technologies: ["Brand Identity", "E-commerce", "Fashion Photography"],
      rating: 5,
      year: "2024",
      link: "#ten-fabric"
    },
    {
      id: 3,
      title: "414clothing.COM",
      subtitle: "Urban Streetwear Brand",
      category: "Fashion & E-commerce",
      description: "Contemporary streetwear brand with cutting-edge designs and urban culture influence.",
      image: "/assets/portfolio-3.jpg",
      video: "/videos/414clothing.mp4",
      technologies: ["E-commerce", "Brand Strategy", "Social Media"],
      rating: 5,
      year: "2024",
      link: "https://414clothing.com"
    },
    {
      id: 4,
      title: "PHAO PRIVATE DINING ARMATAS",
      subtitle: "Exclusive Dining Experience",
      category: "Hospitality & Dining",
      description: "Luxury private dining establishment offering exceptional culinary experiences in an intimate setting.",
      image: "/assets/portfolio-4.jpg",
      video: "/videos/phao-dining.mp4",
      technologies: ["Restaurant Branding", "Luxury Marketing", "Event Design"],
      rating: 5,
      year: "2024",
      link: "#phao-dining"
    },
    {
      id: 5,
      title: "BARBERS OF THE NORTH",
      subtitle: "Premium Grooming Services",
      category: "Beauty & Grooming",
      description: "High-end barbershop chain offering premium grooming services with modern aesthetics and traditional techniques.",
      image: "/assets/portfolio-1.jpg",
      video: "/videos/barbers-north.mp4",
      technologies: ["Service Branding", "Location Marketing", "Customer Experience"],
      rating: 5,
      year: "2024",
      link: "#barbers-north"
    },
    {
      id: 6,
      title: "www.fotischilitidis.gr",
      subtitle: "Professional Photography Services",
      category: "Photography & Media",
      description: "Professional photography studio specializing in commercial, portrait, and event photography services.",
      image: "/assets/portfolio-2.jpg",
      video: "/videos/fotischilitidis.mp4",
      technologies: ["Photography", "Web Design", "Portfolio Management"],
      rating: 5,
      year: "2024",
      link: "https://www.fotischilitidis.gr"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 mb-6"
          >
            <Star className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Elite Portfolio 2024</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-primary via-brand to-secondary bg-clip-text text-transparent">
              Δείτε τη
            </span>
            <br />
            <span className="text-foreground">Δουλειά Μας</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Εξαιρετικά projects από premium brands και επιχειρήσεις που έχουν εμπιστευτεί την ομάδα μας
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-500 hover:scale-105"
            >
              {/* Project Image/Video */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                
                {/* Video Preview */}
                {project.video && (
                  <video
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    muted
                    loop
                    playsInline
                    autoPlay
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                )}
                
                {/* Fallback Image */}
                {!project.video && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                )}

                {/* Rating */}
                <div className="absolute top-4 left-4 z-30 flex items-center gap-1">
                  {[...Array(project.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{project.subtitle}</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-white/10 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Category */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

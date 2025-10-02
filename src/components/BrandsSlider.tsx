import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BrandsSlider: React.FC = () => {
  // Mock brand logos - in a real implementation, these would be actual client logos
  const brands = [
    { name: 'TechFlow', logo: 'https://via.placeholder.com/120x60/9CA3AF/FFFFFF?text=TechFlow' },
    { name: 'DataVault', logo: 'https://via.placeholder.com/120x60/9CA3AF/FFFFFF?text=DataVault' },
    { name: 'CloudSync', logo: 'https://via.placeholder.com/120x60/9CA3AF/FFFFFF?text=CloudSync' },
    { name: 'SaasPro', logo: 'https://via.placeholder.com/120x60/9CA3AF/FFFFFF?text=SaasPro' },
    { name: 'FlowDesk', logo: 'https://via.placeholder.com/120x60/9CA3AF/FFFFFF?text=FlowDesk' },
    { name: 'MetricHub', logo: 'https://via.placeholder.com/120x60/9CA3AF/FFFFFF?text=MetricHub' },
    { name: 'AutoScale', logo: 'https://via.placeholder.com/120x60/9CA3AF/FFFFFF?text=AutoScale' },
    { name: 'DevTools', logo: 'https://via.placeholder.com/120x60/9CA3AF/FFFFFF?text=DevTools' },
  ];

  return (
    <section className="py-16 lg:py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Trusted by Leading SaaS Companies
          </h2>
          <p className="text-muted-foreground">
            Join the growing list of successful brands we've helped transform
          </p>
        </motion.div>

        {/* Animated brand slider */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [-1200, 0] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="flex gap-12 items-center"
            style={{ width: 'calc(240px * 16)' }} // Double the brands for seamless loop
          >
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <motion.div
                key={`first-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 w-30 h-15 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={120}
                  height={60}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <motion.div
                key={`second-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 w-30 h-15 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={120}
                  height={60}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Ready to join these successful companies?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block text-primary hover:text-primary/80 font-semibold transition-colors duration-200"
          >
            Get started today →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsSlider;
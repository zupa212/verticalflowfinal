import React from 'react';
import { motion } from 'framer-motion';

const BrandCarousel = () => {
  const brands = [
    {
      id: 1,
      name: 'Microsoft',
      logo: '/lovable-uploads/b927b696-7398-434d-83ed-def39fea0f9b.png',
    },
    {
      id: 2,
      name: 'Google',
      logo: '/lovable-uploads/b927b696-7398-434d-83ed-def39fea0f9b.png',
    },
    {
      id: 3,
      name: 'Apple',
      logo: '/lovable-uploads/b927b696-7398-434d-83ed-def39fea0f9b.png',
    },
    {
      id: 4,
      name: 'Amazon',
      logo: '/lovable-uploads/b927b696-7398-434d-83ed-def39fea0f9b.png',
    },
    {
      id: 5,
      name: 'Meta',
      logo: '/lovable-uploads/b927b696-7398-434d-83ed-def39fea0f9b.png',
    },
    {
      id: 6,
      name: 'Netflix',
      logo: '/lovable-uploads/b927b696-7398-434d-83ed-def39fea0f9b.png',
    },
    {
      id: 7,
      name: 'Tesla',
      logo: '/lovable-uploads/b927b696-7398-434d-83ed-def39fea0f9b.png',
    },
    {
      id: 8,
      name: 'Spotify',
      logo: '/lovable-uploads/b927b696-7398-434d-83ed-def39fea0f9b.png',
    }
  ];

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
          >
            Trusted by Leading Brands
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Join the companies that trust VerticalFlow for their digital transformation
          </motion.p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling Carousel */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-16 items-center"
              animate={{ x: [0, -50 * brands.length] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              style={{ width: `${100 * duplicatedBrands.length}%` }}
            >
              {duplicatedBrands.map((brand, index) => (
                <motion.div
                  key={`${brand.id}-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ 
                    scale: 1.2,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-32 h-20 flex items-center justify-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300 cursor-pointer">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {[
            { value: '500+', label: 'Projects' },
            { value: '200+', label: 'Clients' },
            { value: '50+', label: 'Countries' },
            { value: '99%', label: 'Satisfaction' },
            { value: '24/7', label: 'Support' },
            { value: '5⭐', label: 'Rating' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-4"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
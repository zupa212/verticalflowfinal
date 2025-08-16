import React from 'react';
import { motion } from 'framer-motion';

const BrandCarousel = () => {
  const brands = [
    {
      id: 1,
      name: 'Spyfy',
      logo: '/lovable-uploads/e0d60491-e776-4ca1-ab39-b770cdcf4384.png',
    },
    {
      id: 2,
      name: 'Diana Sheth',
      logo: '/lovable-uploads/e0d60491-e776-4ca1-ab39-b770cdcf4384.png',
    },
    {
      id: 3,
      name: 'Midisic',
      logo: '/lovable-uploads/e0d60491-e776-4ca1-ab39-b770cdcf4384.png',
    },
    {
      id: 4,
      name: 'FAD',
      logo: '/lovable-uploads/e0d60491-e776-4ca1-ab39-b770cdcf4384.png',
    },
    {
      id: 5,
      name: 'tl;dv',
      logo: '/lovable-uploads/e0d60491-e776-4ca1-ab39-b770cdcf4384.png',
    },
    {
      id: 6,
      name: 'Letship',
      logo: '/lovable-uploads/e0d60491-e776-4ca1-ab39-b770cdcf4384.png',
    },
    {
      id: 7,
      name: 'Bereliti',
      logo: '/lovable-uploads/e0d60491-e776-4ca1-ab39-b770cdcf4384.png',
    },
    {
      id: 8,
      name: 'Speint',
      logo: '/lovable-uploads/e0d60491-e776-4ca1-ab39-b770cdcf4384.png',
    },
    {
      id: 9,
      name: 'Skyfoly',
      logo: '/lovable-uploads/e0d60491-e776-4ca1-ab39-b770cdcf4384.png',
    },
    {
      id: 10,
      name: 'Diana Sheth',
      logo: '/lovable-uploads/e0d60491-e776-4ca1-ab39-b770cdcf4384.png',
    }
  ];

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-20 bg-background/50 overflow-hidden border-y border-border/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border mb-6"
          >
            <span className="text-sm font-medium text-muted-foreground">Trusted by Leading Brands</span>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Carousel */}
          <div className="flex overflow-hidden py-8">
            <motion.div
              className="flex gap-12 items-center"
              animate={{ x: [0, -80 * brands.length] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedBrands.map((brand, index) => (
                <motion.div
                  key={`${brand.id}-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ 
                    scale: 1.15,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-24 h-16 flex items-center justify-center cursor-pointer group">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="max-w-full max-h-full object-contain opacity-40 group-hover:opacity-80 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                      style={{
                        maxWidth: '80px',
                        maxHeight: '40px'
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
import React from 'react';
import { motion } from 'framer-motion';

const BrandCarousel = () => {
  const brands = [
    {
      id: 1,
      name: 'Spyfy',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><text x="60" y="35" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold">SPYFY</text></svg>`,
    },
    {
      id: 2,
      name: 'Diana Sheth',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><circle cx="30" cy="30" r="15" fill="#3B82F6"/><text x="60" y="35" text-anchor="middle" font-family="Arial" font-size="12">DIANA</text></svg>`,
    },
    {
      id: 3,
      name: 'Midisic',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><rect x="10" y="20" width="20" height="20" fill="#10B981"/><text x="70" y="35" text-anchor="middle" font-family="Arial" font-size="14">MIDISIC</text></svg>`,
    },
    {
      id: 4,
      name: 'FAD',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><polygon points="30,10 50,30 30,50 10,30" fill="#F59E0B"/><text x="80" y="35" text-anchor="middle" font-family="Arial" font-size="16" font-weight="bold">FAD</text></svg>`,
    },
    {
      id: 5,
      name: 'tl;dv',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><ellipse cx="25" cy="30" rx="15" ry="10" fill="#8B5CF6"/><text x="65" y="35" text-anchor="middle" font-family="Arial" font-size="14">TL;DV</text></svg>`,
    },
    {
      id: 6,
      name: 'Letship',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><path d="M10 40 L30 20 L50 40 Z" fill="#EF4444"/><text x="75" y="35" text-anchor="middle" font-family="Arial" font-size="12">LETSHIP</text></svg>`,
    },
    {
      id: 7,
      name: 'Bereliti',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><rect x="15" y="15" width="30" height="30" rx="5" fill="#06B6D4"/><text x="75" y="35" text-anchor="middle" font-family="Arial" font-size="11">BERELITI</text></svg>`,
    },
    {
      id: 8,
      name: 'Speint',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><circle cx="25" cy="25" r="8" fill="#84CC16"/><circle cx="25" cy="35" r="8" fill="#84CC16"/><text x="70" y="35" text-anchor="middle" font-family="Arial" font-size="14">SPEINT</text></svg>`,
    },
    {
      id: 9,
      name: 'Skyfoly',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><star cx="25" cy="30" r="12" fill="#F97316"/><text x="75" y="35" text-anchor="middle" font-family="Arial" font-size="12">SKYFOLY</text></svg>`,
    },
    {
      id: 10,
      name: 'TechCorp',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><rect x="10" y="25" width="30" height="10" fill="#EC4899"/><text x="75" y="35" text-anchor="middle" font-family="Arial" font-size="12">TECHCORP</text></svg>`,
    }
  ];

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-8 md:py-12 bg-background/50 overflow-hidden border-y border-border/20">
      <div className="container mx-auto px-6">
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
                  <div className="w-32 md:w-40 h-20 md:h-24 flex items-center justify-center cursor-pointer group">
                    <div 
                      className="w-full h-full opacity-40 group-hover:opacity-80 transition-all duration-300 filter grayscale group-hover:grayscale-0"
                      dangerouslySetInnerHTML={{ __html: brand.logo }}
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
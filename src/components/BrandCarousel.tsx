import React, { useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';

const BrandCarousel = () => {
  const brands = [
    {
      id: 1,
      name: 'Elite Media',
      logo: '/lovable-uploads/ELITE.png',
      type: 'image'
    },
    {
      id: 2,
      name: 'Izipen',
      logo: '/lovable-uploads/IZIPEN.png',
      type: 'image'
    },
    {
      id: 3,
      name: 'PNG10F',
      logo: '/lovable-uploads/PNG10F.png',
      type: 'image'
    },
    {
      id: 4,
      name: 'Domination 414',
      logo: '/lovable-uploads/domination414.png',
      type: 'image'
    },
    {
      id: 5,
      name: 'Barbers of the North',
      logo: '/lovable-uploads/barbers-of-the-north.png',
      type: 'image'
    },

  ];

  // Memoized brands array for better performance
  const infiniteBrands = useMemo(() => [...brands, ...brands, ...brands], []);

  return (
    <section className="py-4 md:py-6 bg-background/50 overflow-hidden relative">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/60 to-transparent opacity-50"></div>
      </div>
      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/30 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/60 to-transparent opacity-50"></div>
      </div>
      <div className="container mx-auto px-6">
        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Carousel */}
          <div className="flex overflow-hidden py-4">
            <motion.div
              className="flex gap-16 items-center"
              animate={{ x: [0, -80 * brands.length * 2] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 45,
                  ease: "linear",
                },
              }}
            >
              {infiniteBrands.map((brand, index) => (
                <motion.div
                  key={`${brand.id}-${index}`}
                  className="flex-shrink-0"
                  whileHover={{ 
                    scale: 1.2,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-40 md:w-48 h-24 md:h-28 flex items-center justify-center cursor-pointer group">
                    {brand.type === 'image' ? (
                      <LazyImage
                        src={brand.logo}
                        alt={brand.name}
                        className="w-full h-full object-contain opacity-40 group-hover:opacity-100 transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:brightness-110 group-hover:contrast-125"
                      />
                    ) : (
                      <div 
                        className="w-full h-full opacity-40 group-hover:opacity-80 transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:text-primary"
                        dangerouslySetInnerHTML={{ __html: brand.logo }}
                      />
                    )}
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
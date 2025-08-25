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
      id: 4,
      name: 'Spyfy',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><text x="60" y="35" text-anchor="middle" font-family="Arial" font-size="14" font-weight="bold">SPYFY</text></svg>`,
      type: 'svg'
    },
    {
      id: 5,
      name: 'Diana Sheth',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><circle cx="30" cy="30" r="15" fill="#3B82F6"/><text x="60" y="35" text-anchor="middle" font-family="Arial" font-size="12">DIANA</text></svg>`,
      type: 'svg'
    },
    {
      id: 6,
      name: 'Midisic',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><rect x="10" y="20" width="20" height="20" fill="#10B981"/><text x="70" y="35" text-anchor="middle" font-family="Arial" font-size="14">MIDISIC</text></svg>`,
      type: 'svg'
    },
    {
      id: 7,
      name: 'FAD',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><polygon points="30,10 50,30 30,50 10,30" fill="#F59E0B"/><text x="80" y="35" text-anchor="middle" font-family="Arial" font-size="16" font-weight="bold">FAD</text></svg>`,
      type: 'svg'
    },
    {
      id: 8,
      name: 'tl;dv',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><ellipse cx="25" cy="30" rx="15" ry="10" fill="#8B5CF6"/><text x="65" y="35" text-anchor="middle" font-family="Arial" font-size="14">TL;DV</text></svg>`,
      type: 'svg'
    },
    {
      id: 9,
      name: 'Letship',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><path d="M10 40 L30 20 L50 40 Z" fill="#EF4444"/><text x="75" y="35" text-anchor="middle" font-family="Arial" font-size="12">LETSHIP</text></svg>`,
      type: 'svg'
    },
    {
      id: 10,
      name: 'Bereliti',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><rect x="15" y="15" width="30" height="30" rx="5" fill="#06B6D4"/><text x="75" y="35" text-anchor="middle" font-family="Arial" font-size="11">BERELITI</text></svg>`,
      type: 'svg'
    },
    {
      id: 11,
      name: 'Speint',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><circle cx="25" cy="25" r="8" fill="#84CC16"/><circle cx="25" cy="35" r="8" fill="#84CC16"/><text x="70" y="35" text-anchor="middle" font-family="Arial" font-size="14">SPEINT</text></svg>`,
      type: 'svg'
    },
    {
      id: 12,
      name: 'Skyfoly',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><star cx="25" cy="30" r="12" fill="#F97316"/><text x="75" y="35" text-anchor="middle" font-family="Arial" font-size="12">SKYFOLY</text></svg>`,
      type: 'svg'
    },
    {
      id: 13,
      name: 'TechCorp',
      logo: `<svg viewBox="0 0 120 60" fill="currentColor"><rect x="10" y="25" width="30" height="10" fill="#EC4899"/><text x="75" y="35" text-anchor="middle" font-family="Arial" font-size="12">TECHCORP</text></svg>`,
      type: 'svg'
    }
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
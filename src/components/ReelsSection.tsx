import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ReelsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      id: 1,
      number: "01",
      title: "Get Started Now",
      subtitle: "",
      iconSrc: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ksBwElDCQY/b0kx8nhl_expires_30_days.png"
    },
    {
      id: 2,
      number: "02",
      title: "Organic Fertilizer",
      subtitle: "",
      iconSrc: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ksBwElDCQY/ufi7f1bl_expires_30_days.png"
    },
    {
      id: 3,
      number: "03",
      title: "Technology Irrigation",
      subtitle: "",
      iconSrc: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ksBwElDCQY/jjqve23o_expires_30_days.png"
    },
    {
      id: 4,
      number: "04",
      title: "Agricultural Monitoring",
      subtitle: "",
      iconSrc: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ksBwElDCQY/b0kx8nhl_expires_30_days.png"
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const slideWidth = 400; // Width of each slide including gap
    const totalSlides = slides.length;
    
    // Set initial position
    gsap.set(container, { x: 0 });
    
    // Create smooth infinite animation
    const animation = gsap.to(container, {
      x: -slideWidth * totalSlides,
      duration: totalSlides * 4, // 4 seconds per slide
      ease: "none",
      repeat: -1,
      repeatDelay: 0
    });

    return () => {
      animation.kill();
    };
  }, [slides.length]);

  return (
    <div className="flex flex-col bg-transparent grid-bg">
      <div className="flex items-center self-stretch bg-transparent h-[600px] overflow-hidden">
        <div 
          ref={containerRef}
          className="flex items-center gap-8 relative w-full"
        >
          {/* Create double set for seamless loop */}
          {[...slides, ...slides].map((slide, index) => (
            <div 
              key={`${slide.id}-${index}`}
              className="slide-item flex flex-col items-center gap-4 min-w-[372px] mx-4"
            >
              <div className="bg-neutral-50 w-[372px] h-[498px] rounded-3xl flex items-center justify-center relative border-2 border-gray-200">
                {slide.iconSrc && (
                  <img
                    src={slide.iconSrc} 
                    className="w-[52px] h-[52px] object-fill absolute top-4 right-4"
                    alt="Icon"
                  />
                )}
                <div className="text-center">
                  <span className="text-[#22282B] text-[38px] font-bold block mb-2">
                    {slide.number}
                  </span>
                  <span className="text-[#22282B] text-xl font-bold">
                    {slide.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReelsSection;
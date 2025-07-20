import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Pause, Volume2, VolumeX, ChevronUp, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ReelsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reelsRef = useRef<HTMLDivElement[]>([]);
  const [activeReel, setActiveReel] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  
  const reelsData = [
    {
      id: 1,
      title: "Reel 1: Product Preview",
      background: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=1200&fit=crop",
      duration: "0:30"
    },
    {
      id: 2,
      title: "Reel 2: Behind the Scenes",
      background: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1200&fit=crop",
      duration: "0:45"
    },
    {
      id: 3,
      title: "Reel 3: Client Stories",
      background: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=1200&fit=crop",
      duration: "1:15"
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    // Set up snap scrolling with GSAP
    const tl = gsap.timeline();
    
    reelsRef.current.forEach((reel, index) => {
      if (reel) {
        gsap.set(reel, { y: index * window.innerHeight });
        
        ScrollTrigger.create({
          trigger: reel,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveReel(index),
          onEnterBack: () => setActiveReel(index),
        });
      }
    });

    // Animate entrance
    gsap.fromTo(reelsRef.current, 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToReel = (index: number) => {
    if (reelsRef.current[index]) {
      gsap.to(window, {
        duration: 0.8,
        scrollTo: { y: reelsRef.current[index], offsetY: 0 },
        ease: "power2.inOut"
      });
    }
  };

  return (
    <section className="relative bg-background overflow-hidden">
      {/* Mobile Reel Container */}
      <div 
        ref={containerRef}
        className="relative mx-auto max-w-sm h-screen snap-y snap-mandatory overflow-y-scroll scrollbar-hide"
      >
        {reelsData.map((reel, index) => (
          <div
            key={reel.id}
            ref={el => {
              if (el) reelsRef.current[index] = el;
            }}
            className="relative w-full h-screen snap-start flex-shrink-0 overflow-hidden rounded-3xl mx-4 my-2"
          >
            {/* Full-screen Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${reel.background})` }}
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            
            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6">
              {/* Top UI Elements */}
              <div className="flex justify-between items-start">
                <div className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-white text-sm font-medium">{reel.duration}</span>
                </div>
                
                {/* Navigation Arrows */}
                <div className="flex flex-col gap-2">
                  {index > 0 && (
                    <button 
                      onClick={() => scrollToReel(index - 1)}
                      className="bg-black/30 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/50 transition-all"
                    >
                      <ChevronUp size={20} />
                    </button>
                  )}
                  {index < reelsData.length - 1 && (
                    <button 
                      onClick={() => scrollToReel(index + 1)}
                      className="bg-black/30 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/50 transition-all"
                    >
                      <ChevronDown size={20} />
                    </button>
                  )}
                </div>
              </div>

              {/* Center Play/Pause Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={`bg-white/20 backdrop-blur-sm rounded-full p-4 text-white transition-all duration-300 ${
                    activeReel === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                >
                  {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                </button>
              </div>

              {/* Bottom Content */}
              <div className="space-y-4">
                {/* Title */}
                <h3 className="text-white text-xl font-bold leading-tight">
                  {reel.title}
                </h3>
                
                {/* Bottom Controls */}
                <div className="flex items-center justify-between">
                  {/* Sound Toggle */}
                  <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="bg-black/30 backdrop-blur-sm rounded-full p-3 text-white hover:bg-black/50 transition-all"
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>

                  {/* Progress Indicators */}
                  <div className="flex gap-1">
                    {reelsData.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          idx === activeReel 
                            ? 'w-8 bg-white' 
                            : 'w-2 bg-white/40'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Swipe Indicator */}
                  <div className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-2">
                    <span className="text-white text-xs">Swipe ↕</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ReelsSection;
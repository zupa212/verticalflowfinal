import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Play, Pause, Volume2, VolumeX, Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react';

const ReelsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const reelsContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const reelsData = [
    {
      id: 1,
      title: "Reel 1: Product Sneak Peek",
      background: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=1200&fit=crop",
      duration: "0:30",
      likes: "2.4K",
      comments: "156"
    },
    {
      id: 2,
      title: "Reel 2: Behind the Magic",
      background: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=1200&fit=crop",
      duration: "0:45",
      likes: "1.8K",
      comments: "89"
    },
    {
      id: 3,
      title: "Reel 3: Client Success Story",
      background: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=1200&fit=crop",
      duration: "1:15",
      likes: "3.2K",
      comments: "203"
    }
  ];

  // Create extended array for infinite loop
  const extendedReels = [
    reelsData[reelsData.length - 1], // Last item at beginning
    ...reelsData,
    reelsData[0] // First item at end
  ];

  useEffect(() => {
    if (!reelsContainerRef.current) return;

    // Set initial position (skip first duplicate item)
    gsap.set(reelsContainerRef.current, { y: -window.innerHeight });

    // Auto-advance reels every 4 seconds
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextReel();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const nextReel = () => {
    if (isTransitioning || !reelsContainerRef.current) return;
    
    setIsTransitioning(true);
    
    gsap.to(reelsContainerRef.current, {
      y: `-=${window.innerHeight}`,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        const newIndex = currentIndex + 1;
        
        if (newIndex >= reelsData.length) {
          // Reset to beginning
          setCurrentIndex(0);
          gsap.set(reelsContainerRef.current, { y: -window.innerHeight });
        } else {
          setCurrentIndex(newIndex);
        }
        
        setIsTransitioning(false);
      }
    });
  };

  const prevReel = () => {
    if (isTransitioning || !reelsContainerRef.current) return;
    
    setIsTransitioning(true);
    
    gsap.to(reelsContainerRef.current, {
      y: `+=${window.innerHeight}`,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        const newIndex = currentIndex - 1;
        
        if (newIndex < 0) {
          // Reset to end
          setCurrentIndex(reelsData.length - 1);
          gsap.set(reelsContainerRef.current, { y: -(reelsData.length * window.innerHeight) });
        } else {
          setCurrentIndex(newIndex);
        }
        
        setIsTransitioning(false);
      }
    });
  };

  const handleSwipe = (direction: 'up' | 'down') => {
    if (direction === 'up') {
      nextReel();
    } else {
      prevReel();
    }
  };

  return (
    <section className="relative bg-background overflow-hidden">
      {/* Mobile Reel Container */}
      <div 
        ref={containerRef}
        className="relative mx-auto max-w-sm h-screen overflow-hidden"
      >
        {/* Reels Container with Continuous Loop */}
        <div
          ref={reelsContainerRef}
          className="relative w-full"
          style={{ height: `${extendedReels.length * 100}vh` }}
        >
          {extendedReels.map((reel, index) => {
            const isActive = index === currentIndex + 1; // +1 because first item is duplicate
            
            return (
              <div
                key={`${reel.id}-${index}`}
                className="absolute w-full h-screen"
                style={{ top: `${index * 100}vh` }}
              >
                {/* Reel Content */}
                <div className="relative w-full h-full overflow-hidden rounded-3xl mx-4 shadow-2xl">
                  {/* Full-screen Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                    style={{ 
                      backgroundImage: `url(${reel.background})`,
                      transform: isActive ? 'scale(1)' : 'scale(1.1)'
                    }}
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-6">
                    {/* Top UI Elements */}
                    <div className="flex justify-between items-start">
                      <div className="bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-white text-sm font-medium">{reel.duration}</span>
                      </div>
                      
                      <button className="bg-black/30 backdrop-blur-sm rounded-full p-2 text-white">
                        <MoreHorizontal size={20} />
                      </button>
                    </div>

                    {/* Center Play/Pause Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button 
                        onClick={() => setIsPlaying(!isPlaying)}
                        className={`bg-white/20 backdrop-blur-sm rounded-full p-4 text-white transition-all duration-300 ${
                          isActive && !isPlaying ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                        }`}
                      >
                        <Play size={32} />
                      </button>
                    </div>

                    {/* Right Side Floating Actions */}
                    <div className="absolute right-4 bottom-32 flex flex-col gap-6">
                      <div className="flex flex-col items-center gap-1">
                        <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all">
                          <Heart size={24} />
                        </button>
                        <span className="text-white text-xs font-medium">{reel.likes}</span>
                      </div>
                      
                      <div className="flex flex-col items-center gap-1">
                        <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all">
                          <MessageCircle size={24} />
                        </button>
                        <span className="text-white text-xs font-medium">{reel.comments}</span>
                      </div>
                      
                      <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all">
                        <Share size={24} />
                      </button>
                    </div>

                    {/* Bottom Content */}
                    <div className="space-y-4">
                      {/* Title */}
                      <h3 className="text-white text-xl font-bold leading-tight pr-16">
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
                                idx === currentIndex 
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
              </div>
            );
          })}
        </div>

        {/* Touch/Swipe Areas */}
        <div 
          className="absolute top-0 left-0 w-full h-1/2 z-20 cursor-pointer"
          onClick={() => handleSwipe('down')}
        />
        <div 
          className="absolute bottom-0 left-0 w-full h-1/2 z-20 cursor-pointer"
          onClick={() => handleSwipe('up')}
        />
      </div>

      {/* Navigation Hint */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
          <span className="text-white text-sm">Tap to navigate reels</span>
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
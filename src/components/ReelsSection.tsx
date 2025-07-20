import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Play, Heart, MessageCircle } from 'lucide-react';

const ReelsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  
  const reelsData = [
    {
      id: 1,
      title: "Featured Creator",
      background: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop",
      creator: "@sarah_creates",
      views: "2.4K"
    },
    {
      id: 2,
      title: "Trending Reel",
      background: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop",
      creator: "@designpro",
      views: "1.8K"
    },
    {
      id: 3,
      title: "Recent Story",
      background: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=600&fit=crop",
      creator: "@artflow",
      views: "3.2K"
    },
    {
      id: 4,
      title: "Popular Video",
      background: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=600&fit=crop",
      creator: "@creative_mind",
      views: "4.1K"
    },
    {
      id: 5,
      title: "Top Content",
      background: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=600&fit=crop",
      creator: "@visual_story",
      views: "2.9K"
    },
    {
      id: 6,
      title: "Latest Update",
      background: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=400&h=600&fit=crop",
      creator: "@motion_lab",
      views: "1.5K"
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = cardsRef.current;
    const radius = 280;
    const centerX = containerRef.current.offsetWidth / 2;
    const centerY = 120;

    // Position cards in semi-circle initially
    cards.forEach((card, index) => {
      if (!card) return;
      
      const angle = (index / (reelsData.length - 1)) * Math.PI; // 180 degrees
      const x = centerX + Math.cos(angle) * radius - 80; // -80 to center card
      const y = centerY + Math.sin(angle) * radius;
      
      gsap.set(card, {
        x,
        y,
        opacity: 1
      });
    });

    // Create continuous orbit animation using simple circular motion
    const tl = gsap.timeline({ repeat: -1 });
    
    cards.forEach((card, index) => {
      if (!card) return;
      
      // Create circular motion manually
      tl.to(card, {
        rotation: 360,
        transformOrigin: `${centerX - 80}px ${centerY}px`,
        duration: 15,
        ease: "none",
        modifiers: {
          rotation: (rotation) => {
            const angle = parseFloat(rotation) * (Math.PI / 180);
            const x = centerX + Math.cos(angle + (index * Math.PI / (reelsData.length - 1))) * radius - 80;
            const y = centerY + Math.sin(angle + (index * Math.PI / (reelsData.length - 1))) * radius;
            
            gsap.set(card, { x, y });
            
            // Fade out at edges
            const leftEdge = -100;
            const rightEdge = containerRef.current!.offsetWidth + 100;
            
            if (x < leftEdge + 50 || x > rightEdge - 50) {
              gsap.set(card, { opacity: 0.3 });
            } else {
              gsap.set(card, { opacity: 1 });
            }
            
            return 0; // Keep cards upright
          }
        }
      }, index * -2.5); // Stagger start times
    });

    return () => {
      tl.kill();
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) cardsRef.current[index] = el;
  };

  return (
    <section className="relative bg-background overflow-hidden h-[500px]">
      {/* Orbit Container */}
      <div 
        ref={containerRef}
        className="relative w-full h-full"
      >
        {/* Central Anchor Point */}
        <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 z-10">
          <div className="relative">
            {/* Gradient Ring */}
            <div className="absolute inset-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/40 to-primary/10 blur-sm"></div>
            {/* Central Black Dot */}
            <div className="relative w-8 h-8 bg-black rounded-full shadow-lg"></div>
          </div>
        </div>

        {/* Orbiting Cards */}
        {reelsData.map((reel, index) => (
          <div
            key={reel.id}
            ref={(el) => addToRefs(el, index)}
            className="absolute w-40 h-56 rounded-2xl overflow-hidden shadow-xl bg-card border border-border/20 hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Card Content */}
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${reel.background})` }}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-4">
                {/* Top - Play Button */}
                <div className="flex justify-center">
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-all">
                    <Play size={16} />
                  </button>
                </div>

                {/* Bottom Content */}
                <div className="space-y-2">
                  <h3 className="text-white text-sm font-semibold leading-tight">
                    {reel.title}
                  </h3>
                  <p className="text-white/80 text-xs">
                    {reel.creator}
                  </p>
                  
                  {/* Action Icons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Heart size={12} className="text-white/80" />
                        <span className="text-white/80 text-xs">{reel.views}</span>
                      </div>
                      <MessageCircle size={12} className="text-white/80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Section Title */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">Featured Creators</h2>
          <p className="text-muted-foreground text-sm">Discover trending content from our community</p>
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
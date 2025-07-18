import React from 'react';

const ReelsSection = () => {
  const videoCards = [
    {
      id: 1,
      title: "Product Showcase",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      duration: "0:30"
    },
    {
      id: 2,
      title: "Behind Scenes",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      duration: "0:45"
    },
    {
      id: 3,
      title: "Client Stories",
      thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      duration: "1:15"
    },
    {
      id: 4,
      title: "Creative Process",
      thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      duration: "0:50"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Enhanced Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Mobile Interface Container */}
        <div className="relative mx-auto max-w-sm lg:max-w-lg">
          {/* Central Title - More prominent */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-5xl lg:text-7xl font-black text-foreground tracking-tighter mb-3">
              REELS
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg font-medium">
              Captivating video stories that engage
            </p>
          </div>

          {/* Semi-circular Orbit Container - Enhanced */}
          <div className="relative h-72 lg:h-96 mb-8">
            {/* Enhanced Arc Path */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 400 240" 
              fill="none"
            >
              <path
                d="M 40 180 Q 200 40 360 180"
                stroke="hsl(var(--border))"
                strokeWidth="1.5"
                strokeDasharray="8,12"
                opacity="0.4"
                fill="none"
              />
            </svg>

            {/* Video Cards positioned in perfect semi-circle */}
            {videoCards.map((card, index) => {
              // Enhanced positioning for perfect 180-degree arc
              const angle = (index * 50) - 75; // Spread across 150 degrees, centered
              const radius = 160;
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius * 0.7; // Flatten slightly
              
              return (
                <div
                  key={card.id}
                  className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-all duration-500 ease-out"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y + 60}px)`,
                    animation: `fade-in 0.8s ease-out ${index * 0.15}s both`
                  }}
                >
                  {/* Enhanced Card with better shadows */}
                  <div className="bg-card border border-border/50 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] transition-all duration-500 w-28 lg:w-36 backdrop-blur-sm">
                    {/* Thumbnail with enhanced overlay */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={card.thumbnail}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Enhanced Play Button */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/95 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                          <div className="w-0 h-0 border-l-[8px] lg:border-l-[10px] border-r-0 border-t-[6px] lg:border-t-[7px] border-b-[6px] lg:border-b-[7px] border-transparent border-l-primary ml-1"></div>
                        </div>
                      </div>
                      {/* Enhanced Duration Badge */}
                      <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs lg:text-sm px-2 py-1 rounded-lg font-medium backdrop-blur-sm">
                        {card.duration}
                      </div>
                    </div>
                    
                    {/* Enhanced Title Section */}
                    <div className="p-3 lg:p-4">
                      <h4 className="text-sm lg:text-base font-bold text-foreground line-clamp-2 leading-tight">
                        {card.title}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
              Explore All Reels
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
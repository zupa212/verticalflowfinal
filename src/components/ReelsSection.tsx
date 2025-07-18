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
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-bg"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Mobile Interface Container */}
        <div className="relative mx-auto max-w-md lg:max-w-2xl">
          {/* Central Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground tracking-tight">
              REELS
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Engaging video content that captivates your audience
            </p>
          </div>

          {/* Semi-circular Orbit Container */}
          <div className="relative h-64 lg:h-80">
            {/* Faint Arc Path */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 400 200" 
              fill="none"
            >
              <path
                d="M 50 150 Q 200 50 350 150"
                stroke="hsl(var(--border))"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.3"
                fill="none"
              />
            </svg>

            {/* Video Cards positioned in semi-circle */}
            {videoCards.map((card, index) => {
              // Calculate position on the arc
              const angle = (index * 60) - 90; // Spread cards across 180 degrees
              const radiusX = 140;
              const radiusY = 80;
              const x = Math.cos(angle * Math.PI / 180) * radiusX;
              const y = Math.sin(angle * Math.PI / 180) * radiusY;
              
              return (
                <div
                  key={card.id}
                  className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-all duration-300"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y + 40}px)`,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {/* Card */}
                  <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-24 lg:w-32">
                    {/* Thumbnail */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={card.thumbnail}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white/90 rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-[6px] lg:border-l-[8px] border-r-0 border-t-[4px] lg:border-t-[6px] border-b-[4px] lg:border-b-[6px] border-transparent border-l-primary ml-1"></div>
                        </div>
                      </div>
                      {/* Duration Badge */}
                      <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                        {card.duration}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <div className="p-2 lg:p-3">
                      <h4 className="text-xs lg:text-sm font-semibold text-foreground line-clamp-2 leading-tight">
                        {card.title}
                      </h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-semibold transition-colors duration-300">
              View All Reels
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
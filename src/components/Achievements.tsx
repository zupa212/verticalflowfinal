import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Achievements: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const achievements = [
    {
      id: 1,
      number: "95+",
      title: "Brands Served",
      description: "Helping businesses across various industries achieve their goals",
      icon: "🏢",
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      id: 2,
      number: "8",
      title: "Years of Experience",
      description: "Bringing seasoned expertise to every project",
      icon: "⏰",
      color: "from-green-500/20 to-blue-500/20"
    },
    {
      id: 3,
      number: "$100,000+",
      title: "Saved for Brands",
      description: "So they can reinvest where it matters the most",
      icon: "💰",
      color: "from-yellow-500/20 to-green-500/20"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with typewriter effect
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards animation with stagger
      if (cardsRef.current && cardsRef.current.children.length > 0) {
        const cards = Array.from(cardsRef.current.children);
        gsap.fromTo(cards,
          { y: 100, opacity: 0, rotationX: 45 },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-gradient-to-br from-muted/30 to-background section-separator"
    >
      {/* Enhanced Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Video Badge */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center justify-center gap-2 w-fit mx-auto mb-8"
        >
          <button 
            onClick={toggleVideo}
            className="flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm hover:bg-foreground/90 transition-all duration-300 button-glow group"
          >
            <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
            and they say what they see!
          </button>
        </motion.div>

        {/* Section Title */}
        <h2
          ref={titleRef}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-center mb-6 text-foreground"
        >
          Our Achievements
        </h2>

        <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-20">
          Curious about what we've accomplished? Let our track record speak for itself.
        </p>

        {/* Achievement Cards */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className={`relative group bg-gradient-to-br ${achievement.color} backdrop-blur-sm border border-border rounded-3xl p-8 hover-glow cursor-pointer transition-all duration-500 overflow-hidden`}
              whileHover={{ y: -15, scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="absolute top-4 right-4 text-6xl opacity-10">
                {achievement.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Visual Element */}
                {index === 0 && (
                  <div className="w-20 h-20 bg-blue-500/20 rounded-2xl mb-6 flex items-center justify-center">
                    <div className="w-10 h-10 bg-blue-500/40 rounded-lg"></div>
                  </div>
                )}
                
                {index === 1 && (
                  <div className="w-20 h-20 mb-6 flex items-center justify-center">
                    <svg className="w-16 h-16" viewBox="0 0 120 120" fill="none">
                      <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="2" className="text-muted-foreground/20" />
                      <circle cx="60" cy="60" r="35" fill="currentColor" className="text-muted-foreground/10" />
                      <circle cx="60" cy="60" r="20" fill="currentColor" className="text-muted-foreground/20" />
                    </svg>
                  </div>
                )}
                
                {index === 2 && (
                  <div className="w-20 h-20 mb-6">
                    <svg className="w-full h-full" viewBox="0 0 100 60" fill="none">
                      <path d="M10 50 Q20 20 30 40 T50 30 T70 25 T90 20" stroke="currentColor" strokeWidth="2" className="text-green-500/60" fill="none" />
                      <path d="M10 50 Q20 20 30 40 T50 30 T70 25 T90 20 L90 50 L10 50 Z" fill="currentColor" className="text-green-500/20" />
                    </svg>
                  </div>
                )}

                {/* Number */}
                <div className="mb-4">
                  <div className="text-4xl sm:text-5xl font-black text-foreground leading-none">
                    {achievement.number}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-foreground/80 transition-colors">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
                  {achievement.description}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hidden Video Element */}
      <video
        ref={videoRef}
        className="hidden"
        loop
        muted
        playsInline
      >
        <source src="/placeholder-video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Achievements;
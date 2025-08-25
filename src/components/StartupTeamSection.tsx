import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';

const StartupTeamSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Panagiotis Xorianopoulos",
      role: "CEO & Digital Strategist",
      expertise: "Startup Development, Reels Strategy",
      avatar: "/lovable-uploads/ELITE.png",
      videoSrc: "/lovable-uploads/REEL1.webm",
      shortReel: "Startup Growth in 30 seconds",
      description: "Εξειδικευμένος στη δημιουργία viral content και startup scaling"
    },
    {
      id: 2,
      name: "Maria Konstantinou",
      role: "Creative Director",
      expertise: "Short Form Content, Brand Identity",
      avatar: "/lovable-uploads/IZIPEN.png",
      videoSrc: "/lovable-uploads/REEL2.webm",
      shortReel: "Brand Identity in 15 seconds",
      description: "Δημιουργεί μοναδικές brand identities για startups"
    },
    {
      id: 3,
      name: "Alexandros Papadopoulos",
      role: "Video Production Lead",
      expertise: "Reels Development, Video Editing",
      avatar: "/lovable-uploads/PNG10F.png",
      videoSrc: "/lovable-uploads/REEL3.webm",
      shortReel: "Video Production Process",
      description: "Ειδικός στη δημιουργία engaging short-form videos"
    },
    {
      id: 4,
      name: "Elena Nikolaou",
      role: "Social Media Strategist",
      expertise: "Viral Marketing, Growth Hacking",
      avatar: "/lovable-uploads/ELITE.png",
      videoSrc: "/lovable-uploads/REEL6.webm",
      shortReel: "Viral Growth Strategy",
      description: "Εξειδικευμένη στο viral marketing και growth hacking"
    }
  ];

  // Video observer for smooth playback
  const setupVideoObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          const videoIndex = parseInt(video.dataset.index || '0');
          
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            if (video.readyState === 0) {
              video.load();
            }
            requestAnimationFrame(() => {
              video.play().catch(() => {
                // Silent fail for autoplay restrictions
              });
            });
            setCurrentSlide(videoIndex);
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '0px 0px -20% 0px'
      }
    );

    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.dataset.index = index.toString();
        observer.observe(video);
      }
    });

    return observer;
  }, []);

  useEffect(() => {
    const videoObserver = setupVideoObserver();
    return () => videoObserver.disconnect();
  }, [setupVideoObserver]);

  const handleVideoError = useCallback((e: React.SyntheticEvent<HTMLVideoElement>) => {
    console.warn('Video failed to load:', e.currentTarget.src);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-gray-50/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ΑΙΝΟΤΟΜΟΥΣ STARTUPS
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Μια αφοσιωμένη ομάδα ειδικών στη δημιουργία short-form content και startup development
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <LazyImage
                  src={member.avatar}
                  alt={member.name}
                  className="w-16 h-16 rounded-full border-2 border-primary/20"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </div>
              </div>

              {/* Expertise */}
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">Εξειδίκευση:</span>
                </p>
                <p className="text-sm text-gray-800">{member.expertise}</p>
              </div>

              {/* Short Reel Preview */}
              <div className="mb-4">
                <p className="text-xs text-gray-500 mb-2">SHORT REEL:</p>
                <p className="text-sm font-medium text-gray-900">{member.shortReel}</p>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Short Form Reels Showcase */}
        <div className="mb-16">
          <motion.h3 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Short Form Reels Development
          </motion.h3>

          {/* Reels Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={`reel-${member.id}`}
                  className="flex-shrink-0 w-80 h-96 bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Video Player */}
                  <div className="relative h-64 bg-gray-100">
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls={false}
                      preload="metadata"
                      webkit-playsinline="true"
                      x5-playsinline="true"
                      onError={handleVideoError}
                    >
                      <source src={member.videoSrc} type="video/webm" />
                    </video>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-white font-bold text-lg mb-1">
                          {member.shortReel}
                        </h4>
                        <p className="text-white/80 text-sm">
                          by {member.name}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                      {member.shortReel}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {member.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Duration: 15-30s
                      </span>
                      <span className="text-xs text-primary font-medium">
                        {member.expertise}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-gradient-to-r from-primary to-purple-600 rounded-2xl p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Έτοιμοι να Δημιουργήσουμε το Επόμενο Viral Reel;
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Επικοινωνήστε μαζί μας για να αναπτύξουμε τη στρατηγική short-form content για το startup σας
          </p>
          <motion.button
            className="bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ξεκινήστε Τώρα
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StartupTeamSection;

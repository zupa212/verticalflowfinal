import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import LazyImage from './LazyImage';

const ReelsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [animation, setAnimation] = useState<gsap.core.Tween | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const slides = [
    {
      id: 1,
      number: "01",
      title: "Get Started Now",
      subtitle: "",
      iconSrc: "/lovable-uploads/ELITE.png",
      videoSrc: "/lovable-uploads/REEL1.webm",
      videoSrcMP4: "/videos/get-started.mp4"
    },
    {
      id: 2,
      number: "02",
      title: "Project Two",
      subtitle: "",
      iconSrc: "/lovable-uploads/IZIPEN.png",
      videoSrc: "/lovable-uploads/REEL2.webm",
      videoSrcMP4: "/videos/project-two.mp4"
    },
    {
      id: 3,
      number: "03",
      title: "Project Three",
      subtitle: "",
      iconSrc: "/lovable-uploads/PNG10F.png",
      videoSrc: "/lovable-uploads/REEL3.webm",
      videoSrcMP4: "/videos/project-three.mp4"
    },
    {
      id: 4,
      number: "04",
      title: "Project Four",
      subtitle: "",
      iconSrc: "/lovable-uploads/ELITE.png",
      videoSrc: "/lovable-uploads/REEL6.webm",
      videoSrcMP4: "/videos/project-four.mp4"
    }
  ];

  // Optimized video loading with Intersection Observer
  const setupVideoObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          const videoIndex = parseInt(video.dataset.index || '0');
          
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            // Load video only when 50% visible
            if (video.readyState === 0) {
              video.load();
            }
            video.play().catch(() => {
              // Silent fail for autoplay restrictions
            });
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '0px 0px -10% 0px'
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
    if (!containerRef.current || !isIntersecting) return;

    const container = containerRef.current;
    const slideWidth = 400;
    const totalSlides = slides.length;
    
    gsap.set(container, { x: 0 });
    
    // Use requestAnimationFrame for smoother animation
    const newAnimation = gsap.to(container, {
      x: -slideWidth * totalSlides,
      duration: totalSlides * 6,
      ease: "none",
      repeat: -1,
      repeatDelay: 0,
      onUpdate: () => {
        // Throttle updates to reduce main thread work
        if (newAnimation.progress() % 0.01 < 0.001) {
          requestAnimationFrame(() => {
            // Minimal work in animation frame
          });
        }
      }
    });

    setAnimation(newAnimation);

    return () => {
      newAnimation.kill();
    };
  }, [slides.length, isIntersecting]);

  // Intersection Observer for the entire section
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      sectionObserver.observe(containerRef.current);
    }

    return () => sectionObserver.disconnect();
  }, []);

  // Setup video observer when component mounts
  useEffect(() => {
    const videoObserver = setupVideoObserver();
    return () => videoObserver.disconnect();
  }, [setupVideoObserver]);

  // Optimized touch handlers with throttling
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const isScrollingRef = useRef(false);

  const handleTouchStart = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    const point = 'touches' in e ? e.touches[0] : e;
    touchStartRef.current = { x: point.clientX, y: point.clientY };
    isScrollingRef.current = false;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    if (!touchStartRef.current || !animation) return;

    const point = 'touches' in e ? e.touches[0] : e;
    const deltaX = point.clientX - touchStartRef.current.x;
    const deltaY = point.clientY - touchStartRef.current.y;

    // Determine if user is scrolling horizontally or vertically
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
      isScrollingRef.current = true;
      e.preventDefault();
      
      // Throttle manual scrolling updates
      requestAnimationFrame(() => {
        gsap.set(containerRef.current, { 
          x: animation.progress() * -400 * slides.length + deltaX 
        });
      });
    }
  }, [animation, slides.length]);

  const handleTouchEnd = useCallback(() => {
    touchStartRef.current = null;
    isScrollingRef.current = false;
  }, []);

  // Optimized error handling
  const handleVideoError = useCallback((e: React.SyntheticEvent<HTMLVideoElement>) => {
    console.warn('Video failed to load:', e.currentTarget.src);
  }, []);

  const handleVideoLoad = useCallback(() => {
    // Video loaded successfully
  }, []);

  return (
    <div className="flex flex-col bg-transparent grid-bg">
      <div 
        className="flex items-center self-stretch bg-transparent h-[800px] md:h-[800px] sm:h-[900px] overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
        onMouseLeave={handleTouchEnd}
      >
        <div 
          ref={containerRef}
          className="flex items-center gap-8 relative w-full select-none"
          style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
        >
          {/* Create double set for seamless loop */}
          {[...slides, ...slides].map((slide, index) => (
            <div 
              key={`${slide.id}-${index}`}
              className="slide-item flex flex-col items-center gap-4 min-w-[372px] mx-4"
            >
              <div className="bg-neutral-50 w-[372px] h-[698px] sm:h-[798px] md:h-[698px] rounded-3xl flex items-center justify-center relative border-2 border-gray-200 overflow-hidden group">
                {/* Optimized Video Player */}
                {slide.videoSrc && (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl group-hover:scale-105 transition-transform duration-700"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    preload="none"
                    webkit-playsinline="true"
                    x5-playsinline="true"
                    x5-video-player-type="h5"
                    x5-video-player-fullscreen="false"
                    poster=""
                    onError={handleVideoError}
                    onLoadedData={handleVideoLoad}
                  >
                    {/* WebM for modern browsers */}
                    <source src={slide.videoSrc} type="video/webm" />
                    {/* MP4 fallback for Safari */}
                    {slide.videoSrcMP4 && (
                      <source src={slide.videoSrcMP4} type="video/mp4" />
                    )}
                  </video>
                )}
                
                {/* Simple overlay with project name at top left */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl">
                  {/* Project name at top left */}
                  <div className="absolute top-6 left-6 z-20">
                    <div className="flex items-center gap-3">
                      {slide.iconSrc && (
                        <LazyImage
                          src={slide.iconSrc}
                          alt="Icon"
                          className="w-10 h-10 rounded-full border-2 border-white/30"
                        />
                      )}
                      <div className="text-white">
                        <h3 className="text-lg font-bold drop-shadow-lg">
                          {slide.title}
                        </h3>
                        <p className="text-sm text-white/80 drop-shadow-lg">
                          Project #{slide.number}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Number badge at top right */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/30">
                      <span className="text-white font-bold text-lg drop-shadow-lg">
                        {slide.number}
                      </span>
                    </div>
                  </div>
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
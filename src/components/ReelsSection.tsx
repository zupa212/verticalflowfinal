import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import LazyImage from './LazyImage';

const ReelsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [animation, setAnimation] = useState<gsap.core.Tween | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

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

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Enhanced video preloading strategy
  const preloadVideos = useCallback(() => {
    const preloadQueue = slides.map((slide, index) => ({
      src: slide.videoSrc,
      index,
      priority: index === 0 ? 'high' : 'low'
    }));

    // Preload first video immediately
    const firstVideo = videoRefs.current[0];
    if (firstVideo && firstVideo.readyState === 0) {
      firstVideo.load();
    }

    // Preload other videos with delay for better performance
    preloadQueue.slice(1).forEach((item, delayIndex) => {
      setTimeout(() => {
        const video = videoRefs.current[item.index];
        if (video && video.readyState === 0) {
          video.load();
        }
      }, (delayIndex + 1) * 1000); // Stagger preloading
    });
  }, [slides]);

  // Optimized video observer with better thresholds
  const setupVideoObserver = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          const videoIndex = parseInt(video.dataset.index || '0');
          
          // More aggressive loading for mobile
          const threshold = isMobile ? 0.3 : 0.5;
          
          if (entry.isIntersecting && entry.intersectionRatio > threshold) {
            // Ensure video is loaded and playing
            if (video.readyState === 0) {
              video.load();
            }
            
            // Use requestAnimationFrame for smoother playback
            requestAnimationFrame(() => {
              video.play().catch(() => {
                // Silent fail for autoplay restrictions
              });
            });
            
            setCurrentSlide(videoIndex % slides.length);
          } else {
            // Pause video when not visible
            video.pause();
          }
        });
      },
      {
        threshold: isMobile ? [0.3, 0.5, 0.7] : [0.5, 0.7],
        rootMargin: isMobile ? '0px 0px -20% 0px' : '0px 0px -10% 0px'
      }
    );

    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.dataset.index = index.toString();
        observer.observe(video);
      }
    });

    return observer;
  }, [isMobile, slides.length]);

  // Optimized GSAP animation with better performance
  useEffect(() => {
    if (!containerRef.current || !isIntersecting) return;

    const container = containerRef.current;
    const slideWidth = isMobile ? 372 : 400;
    const totalSlides = slides.length;
    
    gsap.set(container, { x: 0 });
    
    // Optimized animation settings for mobile
    const duration = isMobile ? totalSlides * 8 : totalSlides * 6; // Slower on mobile
    
    const newAnimation = gsap.to(container, {
      x: -slideWidth * totalSlides,
      duration,
      ease: "none",
      repeat: -1,
      repeatDelay: 0,
      onUpdate: () => {
        // Reduced update frequency for better performance
        if (newAnimation.progress() % 0.02 < 0.001) {
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
  }, [slides.length, isIntersecting, isMobile]);

  // Intersection Observer for the entire section
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
          
          // Preload videos when section becomes visible
          if (entry.isIntersecting) {
            preloadVideos();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      sectionObserver.observe(containerRef.current);
    }

    return () => sectionObserver.disconnect();
  }, [preloadVideos]);

  // Setup video observer when component mounts
  useEffect(() => {
    const videoObserver = setupVideoObserver();
    return () => videoObserver.disconnect();
  }, [setupVideoObserver]);

  // Enhanced touch handlers with better performance
  const touchStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const isScrollingRef = useRef(false);
  const scrollVelocityRef = useRef(0);
  const lastScrollTimeRef = useRef(0);

  const handleTouchStart = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    const point = 'touches' in e ? e.touches[0] : e;
    touchStartRef.current = { 
      x: point.clientX, 
      y: point.clientY, 
      time: Date.now() 
    };
    isScrollingRef.current = false;
    scrollVelocityRef.current = 0;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent | React.MouseEvent) => {
    if (!touchStartRef.current || !animation) return;

    const point = 'touches' in e ? e.touches[0] : e;
    const deltaX = point.clientX - touchStartRef.current.x;
    const deltaY = point.clientY - touchStartRef.current.y;
    const currentTime = Date.now();
    const timeDelta = currentTime - lastScrollTimeRef.current;

    // Calculate scroll velocity
    if (timeDelta > 0) {
      scrollVelocityRef.current = deltaX / timeDelta;
    }
    lastScrollTimeRef.current = currentTime;

    // Determine if user is scrolling horizontally
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 15) {
      isScrollingRef.current = true;
      e.preventDefault();
      
      // Smoother manual scrolling with velocity
      requestAnimationFrame(() => {
        const slideWidth = isMobile ? 372 : 400;
        const currentProgress = animation.progress();
        const manualOffset = deltaX * 0.5; // Reduce sensitivity for smoother feel
        
        gsap.set(containerRef.current, { 
          x: currentProgress * -slideWidth * slides.length + manualOffset 
        });
      });
    }
  }, [animation, slides.length, isMobile]);

  const handleTouchEnd = useCallback(() => {
    if (isScrollingRef.current && animation) {
      // Apply momentum scrolling based on velocity
      const momentum = scrollVelocityRef.current * 100;
      
      if (Math.abs(momentum) > 50) {
        const slideWidth = isMobile ? 372 : 400;
        const currentX = gsap.getProperty(containerRef.current, 'x') as number;
        const targetX = currentX + momentum;
        
        gsap.to(containerRef.current, {
          x: targetX,
          duration: 0.5,
          ease: "power2.out"
        });
      }
    }
    
    touchStartRef.current = null;
    isScrollingRef.current = false;
    scrollVelocityRef.current = 0;
  }, [animation, isMobile]);

  // Optimized error handling with fallback
  const handleVideoError = useCallback((e: React.SyntheticEvent<HTMLVideoElement>) => {
    console.warn('Video failed to load:', e.currentTarget.src);
    
    // Try to load MP4 fallback
    const video = e.currentTarget;
    const sources = video.querySelectorAll('source');
    const mp4Source = Array.from(sources).find(source => source.type === 'video/mp4');
    
    if (mp4Source && mp4Source.src !== video.src) {
      video.src = mp4Source.src;
      video.load();
    }
  }, []);

  const handleVideoLoad = useCallback(() => {
    // Video loaded successfully
  }, []);

  // Memoized slide rendering for better performance
  const renderedSlides = useMemo(() => {
    return [...slides, ...slides].map((slide, index) => (
      <div 
        key={`${slide.id}-${index}`}
                 className="slide-item flex flex-col items-center gap-4 min-w-[372px] mx-1"
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
              preload={index < 2 ? "metadata" : "none"} // Preload first 2 videos
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
    ));
  }, [slides, handleVideoError, handleVideoLoad]);

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
          className="flex items-center gap-2 relative w-full select-none"
          style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
        >
          {renderedSlides}
        </div>
      </div>
    </div>
  );
};

export default ReelsSection;
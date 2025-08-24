import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ReelsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [animation, setAnimation] = useState<gsap.core.Tween | null>(null);

  const slides = [
    {
      id: 1,
      number: "01",
      title: "Get Started Now",
      subtitle: "",
      iconSrc: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ksBwElDCQY/b0kx8nhl_expires_30_days.png",
      videoSrc: "/lovable-uploads/REEL1.webm",
      videoSrcMP4: "/videos/get-started.mp4"
    },
    {
      id: 2,
      number: "02",
      title: "Organic Fertilizer",
      subtitle: "",
      iconSrc: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ksBwElDCQY/ufi7f1bl_expires_30_days.png",
      videoSrc: "/videos/organic-fertilizer.webm",
      videoSrcMP4: "/videos/organic-fertilizer.mp4"
    },
    {
      id: 3,
      number: "03",
      title: "Technology Irrigation",
      subtitle: "",
      iconSrc: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ksBwElDCQY/jjqve23o_expires_30_days.png",
      videoSrc: "/videos/technology-irrigation.webm",
      videoSrcMP4: "/videos/technology-irrigation.mp4"
    },
    {
      id: 4,
      number: "04",
      title: "Agricultural Monitoring",
      subtitle: "",
      iconSrc: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ksBwElDCQY/b0kx8nhl_expires_30_days.png",
      videoSrc: "/videos/agricultural-monitoring.webm",
      videoSrcMP4: "/videos/agricultural-monitoring.mp4"
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const slideWidth = 400;
    const totalSlides = slides.length;
    
    gsap.set(container, { x: 0 });
    
    // Slower animation - 6 seconds per slide instead of 4
    const newAnimation = gsap.to(container, {
      x: -slideWidth * totalSlides,
      duration: totalSlides * 6, // Slower animation
      ease: "none",
      repeat: -1,
      repeatDelay: 0
    });

    setAnimation(newAnimation);

    return () => {
      newAnimation.kill();
    };
  }, [slides.length]);

  // Pause/Resume animation
  useEffect(() => {
    if (animation) {
      if (isPaused) {
        animation.pause();
      } else {
        animation.resume();
      }
    }
  }, [isPaused, animation]);

  useEffect(() => {
    // Initialize video refs array
    videoRefs.current = videoRefs.current.slice(0, slides.length * 2);

    // Set up intersection observer for videos
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && !isPaused) {
            // Force play with multiple attempts for iPhone compatibility
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  console.log('Video started playing successfully');
                })
                .catch((error) => {
                  // Retry with different approach for iPhone
                  console.log('Video play failed, retrying...', error);
                  setTimeout(() => {
                    video.muted = true;
                    video.play().catch(() => {
                      // Final fallback - try with user interaction simulation
                      video.currentTime = 0;
                      video.play().catch(() => {
                        console.log('Video autoplay not supported');
                      });
                    });
                  }, 100);
                });
            }
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
        rootMargin: '0px'
      }
    );

    // Observe all videos
    videoRefs.current.forEach((videoRef) => {
      if (videoRef) {
        observer.observe(videoRef);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [isPaused]);

  // Touch/Click handlers
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    setIsPaused(true);
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setCurrentX(clientX);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging || !containerRef.current || !animation) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startX;
    setCurrentX(clientX);
    
    // Manual slide control
    const slideWidth = 400;
    const totalSlides = slides.length;
    const maxScroll = -slideWidth * totalSlides;
    
    // Calculate new position based on drag
    const currentPosition = animation.progress() * maxScroll;
    const newPosition = Math.max(maxScroll, Math.min(0, currentPosition - deltaX * 0.5));
    
    gsap.set(containerRef.current, { x: newPosition });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Resume animation after a short delay
    setTimeout(() => {
      setIsPaused(false);
    }, 1000); // 1 second delay before resuming
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video error:', e);
    const video = e.currentTarget;
    console.error('Video src:', video.src);
    console.error('Video error details:', video.error);
  };

  const handleVideoLoad = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.log('Video loaded successfully:', e.currentTarget.src);
  };

  return (
    <div className="flex flex-col bg-transparent grid-bg">
      <div 
        className="flex items-center self-stretch bg-transparent h-[600px] overflow-hidden cursor-grab active:cursor-grabbing"
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
              <div className="bg-neutral-50 w-[372px] h-[498px] rounded-3xl flex items-center justify-center relative border-2 border-gray-200 overflow-hidden">
                {/* Video Player - Always visible and autoplaying */}
                {slide.videoSrc && (
                  <video
                    ref={(el) => (videoRefs.current[index] = el)}
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                    preload="auto"
                    webkit-playsinline="true"
                    x5-playsinline="true"
                    x5-video-player-type="h5"
                    x5-video-player-fullscreen="false"
                    poster=""
                    onError={handleVideoError}
                    onLoadedData={handleVideoLoad}
                  >
                    {/* WebM for modern browsers (Chrome, Firefox, Edge) */}
                    <source src={slide.videoSrc} type="video/webm" />
                    {/* MP4 fallback for Safari and older browsers */}
                    {slide.videoSrcMP4 && (
                      <source src={slide.videoSrcMP4} type="video/mp4" />
                    )}
                    Your browser does not support the video tag.
                  </video>
                )}
                
                {/* Overlay with text and icon */}
                <div className="absolute inset-0 bg-black/30 rounded-3xl flex items-center justify-center">
                  {slide.iconSrc && (
                    <img
                      src={slide.iconSrc} 
                      className="w-[52px] h-[52px] object-fill absolute top-4 right-4 z-10"
                      alt="Icon"
                    />
                  )}
                  <div className="text-center text-white z-10">
                    <span className="text-white text-[38px] font-bold block mb-2 drop-shadow-lg">
                      {slide.number}
                    </span>
                    <span className="text-white text-xl font-bold drop-shadow-lg">
                      {slide.title}
                    </span>
                  </div>
                </div>

                {/* Pause indicator */}
                {isPaused && (
                  <div className="absolute inset-0 bg-black/50 rounded-3xl flex items-center justify-center z-20">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-2"></div>
                      <span className="text-sm">Paused</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReelsSection;
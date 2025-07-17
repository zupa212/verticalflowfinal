import React, { useEffect, useRef, useState } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

interface LottieAnimationProps {
  animationData?: any;
  src?: string;
  width?: number;
  height?: number;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  onComplete?: () => void;
  trigger?: 'scroll' | 'hover' | 'click' | 'immediate';
  threshold?: number;
}

export const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  src,
  width,
  height,
  className = '',
  loop = true,
  autoplay = true,
  onComplete,
  trigger = 'immediate',
  threshold = 0.1
}) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [lottieData, setLottieData] = useState<any>(animationData);

  useEffect(() => {
    if (src && !animationData) {
      fetch(src)
        .then(response => response.json())
        .then(data => setLottieData(data))
        .catch(error => console.warn('Failed to load Lottie animation:', error));
    }
  }, [src, animationData]);

  useEffect(() => {
    if (trigger === 'immediate') {
      setIsPlaying(autoplay);
      return;
    }

    if (trigger === 'scroll') {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasPlayed) {
            setIsPlaying(true);
            setHasPlayed(true);
            lottieRef.current?.play();
          }
        },
        { threshold }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }
  }, [trigger, autoplay, threshold, hasPlayed]);

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      setIsPlaying(true);
      lottieRef.current?.play();
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      setIsPlaying(false);
      lottieRef.current?.pause();
    }
  };

  const handleClick = () => {
    if (trigger === 'click') {
      setIsPlaying(!isPlaying);
      if (isPlaying) {
        lottieRef.current?.pause();
      } else {
        lottieRef.current?.play();
      }
    }
  };

  const handleComplete = () => {
    if (!loop) {
      setIsPlaying(false);
    }
    onComplete?.();
  };

  if (!lottieData && !animationData) {
    return <div className={`${className} animate-pulse bg-muted rounded`} style={{ width, height }} />;
  }

  const containerStyle = width || height ? { width, height } : { width: '100%', height: '100%' };

  return (
    <div
      ref={containerRef}
      className={`lottie-container ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ 
        cursor: trigger === 'click' ? 'pointer' : 'default',
        ...containerStyle
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={lottieData || animationData}
        loop={loop}
        autoplay={trigger === 'immediate' ? autoplay : false}
        onComplete={handleComplete}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

// Simple loading animation component
export const LoadingAnimation: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  return (
    <div className={`${sizeClasses[size]} animate-spin`}>
      <div className="w-full h-full border-4 border-primary border-t-transparent rounded-full"></div>
    </div>
  );
};

export default LottieAnimation;
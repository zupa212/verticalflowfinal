
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderSrc?: string;
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  placeholderSrc,
  blurDataURL,
  onLoad,
  onError,
  priority = false,
  quality = 85,
  sizes,
  fill = false,
  width,
  height,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.1,
      }
    );

    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleImageError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate optimized image URL
  const getOptimizedSrc = (originalSrc: string, quality: number = 85) => {
    // For external images or when optimization is not available
    if (originalSrc.startsWith('http') || originalSrc.startsWith('//')) {
      return originalSrc;
    }
    
    // For local images, you could integrate with image optimization services
    return originalSrc;
  };

  const imageProps = {
    ref: imgRef,
    src: getOptimizedSrc(src, quality),
    alt,
    onLoad: handleImageLoad,
    onError: handleImageError,
    loading: priority ? 'eager' as const : 'lazy' as const,
    decoding: 'async' as const,
    ...(sizes && { sizes }),
    ...(width && { width }),
    ...(height && { height }),
  };

  return (
    <div
      ref={placeholderRef}
      className={cn(
        'relative overflow-hidden bg-muted/20',
        fill && 'w-full h-full',
        className
      )}
      style={{
        aspectRatio: width && height ? `${width}/${height}` : undefined,
      }}
    >
      {/* Blur placeholder */}
      {blurDataURL && !isLoaded && (
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            backgroundImage: `url(${blurDataURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(10px)',
            transform: 'scale(1.1)',
          }}
        />
      )}

      {/* Loading placeholder */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/10">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Main image */}
      {(isInView || priority) && !hasError && (
        <img
          {...imageProps}
          className={cn(
            'transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0',
            fill ? 'w-full h-full object-cover' : 'w-auto h-auto max-w-full'
          )}
        />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20 text-muted-foreground">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}

      {/* Fallback image */}
      {placeholderSrc && hasError && (
        <img
          src={placeholderSrc}
          alt={alt}
          className={cn(
            'w-full h-full object-cover opacity-50',
            className
          )}
        />
      )}
    </div>
  );
};

export default LazyImage;


import React, { Suspense, ComponentType } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

// Loading fallback component
export const PageSkeleton = ({ type = 'default' }: { type?: 'default' | 'blog' | 'service' }) => {
  const skeletonConfig = {
    default: {
      hero: true,
      sections: 4,
      sidebar: false,
    },
    service: {
      hero: true,
      sections: 3,
      sidebar: true,
    },
    blog: {
      hero: false,
      sections: 6,
      sidebar: true,
    },
  };

  const config = skeletonConfig[type];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation skeleton */}
      <div className="h-16 bg-card border-b">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
          <Skeleton className="h-8 w-32" />
          <div className="flex gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-6 w-16" />
            ))}
          </div>
          <Skeleton className="h-10 w-24" />
        </div>
      </div>

      {/* Hero skeleton */}
      {config.hero && (
        <div className="py-20 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
            <Skeleton className="h-6 w-1/2 mx-auto mb-8" />
            <Skeleton className="h-12 w-40 mx-auto" />
          </div>
        </div>
      )}

      {/* Content sections skeleton */}
      <div className={`max-w-7xl mx-auto px-4 py-16 ${config.sidebar ? 'grid grid-cols-1 lg:grid-cols-4 gap-8' : ''}`}>
        <div className={config.sidebar ? 'lg:col-span-3' : ''}>
          {[...Array(config.sections)].map((_, i) => (
            <div key={i} className="mb-12">
              <Skeleton className="h-8 w-1/3 mb-4" />
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
              {i % 2 === 0 && (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Skeleton className="h-48 w-full" />
                  <Skeleton className="h-48 w-full" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sidebar skeleton */}
        {config.sidebar && (
          <div className="space-y-6">
            <div>
              <Skeleton className="h-6 w-24 mb-3" />
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full" />
                ))}
              </div>
            </div>
            <div>
              <Skeleton className="h-6 w-32 mb-3" />
              <div className="grid grid-cols-2 gap-2">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="h-16 w-full" />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// HOC for lazy loading with custom loading states
export const withLazyLoading = <P extends {}>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  fallbackType: 'default' | 'blog' | 'service' = 'default'
) => {
  const LazyComponent = React.lazy(importFunc);

  return (props: P) => (
    <Suspense fallback={<PageSkeleton type={fallbackType} />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Pre-loading utility
export const preloadRoute = (importFunc: () => Promise<any>) => {
  if (typeof window !== 'undefined') {
    // Preload on hover or focus
    const link = document.createElement('link');
    link.rel = 'modulepreload';
    // In a real implementation, you'd get the chunk URL
    document.head.appendChild(link);
    
    // Also trigger the dynamic import to start loading
    importFunc().catch(() => {
      // Ignore preload errors
    });
  }
};

// Route-based code splitting helper
export const createLazyRoute = (
  componentPath: string,
  fallbackType: 'default' | 'blog' | 'service' = 'default'
) => {
  return withLazyLoading(
    () => import(componentPath),
    fallbackType
  );
};

// Performance monitoring
export const measureComponentLoad = (componentName: string) => {
  return (target: any, propertyName: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
      const start = performance.now();
      const result = method.apply(this, args);
      
      if (result instanceof Promise) {
        return result.then((res) => {
          const end = performance.now();
          console.log(`${componentName} loaded in ${end - start}ms`);
          return res;
        });
      } else {
        const end = performance.now();
        console.log(`${componentName} loaded in ${end - start}ms`);
        return result;
      }
    };
  };
};

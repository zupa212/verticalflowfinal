
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, useEffect, lazy } from "react";
import { analytics, performanceObserver } from "@/utils/analytics";
import { PageSkeleton } from "@/utils/codeSplitting";
import { preloadCriticalImages, optimizeAnimations } from "@/utils/performance";
import ProtectedRoute from "@/components/ProtectedRoute";

// Lazy load all route components for code splitting
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ReelsThessaloniki = lazy(() => import("./pages/ReelsThessaloniki"));
const SocialMediaThessaloniki = lazy(() => import("./pages/SocialMediaThessaloniki"));
const VideoEditingThessaloniki = lazy(() => import("./pages/VideoEditingThessaloniki"));
const TikTokGreece = lazy(() => import("./pages/TikTokGreece"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Admin = lazy(() => import("./pages/Admin"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: (failureCount, error) => {
        // Don't retry on 4xx errors
        if (error instanceof Error && error.message.includes('4')) {
          return false;
        }
        return failureCount < 3;
      },
    },
  },
});

// Analytics and Performance Setup Component
const AnalyticsSetup = () => {
  useEffect(() => {
    // Initialize analytics
    analytics.init();
    
    // Start performance monitoring
    performanceObserver();
    
    // Preload critical images
    preloadCriticalImages();
    
    // Optimize animations
    optimizeAnimations();
    
    // Track initial page view
    analytics.pageView();
    
    // Setup scroll depth tracking with throttling
    let maxScroll = 0;
    let ticking = false;
    
    const trackScrollDepth = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPercent = Math.round(
            (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
          );
          
          if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
            maxScroll = scrollPercent;
            analytics.scrollDepth(scrollPercent);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', trackScrollDepth, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
    };
  }, []);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnalyticsSetup />
        <Suspense fallback={<PageSkeleton type="default" />}>
          <Routes>
            <Route path="/" element={
              <ProtectedRoute>
                <Index />
              </ProtectedRoute>
            } />
            <Route 
              path="/reels-thessaloniki" 
              element={
                <ProtectedRoute>
                  <Suspense fallback={<PageSkeleton type="service" />}>
                    <ReelsThessaloniki />
                  </Suspense>
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/social-media-thessaloniki" 
              element={
                <ProtectedRoute>
                  <Suspense fallback={<PageSkeleton type="service" />}>
                    <SocialMediaThessaloniki />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route 
              path="/video-editing-thessaloniki" 
              element={
                <ProtectedRoute>
                  <Suspense fallback={<PageSkeleton type="service" />}>
                    <VideoEditingThessaloniki />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route 
              path="/tiktok-greece" 
              element={
                <ProtectedRoute>
                  <Suspense fallback={<PageSkeleton type="service" />}>
                    <TikTokGreece />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route 
              path="/about" 
              element={
                <ProtectedRoute>
                  <Suspense fallback={<PageSkeleton type="default" />}>
                    <About />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route 
              path="/contact" 
              element={
                <ProtectedRoute>
                  <Suspense fallback={<PageSkeleton type="default" />}>
                    <Contact />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route 
              path="*" 
              element={
                <Suspense fallback={<PageSkeleton type="default" />}>
                  <NotFound />
                </Suspense>
              }
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ReelsThessaloniki from "./pages/ReelsThessaloniki";
import SocialMediaThessaloniki from "./pages/SocialMediaThessaloniki";
import VideoEditingThessaloniki from "./pages/VideoEditingThessaloniki";
import TikTokGreece from "./pages/TikTokGreece";
import About from "./pages/About";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/reels-thessaloniki" element={<ReelsThessaloniki />} />
          <Route path="/social-media-thessaloniki" element={<SocialMediaThessaloniki />} />
          <Route path="/video-editing-thessaloniki" element={<VideoEditingThessaloniki />} />
          <Route path="/tiktok-greece" element={<TikTokGreece />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

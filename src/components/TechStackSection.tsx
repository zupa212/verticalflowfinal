import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code2, 
  Palette, 
  Database, 
  Zap, 
  Settings, 
  Sparkles,
  Circle,
  TrendingUp,
  Shield,
  Cpu,
  Github,
  ExternalLink,
  Star,
  Users,
  Clock
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Technology {
  name: string;
  category: string;
  icon: React.ReactNode;
  version: string;
  status: 'active' | 'updating' | 'optimizing';
  performance: number;
  description: string;
  color: string;
  details: {
    features: string[];
    github?: string;
    documentation?: string;
    lastUpdate: string;
    teamRating: number;
    projects: number;
  };
}

const technologies: Technology[] = [
  {
    name: 'React 18',
    category: 'Frontend',
    icon: <Code2 className="w-6 h-6" />,
    version: '18.3.1',
    status: 'active',
    performance: 98,
    description: 'Modern React with concurrent features for blazing-fast UIs',
    color: 'from-blue-500 to-cyan-500',
    details: {
      features: ['Concurrent Rendering', 'Automatic Batching', 'Server Components', 'Suspense'],
      github: 'facebook/react',
      documentation: 'react.dev',
      lastUpdate: '2 days ago',
      teamRating: 5,
      projects: 45
    }
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    icon: <Shield className="w-6 h-6" />,
    version: '5.x',
    status: 'active',
    performance: 96,
    description: 'Type-safe development for bulletproof applications',
    color: 'from-blue-600 to-indigo-600',
    details: {
      features: ['Static Typing', 'IntelliSense', 'Refactoring', 'Error Prevention'],
      github: 'microsoft/TypeScript',
      documentation: 'typescriptlang.org',
      lastUpdate: '1 week ago',
      teamRating: 5,
      projects: 42
    }
  },
  {
    name: 'GSAP',
    category: 'Animation',
    icon: <Sparkles className="w-6 h-6" />,
    version: '3.13.0',
    status: 'active',
    performance: 99,
    description: 'Professional animations that captivate and engage users',
    color: 'from-green-500 to-emerald-500',
    details: {
      features: ['Timeline Control', 'Scroll Triggers', 'Morphing', '60fps Performance'],
      github: 'greensock/GSAP',
      documentation: 'greensock.com/docs',
      lastUpdate: '3 days ago',
      teamRating: 5,
      projects: 38
    }
  },
  {
    name: 'Framer Motion',
    category: 'Animation',
    icon: <Zap className="w-6 h-6" />,
    version: '12.x',
    status: 'active',
    performance: 97,
    description: 'Smooth React animations with gesture support',
    color: 'from-purple-500 to-pink-500',
    details: {
      features: ['Layout Animations', 'Gesture Recognition', 'Drag & Drop', 'Variants'],
      github: 'framer/motion',
      documentation: 'framer.com/motion',
      lastUpdate: '5 days ago',
      teamRating: 5,
      projects: 35
    }
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    icon: <Palette className="w-6 h-6" />,
    version: '3.x',
    status: 'active',
    performance: 98,
    description: 'Utility-first CSS for rapid, responsive design',
    color: 'from-teal-500 to-cyan-500',
    details: {
      features: ['Utility Classes', 'JIT Mode', 'Dark Mode', 'Custom Variants'],
      github: 'tailwindlabs/tailwindcss',
      documentation: 'tailwindcss.com',
      lastUpdate: '1 week ago',
      teamRating: 5,
      projects: 48
    }
  },
  {
    name: 'Radix UI',
    category: 'UI/UX',
    icon: <Settings className="w-6 h-6" />,
    version: '1.x',
    status: 'active',
    performance: 99,
    description: 'Accessible, unstyled UI primitives for premium experiences',
    color: 'from-orange-500 to-red-500',
    details: {
      features: ['Accessibility', 'Keyboard Navigation', 'Focus Management', 'Unstyled'],
      github: 'radix-ui/primitives',
      documentation: 'radix-ui.com',
      lastUpdate: '4 days ago',
      teamRating: 5,
      projects: 40
    }
  },
  {
    name: 'TanStack Query',
    category: 'Data',
    icon: <Database className="w-6 h-6" />,
    version: '5.x',
    status: 'updating',
    performance: 95,
    description: 'Powerful data synchronization for real-time applications',
    color: 'from-violet-500 to-purple-500',
    details: {
      features: ['Smart Caching', 'Background Updates', 'Optimistic Updates', 'Offline Support'],
      github: 'TanStack/query',
      documentation: 'tanstack.com/query',
      lastUpdate: '2 days ago',
      teamRating: 4,
      projects: 32
    }
  },
  {
    name: 'Vite',
    category: 'Build Tools',
    icon: <Cpu className="w-6 h-6" />,
    version: '5.x',
    status: 'optimizing',
    performance: 97,
    description: 'Lightning-fast build tool for modern web development',
    color: 'from-yellow-500 to-orange-500',
    details: {
      features: ['Hot Module Replacement', 'Tree Shaking', 'Code Splitting', 'Fast Builds'],
      github: 'vitejs/vite',
      documentation: 'vitejs.dev',
      lastUpdate: '1 day ago',
      teamRating: 5,
      projects: 45
    }
  },
  {
    name: 'Supabase',
    category: 'Backend',
    icon: <Database className="w-6 h-6" />,
    version: 'Latest',
    status: 'active',
    performance: 98,
    description: 'Open-source Firebase alternative with real-time capabilities',
    color: 'from-green-600 to-teal-600',
    details: {
      features: ['Real-time Subscriptions', 'Row Level Security', 'Edge Functions', 'Storage'],
      github: 'supabase/supabase',
      documentation: 'supabase.com/docs',
      lastUpdate: '1 day ago',
      teamRating: 5,
      projects: 28
    }
  }
];

const categories = ['All', 'Frontend', 'Animation', 'Styling', 'UI/UX', 'Data', 'Build Tools', 'Backend'];

const TechStackSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredTechs, setFilteredTechs] = useState(technologies);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredTechs(technologies);
    } else {
      setFilteredTechs(technologies.filter(tech => tech.category === activeCategory));
    }
  }, [activeCategory]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate grid lines
      gsap.fromTo(
        ".tech-grid-line",
        { 
          opacity: 0,
          scaleX: 0 
        },
        {
          opacity: 0.6,
          scaleX: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate tech cards
      gsap.fromTo(
        ".tech-card",
        { 
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating background elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [filteredTechs]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'updating': return 'bg-blue-500';
      case 'optimizing': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Active';
      case 'updating': return 'Updating';
      case 'optimizing': return 'Optimizing';
      default: return 'Unknown';
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-background/90 to-primary/5 overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="tech-grid-line absolute bg-gradient-to-r from-transparent via-primary/20 to-transparent h-px"
            style={{
              top: `${(i + 1) * 12.5}%`,
              left: 0,
              right: 0,
              transformOrigin: 'left center'
            }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <div
            key={`vertical-${i}`}
            className="tech-grid-line absolute bg-gradient-to-b from-transparent via-primary/20 to-transparent w-px"
            style={{
              left: `${(i + 1) * 16.66}%`,
              top: 0,
              bottom: 0,
              transformOrigin: 'center top'
            }}
          />
        ))}
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/10 to-brand/10 rounded-full blur-xl" />
        <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-brand/10 to-secondary/10 rounded-full blur-lg" />
        <div className="floating-element absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 mb-6"
          >
            <Cpu className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Technology Arsenal 2025</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
          >
            <span className="bg-gradient-to-r from-primary via-brand to-secondary bg-clip-text text-transparent">
              Cutting-Edge
            </span>
            <br />
            <span className="text-foreground">Tech Stack</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Transparency in our technology choices. Real-time insights into the powerful tools 
            and frameworks powering next-generation digital experiences.
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full backdrop-blur-md border transition-all duration-300 hover:scale-105 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground border-primary/50'
                  : 'bg-white/10 text-foreground border-white/20 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTechs.map((tech, index) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="tech-card group relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Glass Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />

              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${tech.color} text-white`}>
                      {tech.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">{tech.name}</h3>
                      <span className="text-xs text-muted-foreground">{tech.category}</span>
                    </div>
                  </div>
                  
                  {/* Status Indicator */}
                  <div className="flex items-center gap-2">
                    <Circle className={`w-3 h-3 ${getStatusColor(tech.status)} rounded-full animate-pulse`} />
                    <span className="text-xs text-muted-foreground">{getStatusText(tech.status)}</span>
                  </div>
                </div>

                {/* Version & Performance */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm px-3 py-1 rounded-full bg-white/10 text-foreground">
                    v{tech.version}
                  </span>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-foreground">{tech.performance}%</span>
                  </div>
                </div>

                {/* Performance Bar */}
                <div className="mb-4">
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-1000`}
                      style={{ width: `${tech.performance}%` }}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:opacity-0 transition-opacity duration-300">
                  {tech.description}
                </p>

                {/* Detailed Hover Overlay */}
                <div className="absolute inset-0 p-6 bg-gradient-to-br from-white/95 via-white/90 to-white/95 dark:from-gray-900/95 dark:via-gray-800/90 dark:to-gray-900/95 backdrop-blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 rounded-2xl">
                  {/* Gradient Border */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} p-0.5`}>
                    <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900" />
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header with Tech Name */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${tech.color} text-white shadow-lg`}>
                        {tech.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">{tech.name}</h3>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{tech.category}</span>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4 flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {tech.details.features.map((feature, idx) => (
                          <div key={idx} className="text-xs text-gray-700 dark:text-gray-300 flex items-center gap-1">
                            <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${tech.color}`} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <span className="text-sm font-bold text-gray-900 dark:text-white">{tech.details.teamRating}</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">Rating</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Users className="w-3 h-3 text-blue-500" />
                          <span className="text-sm font-bold text-gray-900 dark:text-white">{tech.details.projects}</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">Projects</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Clock className="w-3 h-3 text-green-500" />
                          <span className="text-xs font-bold text-gray-900 dark:text-white">{tech.details.lastUpdate}</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">Updated</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      {tech.details.github && (
                        <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg text-xs font-medium hover:scale-105 transition-transform">
                          <Github className="w-3 h-3" />
                          GitHub
                        </button>
                      )}
                      {tech.details.documentation && (
                        <button className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r ${tech.color} text-white rounded-lg text-xs font-medium hover:scale-105 transition-transform shadow-lg`}>
                          <ExternalLink className="w-3 h-3" />
                          Docs
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Base Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Technologies', value: '25+', icon: <Code2 className="w-5 h-5" /> },
            { label: 'Active Projects', value: '150+', icon: <TrendingUp className="w-5 h-5" /> },
            { label: 'Uptime', value: '99.9%', icon: <Shield className="w-5 h-5" /> },
            { label: 'Performance', value: '98%', icon: <Zap className="w-5 h-5" /> }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-6 rounded-xl backdrop-blur-md bg-white/10 border border-white/20">
              <div className="flex justify-center mb-2 text-primary">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
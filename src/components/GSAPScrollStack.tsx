import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Globe, Video, Youtube } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const services: ServiceCard[] = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom Software Development",
    description: "Building powerful web applications, mobile apps, and custom software solutions tailored to your business needs with cutting-edge technology.",
    gradient: "from-primary/20 to-primary/5 border-primary/20"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Professional Web Development",
    description: "Creating modern, responsive websites and e-commerce platforms that deliver exceptional user experiences and drive conversions.",
    gradient: "from-secondary/20 to-secondary/5 border-secondary/20"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Instagram Reels & TikTok",
    description: "Producing viral short-form video content that captures attention, builds engagement, and grows your social media presence.",
    gradient: "from-accent/20 to-accent/5 border-accent/20"
  },
  {
    icon: <Youtube className="w-8 h-8" />,
    title: "YouTube Shorts & Social Media",
    description: "Creating compelling video content across all platforms to maximize reach, engagement, and brand awareness for your business.",
    gradient: "from-primary/20 to-accent/5 border-primary/20"
  }
];

const GSAPScrollStack: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    
    if (!section || !cards.length) return;

    // Clear previous refs
    cardsRef.current = cardsRef.current.filter(Boolean);

    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(cards, {
        transformOrigin: "center top",
        scale: 0.9,
        y: 100,
        opacity: 0
      });

      // Create timeline for stacking animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          refreshPriority: -1,
          invalidateOnRefresh: true
        }
      });

      // Animate each card with staggered timing
      cards.forEach((card, index) => {
        const isLast = index === cards.length - 1;
        
        tl.to(card, {
          scale: 1,
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out"
        }, index * 0.2)
        .to(card, {
          scale: isLast ? 1 : 0.95 - (index * 0.02),
          y: isLast ? 0 : -(index + 1) * 20,
          duration: 0.3,
          ease: "power2.inOut"
        }, index * 0.2 + 0.5);
      });

      // Individual card hover animations
      cards.forEach(card => {
        const cardElement = card;
        
        cardElement.addEventListener('mouseenter', () => {
          gsap.to(cardElement, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          });
        });
        
        cardElement.addEventListener('mouseleave', () => {
          gsap.to(cardElement, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });

    }, section);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-20 bg-background"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From cutting-edge software development to viral video content, we deliver excellence across all digital fronts.
          </p>
        </div>
        
        <div className="relative">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} backdrop-blur-sm border rounded-3xl p-8 md:p-12 shadow-2xl min-h-[400px] flex flex-col justify-center items-center text-center transition-all duration-300`}
              style={{ zIndex: services.length - index }}
            >
              <div className="flex flex-col items-center space-y-6">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-lg max-w-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GSAPScrollStack;
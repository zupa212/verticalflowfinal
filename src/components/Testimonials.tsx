import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const testimonials = [
    {
      id: 1,
      image: "/lovable-uploads/fdf9d875-a492-4bf3-9c9c-04b6f6528c1c.png",
      quote: "Functional design meets beauty. Work with Kree8 if you can. Their designs are always creative and aligned with our brand.",
      author: "Al Meetlong Recorder",
      role: "Landing Page Design",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      gradient: "from-black/5 to-gray-900/10"
    },
    {
      id: 2,
      image: "/lovable-uploads/fdf9d875-a492-4bf3-9c9c-04b6f6528c1c.png",
      quote: "KREE8's graphic design quality is unmatched. Whether it's branding or marketing materials, their service keeps everything seamless and affordable",
      author: "Rohan Jhaveri",
      role: "Founder of 505 Coffee",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      gradient: "from-blue-500/5 to-blue-900/10"
    },
    {
      id: 3,
      image: "/lovable-uploads/fdf9d875-a492-4bf3-9c9c-04b6f6528c1c.png",
      quote: "We've been using KREE8 for months, and their designs always exceed expectations. Reliable, fast, and creative!",
      author: "Khushi Soni",
      role: "Founder of Sound Station",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=40&h=40&fit=crop&crop=face",
      gradient: "from-purple-500/5 to-purple-900/10"
    },
    {
      id: 4,
      image: "/lovable-uploads/fdf9d875-a492-4bf3-9c9c-04b6f6528c1c.png",
      quote: "Outstanding work! VerticalFlow transformed our brand identity with precision and creativity that exceeded all expectations.",
      author: "Maria Papadopoulos",
      role: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      gradient: "from-green-500/5 to-green-900/10"
    },
    {
      id: 5,
      image: "/lovable-uploads/fdf9d875-a492-4bf3-9c9c-04b6f6528c1c.png",
      quote: "Professional, innovative, and reliable. Their attention to detail and commitment to quality is unmatched in Thessaloniki.",
      author: "Dimitris Katsaros",
      role: "Marketing Manager",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      gradient: "from-orange-500/5 to-orange-900/10"
    },
    {
      id: 6,
      image: "/lovable-uploads/fdf9d875-a492-4bf3-9c9c-04b6f6528c1c.png",
      quote: "The best investment we've made for our digital presence. VerticalFlow delivers results that speak for themselves.",
      author: "Elena Christou",
      role: "Business Owner",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face",
      gradient: "from-pink-500/5 to-pink-900/10"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards stagger animation
      if (cardsRef.current && cardsRef.current.children.length > 0) {
        const cards = Array.from(cardsRef.current.children);
        gsap.fromTo(cards,
          { y: 80, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden section-separator"
    >
      {/* Enhanced Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-60" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Row */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-20">
          <div className="flex flex-col items-center gap-3 hover-glow cursor-pointer group">
            <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center group-hover:bg-muted/70 transition-all duration-300">
              <svg className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-foreground text-center group-hover:text-foreground/80 transition-colors duration-300">48 Hours Delivery</span>
          </div>
          
          <div className="flex flex-col items-center gap-3 hover-glow cursor-pointer group">
            <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center group-hover:bg-muted/70 transition-all duration-300">
              <svg className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-sm font-medium text-foreground text-center group-hover:text-foreground/80 transition-colors duration-300">Access to Private Design Portal</span>
          </div>
          
          <div className="flex flex-col items-center gap-3 hover-glow cursor-pointer group">
            <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center group-hover:bg-muted/70 transition-all duration-300">
              <svg className="w-6 h-6 text-foreground group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <span className="text-sm font-medium text-foreground text-center group-hover:text-foreground/80 transition-colors duration-300">Unlimited Design Requests</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`group bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover-glow cursor-pointer transition-all duration-500 bg-gradient-to-br ${testimonial.gradient}`}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Portfolio Image */}
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={`VerticalFlow portfolio work showcasing ${testimonial.role} for ${testimonial.author} - digital agency Θεσσαλονίκη success story`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-background/20 to-transparent group-hover:bg-gradient-to-t group-hover:from-purple-500/10 group-hover:via-purple-400/5 group-hover:to-transparent transition-all duration-500">
                  <img 
                    src="/lovable-uploads/4a66d574-d80e-4797-b3c6-69d5c46b7e9f.png" 
                    alt="VerticalFlow logo overlay" 
                    className="w-16 h-16 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  />
                </div>
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-6 h-6 text-muted-foreground/30" />
                <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                  {testimonial.quote}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.author} profile photo - VerticalFlow client testimonial`}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground text-sm">{testimonial.author}</h4>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Thank you message */}
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  {index === 0 && "Thank you for the feedback"}
                  {index === 1 && "We'll love to work with you 💚"}
                  {index === 2 && "Thank you for the trust"}
                  {index === 3 && "Amazing collaboration! 🚀"}
                  {index === 4 && "Professional excellence delivered"}
                  {index === 5 && "Your success is our mission ✨"}
                </p>
                <p className="text-xs text-muted-foreground/50 text-center mt-1">kree8</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
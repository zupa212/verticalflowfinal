import React from 'react';
import Typewriter from 'typewriter-effect';

interface TypewriterTextProps {
  staticText?: string;
  phrases?: string[];
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  staticText = "FOR",
  phrases = ["CREATORS", "BRANDS", "DREAMERS", "FOUNDERS", "STARTUPS", "INNOVATORS"],
  className = ""
}) => {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      {/* Static Text */}
      <div className="relative">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground">
          {staticText}
        </h1>
        {/* Blue grid lines around static text */}
        <div className="absolute -inset-2 pointer-events-none">
          <div className="w-full h-full border-2 border-blue-500 border-dashed opacity-60" />
          {/* Corner squares */}
          <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-500" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-500" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-500" />
        </div>
      </div>

      {/* Animated Typewriter Text */}
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground min-w-0">
        <Typewriter
          options={{
            strings: phrases,
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
          }}
        />
      </div>
    </div>
  );
};

export default TypewriterText;
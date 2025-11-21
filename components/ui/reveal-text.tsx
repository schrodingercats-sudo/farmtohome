"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface RevealTextProps {
  text?: string;
  textColor?: string;
  overlayColor?: string;
  fontSize?: string;
  letterDelay?: number;
  overlayDelay?: number;
  overlayDuration?: number;
  springDuration?: number;
  letterImages?: string[];
  className?: string;
}

export function RevealText({
  text = "STUNNING",
  textColor = "text-white",
  overlayColor = "text-[#37E266]", // Using our vibrant green
  fontSize = "",
  letterDelay = 0.05,
  overlayDelay = 0.05,
  overlayDuration = 0.4,
  springDuration = 600,
  className = "",
  letterImages = [
    "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?q=80&w=2669&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2670&auto=format&fit=crop"
  ]
}: RevealTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showRedText, setShowRedText] = useState(false);
  
  useEffect(() => {
    const lastLetterDelay = (text.length - 1) * letterDelay;
    const totalDelay = (lastLetterDelay * 1000) + springDuration;
    
    const timer = setTimeout(() => {
      setShowRedText(true);
    }, totalDelay);
    
    return () => clearTimeout(timer);
  }, [text.length, letterDelay, springDuration]);

  return (
    <div className={`flex items-center justify-center relative ${className}`}>
      <div className="flex flex-wrap justify-center">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`${fontSize} font-black tracking-tight cursor-pointer relative overflow-hidden`}
            initial={{ 
              scale: 0,
              opacity: 0,
            }}
            animate={{ 
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: index * letterDelay,
              type: "spring",
              damping: 8,
              stiffness: 200,
              mass: 0.8,
            }}
          >
            {/* Base text layer */}
            <motion.span 
              className={`block ${textColor}`}
              animate={{ 
                opacity: hoveredIndex === index ? 0 : 1 
              }}
              transition={{ duration: 0.1 }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
            
            {/* Image text layer with background panning */}
            <motion.span
              className="absolute inset-0 text-transparent bg-clip-text bg-cover bg-no-repeat pointer-events-none"
              animate={{ 
                opacity: hoveredIndex === index ? 1 : 0,
                backgroundPosition: hoveredIndex === index ? "10% center" : "0% center"
              }}
              transition={{ 
                opacity: { duration: 0.1 },
                backgroundPosition: { 
                  duration: 3,
                  ease: "easeInOut"
                }
              }}
              style={{
                backgroundImage: `url('${letterImages[index % letterImages.length]}')`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
            
            {/* Overlay text layer that sweeps across each letter */}
            {showRedText && (
              <motion.span
                className={`absolute inset-0 ${overlayColor} pointer-events-none`}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 1, 1, 0]
                }}
                transition={{
                  delay: index * overlayDelay,
                  duration: overlayDuration,
                  times: [0, 0.1, 0.7, 1],
                  ease: "easeInOut"
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            )}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
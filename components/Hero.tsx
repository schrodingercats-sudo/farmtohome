import React from 'react';
import { Facebook, Instagram, Twitter, Globe } from 'lucide-react';
import { HERO_TAGS } from '../constants';
import { RevealText } from './ui/reveal-text';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center pt-48 md:pt-48 lg:pt-48">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Professional farm produce image */}
        <img 
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2574&auto=format&fit=crop" 
          alt="Fresh farm vegetables and fruits market" 
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Gradients for readability */}
        <div className="absolute inset-0 bg-forest-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/60 via-transparent to-forest-900/90"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center py-12 md:py-0">
        
        {/* Main Content */}
        <div className="w-full mt-8 md:mt-0">
          {/* Headline with Reveal Effect */}
          <div className="mb-6 md:mb-8">
            <RevealText 
              text="FARM TO" 
              fontSize="text-[14vw] md:text-[10vw] lg:text-[9vw] leading-[0.85]" 
              className="font-display font-bold uppercase tracking-tighter drop-shadow-xl lg:mix-blend-overlay"
            />
            <RevealText 
              text="FAMILY" 
              fontSize="text-[14vw] md:text-[10vw] lg:text-[9vw] leading-[0.85]" 
              className="font-display font-bold uppercase tracking-tighter drop-shadow-xl lg:mix-blend-overlay"
              letterDelay={0.1}
            />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 pl-1 md:pl-2">
            
            {/* Subtext and Socials */}
            <div className="max-w-full md:max-w-md">
              <p className="text-base md:text-lg text-white/90 leading-relaxed font-medium mb-8 drop-shadow-md pr-4 md:pr-0">
                Connecting rural farmers and craftspeople directly with consumers. Enjoy organic produce, handmade crafts, and staples fresh from the village, while creating sustainable opportunities for our communities.
              </p>
              
              {/* Social Icons Row */}
              <div className="flex gap-3">
                {[Twitter, Facebook, Globe, Instagram].map((Icon, idx) => (
                  <a 
                    key={idx} 
                    href="#" 
                    className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-forest-900 transition-all duration-300"
                    aria-label="Social link"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
            
          </div>
        </div>

        {/* Tags - Rounded Black Chips */}
        <div className="mt-10 md:mt-24 flex flex-wrap gap-2 md:gap-3">
          {HERO_TAGS.map((tag) => (
            <button 
              key={tag} 
              className="px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-black/80 backdrop-blur-sm text-white text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-forest-800 hover:scale-105 transition-all cursor-pointer border border-white/10"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
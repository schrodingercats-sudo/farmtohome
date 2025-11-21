import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import FadeIn from './FadeIn';

const BigCTA: React.FC = () => {
  return (
    <section className="relative h-[60vh] md:h-[85vh] w-full overflow-hidden flex flex-col justify-end pb-10 md:pb-20">
       <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2670&auto=format&fit=crop" 
          alt="Hands holding soil with a young plant" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-transparent to-transparent"></div>
      </div>

      {/* Floating Button Top Right */}
      <div className="absolute top-6 right-6 md:top-16 md:right-16 z-20">
          <button className="group flex items-center gap-2 px-5 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-forest-900 transition-all">
              Join Community <ArrowUpRight size={14} />
          </button>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <FadeIn direction="up">
          <div className="flex flex-col">
              {/* Giant Outline Text */}
              <h2 className="font-display text-[15vw] font-bold text-transparent stroke-text-white leading-[0.8] tracking-tighter select-none opacity-80">
                SUPPORT
              </h2>
              {/* Filled White Text Overlapping */}
              <h2 className="font-display text-[15vw] font-bold text-white leading-[0.8] tracking-tighter relative z-10 pl-[4vw] -mt-[4vw] md:-mt-[2vw]">
                LOCAL
              </h2>
          </div>
        </FadeIn>
      </div>
      
      <style>{`
        .stroke-text-white {
            -webkit-text-stroke: 2px rgba(255, 255, 255, 0.8);
        }
        @media (max-width: 768px) {
            .stroke-text-white {
                -webkit-text-stroke: 1px rgba(255, 255, 255, 0.8);
            }
        }
      `}</style>
    </section>
  );
};

export default BigCTA;
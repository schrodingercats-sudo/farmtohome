import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import FadeIn from './FadeIn';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-forest-900 py-10 md:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <FadeIn>
          <div className="bg-[#0a160f] border border-white/5 rounded-[2rem] md:rounded-[3rem] p-6 md:p-20 flex flex-col md:flex-row items-end justify-between gap-8 md:gap-12">
              
              <div className="max-w-2xl w-full">
                  <span className="inline-block py-2 px-4 border border-white/10 rounded-full text-white/60 text-[10px] font-bold uppercase tracking-widest mb-6 md:mb-8">
                      Newsletter
                  </span>
                  <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-white mb-8 leading-[1.1]">
                      Subscribe to our newsletter to get the <span className="text-white/30">latest updates</span> on our new plants and gardens.
                  </h2>
                  
                  <div className="flex flex-col md:flex-row items-stretch gap-4 w-full mt-8">
                      <input 
                          type="email" 
                          placeholder="Email Address" 
                          className="flex-1 bg-transparent border border-white/20 rounded-full px-6 py-4 md:px-8 text-white placeholder-white/30 focus:outline-none focus:border-[#37E266] transition-colors text-sm"
                      />
                      <button className="bg-[#37E266] hover:bg-[#2BB550] text-forest-900 font-bold uppercase tracking-widest text-[10px] px-8 py-4 md:px-10 rounded-full transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(55,226,102,0.3)] whitespace-nowrap">
                          Subscribe <ArrowUpRight size={16} />
                      </button>
                  </div>
              </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Newsletter;
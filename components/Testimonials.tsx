import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-32 bg-beige-100">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            
            {/* Left: Story Content */}
            <div className="lg:w-1/2">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-forest-900 mb-6 md:mb-8 leading-[1.05] tracking-tight">
                    Founded in 2023 by Campus Hub, we are on a mission to improve <span className="font-bold text-[#4d7c55]">village infrastructure</span> and <span className="font-bold text-[#4d7c55]">livelihoods</span>.
                </h2>
                <p className="text-lg md:text-xl text-forest-900/60 font-light leading-relaxed mb-8 md:mb-10">
                    Based in Vadodara, Gujarat, Farm to Family helps improve roads, drainage, and water supply in our partner villages through sustainable e-commerce solutions.
                </p>
                <button className="px-8 py-3 rounded-full border border-forest-900/20 text-forest-900 text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-forest-900 hover:text-white transition-colors group bg-transparent">
                    Our Story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Right: Testimonials Grid */}
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                {TESTIMONIALS.map((item, idx) => (
                    <div key={item.id} className="bg-[#0E1F14] text-white p-6 md:p-8 rounded-[1.5rem] relative flex flex-col justify-between min-h-[280px] md:min-h-[320px] group hover:-translate-y-2 transition-transform duration-300">
                    
                    <div className="flex gap-1 text-[#37E266] mb-6">
                        {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} fill="currentColor" size={14} className="stroke-none" />
                        ))}
                    </div>

                    <blockquote className="font-sans text-base md:text-lg leading-relaxed mb-8 opacity-90">
                        "{item.quote}"
                    </blockquote>

                    <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                        <img 
                        src={item.avatarUrl} 
                        alt={item.author} 
                        className="w-10 h-10 rounded-full object-cover border border-white/20"
                        />
                        <div>
                        <div className="font-bold text-white text-sm">{item.author}</div>
                        <div className="text-white/40 text-[10px] uppercase tracking-wider">{item.role}</div>
                        </div>
                        
                        {/* Arrow Icon on first card */}
                        {idx === 0 && (
                            <div className="ml-auto w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-forest-900 transition-colors cursor-pointer">
                                <ArrowRight size={14} className="-rotate-45" />
                            </div>
                        )}
                    </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
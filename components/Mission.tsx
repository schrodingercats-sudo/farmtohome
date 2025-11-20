import React from 'react';
import { Sprout } from 'lucide-react';

const Mission: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white text-forest-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Top Section: Headline & Intro */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 md:gap-12 mb-12 md:mb-20">
          <div className="lg:w-1/3 order-2 lg:order-1">
             <p className="text-lg md:text-xl text-forest-800/80 leading-relaxed font-medium">
               We create sustainable economic opportunities for rural communities by eliminating middlemen and ensuring fair prices for producers.
             </p>
          </div>

          <div className="lg:w-1/2 text-left lg:text-right order-1 lg:order-2">
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.9] tracking-tight text-forest-900">
              Bridging <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-forest-800 to-forest-600 opacity-80">Traditional Skills</span> <br/>
              With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4d7c55] to-[#84A98C]">Modern Needs</span>
            </h2>
          </div>
        </div>

        {/* Bottom Section: 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Stats */}
          <div className="bg-[#F5F5F5] p-6 md:p-8 rounded-[2rem] flex flex-col justify-between min-h-[300px] md:min-h-[340px]">
            <div>
              <h3 className="font-display text-5xl md:text-6xl font-bold text-forest-900 mb-2 tracking-tighter">50+</h3>
              <p className="text-xs uppercase tracking-widest font-bold text-forest-600/70 mb-8 md:mb-10">Villages Empowered</p>
              
              <div className="space-y-5">
                <div className="flex items-center justify-between text-xs font-bold tracking-wide uppercase border-b border-forest-900/5 pb-3">
                  <span>Fair Price Guarantee</span>
                  <div className="flex gap-1 hidden xl:flex">
                     {[...Array(10)].map((_,i) => <div key={i} className={`w-1.5 h-1.5 rounded-full bg-[#4d7c55]`}></div>)}
                  </div>
                  <span className="ml-2">100%</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold tracking-wide uppercase border-b border-forest-900/5 pb-3">
                  <span>Infrastructure</span>
                  <div className="flex gap-1 hidden xl:flex">
                     {[...Array(8)].map((_,i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#4d7c55]"></div>)}
                  </div>
                  <span className="ml-2">Growth</span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold tracking-wide uppercase pb-1">
                  <span>Community Projects</span>
                  <div className="flex gap-1 hidden xl:flex">
                     {[...Array(6)].map((_,i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#4d7c55]"></div>)}
                  </div>
                  <span className="ml-2">15+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Text + Icon */}
          <div className="bg-[#F5F5F5] p-6 md:p-8 rounded-[2rem] flex flex-col justify-between min-h-[300px] md:min-h-[340px] relative group hover:bg-[#f0f0f0] transition-colors">
             <div className="w-14 h-14 text-[#4d7c55] mb-6">
                <Sprout size={48} fill="currentColor" className="rotate-12" />
             </div>
             <div>
                <p className="font-sans text-2xl md:text-3xl font-medium leading-tight mb-4 text-forest-900">
                  Farmers, <span className="text-forest-900/40">Artisans,</span> and <span className="text-forest-900/40">Community</span> leaders working hand in hand.
                </p>
             </div>
          </div>

          {/* Card 3: Image */}
          <div className="group relative rounded-[2rem] overflow-hidden min-h-[300px] md:min-h-[340px]">
            <img 
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2670&auto=format&fit=crop" 
              alt="Sustainable Farming" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <span className="inline-block px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
                Village Innovation
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Mission;
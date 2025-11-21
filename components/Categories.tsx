import React from 'react';
import { CATEGORIES } from '../constants';
import FadeIn from './FadeIn';

const Categories: React.FC = () => {
  return (
    <section className="py-16 md:py-32 bg-[#F0F2EF]">
      <div className="container mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="mb-12 md:mb-20 text-center max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-forest-900 uppercase leading-[0.9] tracking-tighter">
              Fresh From <br/> The Village <br/> To Your Home
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((category, idx) => (
            <FadeIn key={category.id} delay={idx * 0.1}>
              <div 
                className="group relative h-[400px] md:h-[500px] rounded-[1.5rem] overflow-hidden cursor-pointer"
              >
                <img 
                  src={category.imageUrl} 
                  alt={category.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[10%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end items-start">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-[0.9] mb-3 w-11/12 md:w-3/4">
                    {category.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-6 md:mb-8 line-clamp-3 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:translate-y-4 md:group-hover:translate-y-0">
                    {category.description}
                  </p>
                  
                  <button className="w-full py-3 md:py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-forest-900 transition-all flex items-center justify-center gap-2 md:group-hover:bg-white md:group-hover:text-forest-900">
                    Shop Now
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
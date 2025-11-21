import React from 'react';
import FadeIn from '../components/FadeIn';
import { CATEGORIES, PRODUCTS } from '../constants';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Marketplace: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen bg-[#F0F2EF]">
      <div className="container mx-auto px-4 md:px-6 pb-20">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-forest-900 uppercase tracking-tighter mb-6">
              Village Marketplace
            </h1>
            <p className="text-lg md:text-xl text-forest-900/60 font-medium">
              Directly from the hands of our farmers and artisans to your home.
            </p>
          </div>
        </FadeIn>

        {/* Categories Filter (Visual) */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <button className="px-6 py-2 rounded-full bg-forest-900 text-white text-xs font-bold uppercase tracking-widest">
              All Items
            </button>
            {CATEGORIES.map(cat => (
              <button key={cat.id} className="px-6 py-2 rounded-full border border-forest-900/10 text-forest-900 hover:bg-forest-900 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
                {cat.title}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product, idx) => (
            <FadeIn key={product.id} delay={idx * 0.1}>
              <Link to={`/product/${product.id}`} className="block h-full">
                <div className="group bg-white rounded-[2rem] p-4 hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-forest-900/5 h-full flex flex-col">
                  <div className="relative h-[300px] rounded-[1.5rem] overflow-hidden mb-6 flex-shrink-0">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-forest-900 hover:bg-forest-900 hover:text-white transition-colors z-10">
                      <ShoppingBag size={18} />
                    </button>
                    <div className="absolute bottom-4 left-4 bg-forest-900/90 backdrop-blur px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest">
                      {product.category}
                    </div>
                  </div>
                  
                  <div className="px-2 pb-4 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-display text-xl font-bold text-forest-900 leading-tight">
                        {product.name}
                      </h3>
                      <span className="font-sans font-bold text-[#4d7c55] whitespace-nowrap ml-4">
                        ₹{product.price}
                      </span>
                    </div>
                    <div className="mt-auto pt-4">
                      <button className="w-full py-3 rounded-full border border-forest-900/10 text-forest-900 text-[10px] font-bold uppercase tracking-widest group-hover:bg-forest-900 group-hover:text-white transition-colors flex items-center justify-center gap-2">
                        View Details <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Marketplace;
import React from 'react';
import FadeIn from '../components/FadeIn';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

const Story: React.FC = () => {
  return (
    <div className="pt-32 bg-white min-h-screen">
      
      {/* Story Hero */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <FadeIn>
          <div className="max-w-5xl mx-auto">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-forest-900 uppercase tracking-tighter mb-12 leading-[0.9]">
              Cultivating <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4d7c55] to-[#84A98C]">Community</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <p className="text-xl md:text-2xl text-forest-900/80 font-medium leading-relaxed">
                Farm to Family was founded in 2023 by the passionate members of Campus Hub in Vadodara, Gujarat.
              </p>
              <div className="text-forest-900/60 leading-relaxed space-y-6">
                <p>
                  What started as a small initiative to bridge the gap between traditional rural skills and modern market needs has grown into a movement. We saw that village artisans and farmers were receiving only a fraction of the value of their hard work, while consumers were paying high prices for goods of questionable quality.
                </p>
                <p>
                  Our platform eliminates the middlemen, ensuring fair prices for producers and fresh, authentic products for you. But we go beyond commerce. We are committed to improving village infrastructure—roads, drainage, electricity, and water supply—creating a cycle of sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Image Banner */}
      <section className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden my-12">
        <img 
           src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2670&auto=format&fit=crop" 
           alt="Farm landscape" 
           className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-forest-900/20"></div>
      </section>

      <Team />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Story;
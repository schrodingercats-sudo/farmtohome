import React from 'react';
import Mission from '../components/Mission';
import FadeIn from '../components/FadeIn';
import BigCTA from '../components/BigCTA';

const Impact: React.FC = () => {
  return (
    <div className="pt-32 bg-white min-h-screen">
       <div className="container mx-auto px-4 md:px-6 mb-12">
          <FadeIn>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-forest-900 uppercase tracking-tighter mb-6 text-center">
               Our Impact
            </h1>
            <p className="text-center text-xl text-forest-900/60 max-w-3xl mx-auto">
               We believe in technology that empowers. From fair trade practices to sustainable energy solutions like wind power, we are building the future of rural India.
            </p>
          </FadeIn>
       </div>
       
       <Mission />

       <section className="py-24 bg-[#F0F2EF]">
         <div className="container mx-auto px-4 md:px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <FadeIn delay={0.1}>
                 <div className="bg-white p-10 rounded-[2rem]">
                    <div className="text-4xl mb-4">💧</div>
                    <h3 className="font-display text-2xl font-bold text-forest-900 mb-2">Water Security</h3>
                    <p className="text-forest-900/60 text-sm">Restored 10+ village ponds and installed localized filtration systems.</p>
                 </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                 <div className="bg-white p-10 rounded-[2rem]">
                    <div className="text-4xl mb-4">🛣️</div>
                    <h3 className="font-display text-2xl font-bold text-forest-900 mb-2">Better Roads</h3>
                    <p className="text-forest-900/60 text-sm">Improved connectivity for 5 villages facilitating easier trade transport.</p>
                 </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                 <div className="bg-white p-10 rounded-[2rem]">
                    <div className="text-4xl mb-4">⚡</div>
                    <h3 className="font-display text-2xl font-bold text-forest-900 mb-2">Renewable Energy</h3>
                    <p className="text-forest-900/60 text-sm">Implementing solar and wind solutions for uninterrupted power.</p>
                 </div>
              </FadeIn>
           </div>
         </div>
       </section>

       <BigCTA />
    </div>
  );
};

export default Impact;
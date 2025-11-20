import React from 'react';

const Team: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white text-forest-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight mb-4 md:mb-6 text-forest-900">
                Our Amazing Team
            </h2>
            <p className="text-lg md:text-xl text-forest-900/60 font-medium">
                The passionate individuals driving Farm to Family's mission
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Team Member 1 */}
            <div className="group bg-beige-100 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 hover:bg-[#F0F2EF] transition-all duration-500 hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center text-4xl md:text-5xl shadow-lg shadow-forest-900/5 mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                        <span className="relative z-10">👩‍💼</span>
                        <div className="absolute inset-0 bg-fresh-500/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                    </div>
                    
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 md:mb-3 text-forest-900">Parthvi Vyas</h3>
                    <div className="inline-block px-4 py-1.5 rounded-full border border-forest-900/10 text-[10px] font-bold uppercase tracking-widest text-forest-600 mb-4 md:mb-6 bg-white/50">
                        Founder, Campus Hub
                    </div>
                    
                    <p className="text-forest-900/70 leading-relaxed text-base md:text-lg">
                        Visionary leader with a passion for rural development. Parthvi bridges the gap between traditional farming communities and modern e-commerce, ensuring fair value for producers.
                    </p>
                </div>
            </div>

            {/* Team Member 2 */}
            <div className="group bg-beige-100 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 hover:bg-[#F0F2EF] transition-all duration-500 hover:-translate-y-2">
                <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center text-4xl md:text-5xl shadow-lg shadow-forest-900/5 mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                        <span className="relative z-10">👨‍💻</span>
                         <div className="absolute inset-0 bg-fresh-500/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full"></div>
                    </div>
                    
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 md:mb-3 text-forest-900">Akshar Brahmbhatt</h3>
                    <div className="inline-block px-4 py-1.5 rounded-full border border-forest-900/10 text-[10px] font-bold uppercase tracking-widest text-forest-600 mb-4 md:mb-6 bg-white/50">
                        Co-Founder
                    </div>
                    
                    <p className="text-forest-900/70 leading-relaxed text-base md:text-lg">
                        Technology specialist who drives innovation in our platform. Akshar's expertise ensures our e-commerce solution is robust, scalable, and user-friendly for both producers and consumers.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
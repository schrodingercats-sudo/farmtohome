import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-900 text-white/40 pb-8 md:pb-12 pt-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-8">
          <div className="text-[10px] uppercase tracking-widest font-medium order-2 md:order-1">
            All rights reserved &copy; 2025
          </div>
          
          <div className="text-xl md:text-2xl font-display font-bold text-white tracking-tight order-1 md:order-2">
            Farm to Family
          </div>

          <div className="flex gap-4 order-3">
            {['Facebook', 'LinkedIn', 'Instagram'].map((social) => (
                <button key={social} className="text-[10px] uppercase tracking-widest font-bold text-white/60 hover:text-white transition-colors px-4 py-2 md:px-5 border border-white/10 rounded-full hover:bg-white/5">
                    {social}
                </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
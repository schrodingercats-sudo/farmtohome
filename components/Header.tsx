import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const menuVariants = {
    initial: {
      opacity: 0,
      clipPath: "circle(0% at 100% 0%)"
    },
    animate: {
      opacity: 1,
      clipPath: "circle(150% at 100% 0%)",
      transition: {
        duration: 0.7,
        ease: [0.19, 1, 0.22, 1]
      }
    },
    exit: {
      opacity: 0,
      clipPath: "circle(0% at 100% 0%)",
      transition: {
        duration: 0.5,
        ease: [0.19, 1, 0.22, 1],
        delay: 0.1
      }
    }
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const linkVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.19, 1, 0.22, 1]
      }
    },
    exit: { 
      y: 20, 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 bg-forest-900/90 backdrop-blur-lg border-b border-white/5' : 'py-4 md:py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="z-50 relative flex-shrink-0 w-auto group">
          <h1 className="font-display text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter text-white transition-colors duration-300">
            Farm to Family
          </h1>
        </a>

        {/* Desktop Nav - Centered */}
        <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-12 flex-1">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              className="text-xs font-bold uppercase tracking-widest text-beige-100/80 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Desktop Actions - Right Aligned */}
        <div className="hidden lg:flex items-center justify-end gap-3 w-[180px] md:w-auto">
          <button className="h-10 px-6 rounded-full bg-[#4d7c55] hover:bg-[#5a8d63] text-white text-[10px] font-bold uppercase tracking-widest transition-colors shadow-lg shadow-forest-900/20">
            Shop Fresh
          </button>
          <button className="h-10 px-6 rounded-full border border-white/30 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-forest-900 transition-colors">
            Join Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden z-50 text-white p-2 -mr-2 relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode='wait'>
             {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                    <X size={24} />
                </motion.div>
             ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                    <Menu size={24} />
                </motion.div>
             )}
          </AnimatePresence>
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed inset-0 bg-forest-900 z-40 flex flex-col items-center justify-center"
            >
              <motion.div 
                className="flex flex-col items-center gap-8 w-full"
                variants={containerVariants}
              >
                {NAV_LINKS.map((link) => (
                  <motion.a 
                    key={link.label} 
                    href={link.href} 
                    variants={linkVariants}
                    className="text-3xl md:text-4xl font-display font-bold text-white uppercase hover:text-[#4d7c55] transition-colors cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
                
                <motion.div variants={linkVariants} className="flex flex-col gap-4 mt-8 w-64 px-6">
                  <button className="h-12 w-full rounded-full bg-[#4d7c55] text-white text-xs font-bold uppercase tracking-widest">
                    Shop Fresh
                  </button>
                  <button className="h-12 w-full rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
                    Join Us
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
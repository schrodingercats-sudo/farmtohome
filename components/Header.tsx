
import React, { useState, useEffect } from 'react';
import { Menu, X, User, LayoutDashboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user } = useAuth();

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Determine color theme based on route and scroll state
  const isLightPage = 
    ['/marketplace', '/story', '/impact', '/signin', '/signup', '/account'].includes(location.pathname) || 
    location.pathname.startsWith('/product/');
  
  const useDarkText = isLightPage && !isScrolled && !mobileMenuOpen;

  const textColorClass = useDarkText ? 'text-forest-900' : 'text-white';
  const navLinkDefaultClass = useDarkText ? 'text-forest-900/80 hover:text-forest-900' : 'text-beige-100/80 hover:text-white';
  const navLinkActiveClass = useDarkText ? 'text-forest-900' : 'text-white';
  const activeUnderlineClass = useDarkText ? 'bg-forest-900' : 'bg-white';
  
  const outlineButtonClass = useDarkText
    ? 'border-forest-900/30 text-forest-900 hover:bg-forest-900 hover:text-white'
    : 'border-white/30 text-white hover:bg-white hover:text-forest-900';

  // Helper to get initials
  const getInitials = (name: string) => {
    if (!name) return 'U';
    const parts = name.split(' ');
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
  };

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
        ease: [0.19, 1, 0.22, 1] as const
      }
    },
    exit: {
      opacity: 0,
      clipPath: "circle(0% at 100% 0%)",
      transition: {
        duration: 0.5,
        ease: [0.19, 1, 0.22, 1] as const,
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
        ease: [0.19, 1, 0.22, 1] as const
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

  // Don't show header on admin routes
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        mobileMenuOpen 
          ? 'py-4 bg-transparent' 
          : isScrolled 
            ? 'py-4 bg-forest-900/90 backdrop-blur-lg border-b border-white/5' 
            : 'py-4 md:py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="z-50 relative flex-shrink-0 w-auto group">
          <h1 className={`font-display text-xl md:text-2xl lg:text-3xl font-bold tracking-tighter transition-colors duration-300 ${textColorClass}`}>
            Farm to Family
          </h1>
        </Link>

        {/* Desktop Nav - Centered */}
        <nav className="hidden lg:flex items-center justify-center gap-8 xl:gap-12 flex-1">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.label} 
              to={link.href} 
              className={`text-xs font-bold uppercase tracking-widest transition-colors relative group ${
                location.pathname === link.href ? navLinkActiveClass : navLinkDefaultClass
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${activeUnderlineClass} ${
                location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* Desktop Actions - Right Aligned */}
        <div className="hidden lg:flex items-center justify-end gap-3 w-[220px] md:w-auto">
          
          {isAuthenticated && user?.isAdmin && (
             <Link to="/admin">
                <button className="h-10 px-4 rounded-full bg-forest-900 border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-forest-800 transition-colors flex items-center gap-2">
                    <LayoutDashboard size={14} /> Admin
                </button>
             </Link>
          )}

          <Link to="/marketplace">
            <button className="h-10 px-6 rounded-full bg-[#4d7c55] hover:bg-[#5a8d63] text-white text-[10px] font-bold uppercase tracking-widest transition-colors shadow-lg shadow-forest-900/20">
              Shop Fresh
            </button>
          </Link>
          
          {isAuthenticated && user ? (
            <Link to="/account">
              <button className={`h-10 px-4 pr-5 rounded-full border flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-colors ${outlineButtonClass}`}>
                <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-200 border border-white/20 flex-shrink-0">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-forest-800 text-white flex items-center justify-center text-[9px]">
                      {getInitials(user.name)}
                    </div>
                  )}
                </div>
                Account
              </button>
            </Link>
          ) : (
            <Link to="/signin">
              <button className={`h-10 px-6 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-colors ${outlineButtonClass}`}>
                Sign In
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden z-50 p-2 -mr-2 relative w-10 h-10 flex items-center justify-center transition-colors duration-300 ${textColorClass}`}
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
                  className="text-white"
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
                  <motion.div key={link.label} variants={linkVariants}>
                    <Link 
                      to={link.href} 
                      className={`text-3xl md:text-4xl font-display font-bold uppercase transition-colors cursor-pointer ${
                        location.pathname === link.href ? 'text-[#4d7c55]' : 'text-white hover:text-[#4d7c55]'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {isAuthenticated && user?.isAdmin && (
                    <motion.div variants={linkVariants}>
                         <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="text-2xl md:text-3xl font-display font-bold uppercase text-white hover:text-[#4d7c55] transition-colors">
                            Admin Panel
                         </Link>
                    </motion.div>
                )}
                
                <motion.div variants={linkVariants} className="flex flex-col gap-4 mt-8 w-64 px-6">
                  <Link to="/marketplace" onClick={() => setMobileMenuOpen(false)}>
                    <button className="h-12 w-full rounded-full bg-[#4d7c55] text-white text-xs font-bold uppercase tracking-widest">
                      Shop Fresh
                    </button>
                  </Link>
                  
                  {isAuthenticated && user ? (
                    <Link to="/account" onClick={() => setMobileMenuOpen(false)}>
                      <button className="h-12 w-full rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                        <div className="w-5 h-5 rounded-full overflow-hidden bg-white/20 flex-shrink-0">
                          {user.avatar ? (
                            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-forest-800 text-white flex items-center justify-center text-[8px]">
                              {getInitials(user.name)}
                            </div>
                          )}
                        </div>
                         My Account
                      </button>
                    </Link>
                  ) : (
                    <Link to="/signin" onClick={() => setMobileMenuOpen(false)}>
                      <button className="h-12 w-full rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
                        Sign In
                      </button>
                    </Link>
                  )}
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
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ConstructionScaleSVG } from './SectionHeading';

export default function BreathingNavbar({ activePage, setActivePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', hasLink: true },
    { id: 'about', label: 'About Us', hasLink: true },
    { id: 'services', label: 'Services', hasLink: true },
    { id: 'work', label: 'Work', hasLink: true },
    { id: 'careers', label: 'Careers', hasLink: true },
    { id: 'subcontractors', label: 'Subcontractors', hasLink: true },
    { id: 'contact', label: 'Contact Us', hasLink: true },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-2 sm:py-2.5 bg-[#07080A]/40 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/50'
            : 'py-3 sm:py-3.5 bg-[#07080A]/20 backdrop-blur-xl border-b border-white/[0.06]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official BNS Vector Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="group flex items-center gap-3 text-left focus:outline-none cursor-pointer py-1"
              aria-label="BNS Development Home"
            >
              <div className="relative">
                <img
                  src="/logos/BNS LOGO-01.svg"
                  alt="BNS DEVELOPMENT"
                  className={`transition-all duration-500 w-auto object-contain ${
                    isScrolled ? 'h-[38px] md:h-[44px]' : 'h-[46px] md:h-[54px]'
                  }`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full" />
              </div>
            </button>

            {/* Desktop Navigation Floating Pill with Frosted Glass */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center px-2.5 py-1.5 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-2xl shadow-xl shadow-black/25">
                {navItems.map((item) => {
                  const isActive = activePage === item.id;
                  if (!item.hasLink) {
                    return (
                      <span
                        key={item.id}
                        className="relative px-3 xl:px-3.5 py-1.5 text-xs xl:text-sm font-semibold tracking-wide uppercase text-white/40 select-none cursor-default"
                      >
                        {item.label}
                      </span>
                    );
                  }
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`relative px-3.5 xl:px-4 py-1.5 text-xs xl:text-sm font-semibold tracking-wide uppercase transition-all duration-300 rounded-full focus:outline-none cursor-pointer border ${
                        isActive
                          ? 'text-brand-heading border-white/10'
                          : 'text-white/60 hover:text-white border-transparent hover:border-brand-red/30 hover:bg-brand-red/[0.08] hover:shadow-[0_0_16px_rgba(215,25,32,0.22)]'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeNavTab"
                          className="absolute inset-0 bg-white/[0.08] border border-white/10 rounded-full shadow-inner"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        {item.label}
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_6px_#D71920] animate-pulse" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* Mobile Toggle */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-brand-red focus:outline-none transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

      </header>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 top-[65px] z-40 bg-[#07080A]/95 backdrop-blur-2xl border-b border-white/10 lg:hidden flex flex-col justify-between p-6 overflow-y-auto text-white"
          >
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-brand-red uppercase mb-4">
                <ConstructionScaleSVG color="red" />
                <span>ARCHITECTURAL NAVIGATION</span>
              </div>
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                if (!item.hasLink) {
                  return (
                    <div
                      key={item.id}
                      className="w-full flex items-center justify-between p-3.5 rounded-xl text-base font-bold tracking-wide uppercase text-white/40 cursor-default select-none"
                    >
                      <span>{item.label}</span>
                    </div>
                  );
                }
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl text-base font-bold tracking-wide uppercase transition-all duration-300 border ${
                      isActive
                        ? 'bg-white/[0.08] text-brand-heading border-brand-red/40 shadow-[0_0_16px_rgba(215,25,32,0.2)]'
                        : 'text-white/60 hover:text-white border-transparent hover:border-brand-red/30 hover:bg-brand-red/[0.08] hover:shadow-[0_0_16px_rgba(215,25,32,0.2)]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-brand-red shadow-[0_0_8px_#D71920] animate-pulse" />
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-white/40" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { ConstructionScaleSVG } from './SectionHeading';

export default function BreathingNavbar({ activePage, setActivePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', hasLink: true },
    { id: 'about-1', label: 'About us -1', hasLink: true },
    { id: 'about-2', label: 'About us -2', hasLink: true },
    { id: 'about-3', label: 'About us -3', hasLink: true },
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
                    isScrolled ? 'h-[36px] md:h-[42px]' : 'h-[42px] md:h-[50px]'
                  }`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full" />
              </div>
            </button>

            {/* Desktop Navigation Floating Pill with Frosted Glass */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center px-2 py-1 rounded-full bg-white/[0.04] border border-white/15 backdrop-blur-2xl shadow-xl shadow-black/25">
                {navItems.map((item) => {
                  const isServices = item.id === 'services';
                  const isItemActive =
                    activePage === item.id ||
                    (item.id === 'about-1' && activePage === 'about') ||
                    (isServices && (activePage === 'design-build' || activePage === 'predevelopment' || activePage === 'preconstruction' || activePage === 'residential'));

                  if (!item.hasLink) {
                    return (
                      <span
                        key={item.id}
                        className="relative px-2 xl:px-2.5 py-1 text-[10px] xl:text-xs font-semibold tracking-wide uppercase text-white/40 select-none cursor-default"
                      >
                        {item.label}
                      </span>
                    );
                  }

                  if (isServices) {
                    return (
                      <div
                        key={item.id}
                        className="relative"
                        onMouseEnter={() => setServicesMenuOpen(true)}
                        onMouseLeave={() => setServicesMenuOpen(false)}
                      >
                        <button
                          onClick={() => handleNavClick(item.id)}
                          className={`relative px-2 xl:px-2.5 py-1.5 text-[10px] xl:text-xs font-semibold tracking-wide uppercase transition-all duration-300 rounded-full focus:outline-none cursor-pointer border ${
                            isItemActive
                              ? 'text-brand-heading border-white/10'
                              : 'text-white/60 hover:text-white border-transparent hover:border-brand-red/30 hover:bg-brand-red/[0.08] hover:shadow-[0_0_16px_rgba(215,25,32,0.22)]'
                          }`}
                        >
                          {isItemActive && (
                            <motion.span
                              layoutId="activeNavTab"
                              className="absolute inset-0 bg-white/[0.08] border border-white/10 rounded-full shadow-inner"
                              transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                            />
                          )}
                          <span className="relative z-10 flex items-center gap-1.5">
                            {item.label}
                            {isItemActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-red shadow-[0_0_6px_#D71920] animate-pulse" />
                            )}
                          </span>
                        </button>

                        <AnimatePresence>
                          {servicesMenuOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 8, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 8, scale: 0.98 }}
                              transition={{ duration: 0.18 }}
                              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 p-2 rounded-2xl bg-[#07080A]/95 backdrop-blur-2xl border border-white/15 shadow-2xl space-y-1 z-50 text-left"
                            >
                              <button
                                onClick={() => {
                                  handleNavClick('services');
                                  setServicesMenuOpen(false);
                                }}
                                className={`w-full text-left px-3 py-2 rounded-xl text-[11px] font-mono uppercase tracking-wider transition-colors flex items-center justify-between cursor-pointer ${
                                  activePage === 'services' ? 'bg-brand-red text-white font-bold' : 'text-neutral-300 hover:text-white hover:bg-white/[0.08]'
                                }`}
                              >
                                <span>All Services</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
                              </button>
                              <button
                                onClick={() => {
                                  handleNavClick('design-build');
                                  setServicesMenuOpen(false);
                                }}
                                className={`w-full text-left px-3 py-2 rounded-xl text-[11px] font-mono uppercase tracking-wider transition-colors flex items-center justify-between cursor-pointer ${
                                  activePage === 'design-build' ? 'bg-brand-red text-white font-bold' : 'text-neutral-300 hover:text-white hover:bg-white/[0.08]'
                                }`}
                              >
                                <span>Design-Build</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
                              </button>
                              <button
                                onClick={() => {
                                  handleNavClick('predevelopment');
                                  setServicesMenuOpen(false);
                                }}
                                className={`w-full text-left px-3 py-2 rounded-xl text-[11px] font-mono uppercase tracking-wider transition-colors flex items-center justify-between cursor-pointer ${
                                  (activePage === 'predevelopment' || activePage === 'preconstruction') ? 'bg-brand-red text-white font-bold' : 'text-neutral-300 hover:text-white hover:bg-white/[0.08]'
                                }`}
                              >
                                <span>Pre Development Services</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
                              </button>
                              <button
                                onClick={() => {
                                  handleNavClick('residential');
                                  setServicesMenuOpen(false);
                                }}
                                className={`w-full text-left px-3 py-2 rounded-xl text-[11px] font-mono uppercase tracking-wider transition-colors flex items-center justify-between cursor-pointer ${
                                  activePage === 'residential' ? 'bg-brand-red text-white font-bold' : 'text-neutral-300 hover:text-white hover:bg-white/[0.08]'
                                }`}
                              >
                                <span>Residential Services</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
                              </button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`relative px-2 xl:px-2.5 py-1.5 text-[10px] xl:text-xs font-semibold tracking-wide uppercase transition-all duration-300 rounded-full focus:outline-none cursor-pointer border ${
                        isItemActive
                          ? 'text-brand-heading border-white/10'
                          : 'text-white/60 hover:text-white border-transparent hover:border-brand-red/30 hover:bg-brand-red/[0.08] hover:shadow-[0_0_16px_rgba(215,25,32,0.22)]'
                      }`}
                    >
                      {isItemActive && (
                        <motion.span
                          layoutId="activeNavTab"
                          className="absolute inset-0 bg-white/[0.08] border border-white/10 rounded-full shadow-inner"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        {item.label}
                        {isItemActive && (
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
                  <div key={item.id} className="space-y-1">
                    <button
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

                    {item.id === 'services' && (
                      <div className="pl-4 pr-1 py-1 space-y-1">
                        <button
                          onClick={() => handleNavClick('design-build')}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors ${
                            activePage === 'design-build'
                              ? 'bg-brand-red text-white font-bold'
                              : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                          }`}
                        >
                          <span>→ Design-Build Services</span>
                        </button>
                        <button
                          onClick={() => handleNavClick('predevelopment')}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors ${
                            activePage === 'predevelopment' || activePage === 'preconstruction'
                              ? 'bg-brand-red text-white font-bold'
                              : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                          }`}
                        >
                          <span>→ Pre Development Services</span>
                        </button>
                        <button
                          onClick={() => handleNavClick('residential')}
                          className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors ${
                            activePage === 'residential'
                              ? 'bg-brand-red text-white font-bold'
                              : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                          }`}
                        >
                          <span>→ Residential Services</span>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

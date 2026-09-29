import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, Layers, ShieldCheck, Compass, FileText } from 'lucide-react';

export default function ServiceDetailModal({ service, onClose, onContactClick }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-black/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl my-auto bg-brand-graphite border border-brand-border rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border bg-brand-black/70 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-brand-steel uppercase">
                CAPABILITY // {service.number} // {service.title}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-brand-red text-white transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 md:p-10 overflow-y-auto space-y-8 flex-grow">
            <div>
              <span className="text-brand-red font-mono text-xs tracking-widest uppercase">
                DISCIPLINE {service.number}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-brand-heading tracking-tight mt-1">
                {service.title}
              </h1>
              <p className="mt-2 text-base sm:text-lg text-brand-subtext font-sans">
                {service.subtitle}
              </p>
            </div>

            {/* Visual Hero */}
            {service.heroImage && (
              <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-brand-border">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite via-transparent to-transparent" />
              </div>
            )}

            {/* Overview */}
            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold font-display text-brand-subheading tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-4 bg-brand-red rounded-full" />
                Service Overview & Standard of Care
              </h3>
              <p className="text-sm sm:text-base text-brand-body leading-relaxed font-sans">
                {service.overview}
              </p>
            </div>

            {/* Subdisciplines */}
            {service.subdisciplines && service.subdisciplines.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold font-display text-brand-subheading tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-brand-red rounded-full" />
                  Key Subdisciplines & Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.subdisciplines.map((sub, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-xl bg-brand-black/50 border border-brand-border/70 space-y-1.5"
                    >
                      <h4 className="text-sm sm:text-base font-semibold text-brand-subheading font-display flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                        {sub.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-brand-body font-sans leading-relaxed">
                        {sub.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Deliverables Checklist */}
            {service.deliverables && service.deliverables.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-semibold font-display text-brand-subheading tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-brand-red rounded-full" />
                  Concrete Deliverables Provided
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-brand-black/40 border border-brand-border/60"
                    >
                      <CheckCircle className="w-4 h-4 text-brand-red shrink-0" />
                      <span className="text-sm text-[#A8A8A0] font-sans">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Card */}
            <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 bg-brand-black/40 p-6 rounded-2xl">
              <div>
                <h4 className="text-base font-semibold text-brand-heading font-display">
                  Engage BNS for {service.title}
                </h4>
                <p className="text-xs sm:text-sm text-brand-body font-sans">
                  Receive a customized scope analysis and feasibility review from our executive team.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  if (onContactClick) onContactClick();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-redDark transition-colors flex items-center justify-center gap-2 shrink-0"
              >
                <span>Request Scope Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

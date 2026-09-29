import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, DollarSign, Calendar, Maximize2, ShieldCheck, ArrowRight, Building, CheckCircle2 } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose, onContactClick }) {
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

  if (!project) return null;

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
          className="relative w-full max-w-5xl my-auto bg-brand-graphite border border-brand-border rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border bg-brand-black/70 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span className="font-mono text-xs tracking-widest text-brand-steel uppercase">
                CASE STUDY // {project.category}
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

          {/* Scrollable Content Body */}
          <div className="p-6 md:p-10 overflow-y-auto space-y-8 flex-grow">
            {/* Project Hero Header */}
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-brand-steel mb-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-red" />
                  {project.location}
                </span>
                <span>•</span>
                <span className="text-brand-red font-semibold">{project.status}</span>
                <span>•</span>
                <span>COMPLETION: {project.year}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-white tracking-tight">
                {project.title}
              </h1>
              <p className="mt-2 text-lg text-brand-steel font-sans">
                {project.subtitle}
              </p>
            </div>

            {/* Featured Hero Visual */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-brand-border bg-brand-black">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-graphite/80 via-transparent to-transparent pointer-events-none" />
              <div className="crosshair-corner crosshair-tl" />
              <div className="crosshair-corner crosshair-tr" />
              <div className="crosshair-corner crosshair-bl" />
              <div className="crosshair-corner crosshair-br" />
            </div>

            {/* Project Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-brand-black/60 border border-brand-border text-xs font-mono">
              <div>
                <span className="block text-brand-steel/60 uppercase">CONTRACT VALUE</span>
                <span className="text-base sm:text-lg font-bold text-brand-red">{project.value}</span>
              </div>
              <div>
                <span className="block text-brand-steel/60 uppercase">TOTAL AREA</span>
                <span className="text-base sm:text-lg font-bold text-white">{project.sqft || 'N/A'}</span>
              </div>
              <div>
                <span className="block text-brand-steel/60 uppercase">CLIENT / OWNER</span>
                <span className="text-base sm:text-lg font-bold text-white truncate block">{project.client}</span>
              </div>
              <div>
                <span className="block text-brand-steel/60 uppercase">PROJECT TIMELINE</span>
                <span className="text-base sm:text-lg font-bold text-brand-offwhite">{project.year}</span>
              </div>
            </div>

            {/* Narrative Overview */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold font-display text-white tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-4 bg-brand-red rounded-full" />
                Project Narrative & Engineering Scope
              </h3>
              <p className="text-base sm:text-lg text-brand-offwhite/90 leading-relaxed font-sans">
                {project.overview}
              </p>
            </div>

            {/* Key Engineering Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold font-display text-white tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-brand-red rounded-full" />
                  Key Achievements & Disciplines Delivered
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl bg-brand-black/40 border border-brand-border/60"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                      <span className="text-sm text-brand-steel font-sans leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Images */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold font-display text-white tracking-tight flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-brand-red rounded-full" />
                  Architectural Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {project.gallery.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      className="group relative aspect-[4/3] rounded-xl overflow-hidden border border-brand-border bg-brand-black"
                    >
                      <img
                        src={imgUrl}
                        alt={`${project.title} detail ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Modal CTA */}
            <div className="pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-4 bg-brand-black/40 p-6 rounded-2xl">
              <div>
                <h4 className="text-base font-semibold text-white font-display">
                  Planning a Similar Development?
                </h4>
                <p className="text-xs text-brand-steel">
                  Consult with BNS Managing Partners for preconstruction modeling and constructability review.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  if (onContactClick) onContactClick();
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-redDark transition-colors flex items-center justify-center gap-2"
              >
                <span>Initiate Project Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

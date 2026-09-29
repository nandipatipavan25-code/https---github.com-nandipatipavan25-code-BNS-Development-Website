import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Building2, MapPin, Calendar, Award, Layers, HardHat,
  Compass, Ruler, Shield, Zap
} from 'lucide-react';
import { projectsData } from '../data/projects';
import ScrollReveal from './ScrollReveal';
import PremiumGlassButton from './PremiumGlassButton';

/* ─── Infinite marquee ticker ─── */
function MarqueeTicker({ items, speed = 35, reverse = false, dark = true }) {
  return (
    <div className="relative overflow-hidden w-full" aria-hidden="true">
      <div
        className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 px-6 py-2.5 shrink-0 text-[11px] sm:text-xs font-mono uppercase tracking-[0.18em] ${
              dark ? 'text-white/30' : 'text-black/25'
            }`}
          >
            {item.icon && (
              <item.icon
                className={`w-3.5 h-3.5 shrink-0 ${dark ? 'text-brand-red/60' : 'text-brand-red/40'}`}
              />
            )}
            <span>{item.label}</span>
            <span className={`${dark ? 'text-brand-red/40' : 'text-brand-red/30'}`}>◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const TICKER_TOP = [
  { label: 'Ground-Up Construction', icon: Building2 },
  { label: 'South Florida Operations', icon: MapPin },
  { label: 'Central Texas Operations', icon: MapPin },
  { label: 'Preconstruction Planning', icon: Compass },
  { label: 'Design-Build Delivery', icon: Layers },
  { label: 'Tenant Improvements', icon: Ruler },
  { label: 'CGC 1505391 Licensed', icon: Shield },
  { label: '35+ Years of Excellence', icon: Award },
  { label: '$800M+ Capital Delivered', icon: Zap },
  { label: 'Residential Development', icon: HardHat },
];

const TICKER_BOTTOM = [
  { label: 'Landmark Superstructures', icon: Building2 },
  { label: 'LEED-Conscious Builds', icon: Shield },
  { label: 'Primavera P6 Scheduling', icon: Calendar },
  { label: 'BIM & 3D Clash Detection', icon: Layers },
  { label: 'Miami • Fort Lauderdale • Palm Beach', icon: MapPin },
  { label: 'Austin • Dallas-Fort Worth', icon: MapPin },
  { label: 'Luxury Custom Residences', icon: Award },
  { label: 'Institutional-Grade Quality', icon: HardHat },
  { label: 'Value Engineering Experts', icon: Compass },
  { label: 'Full Structural Fidelity', icon: Ruler },
];

export default function ProjectCarousel({ onSelectProject, onViewAll }) {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const showcaseProjects = projectsData.slice(0, 6);
  const displayProjects = [...showcaseProjects, ...showcaseProjects, ...showcaseProjects];

  /* Auto-scroll */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let rafId;
    let lastTime = performance.now();
    const speed = 0.6;

    const step = (time) => {
      const delta = time - lastTime;
      lastTime = time;
      if (!isHovered && el) {
        el.scrollLeft += speed * (delta / 16.67);
        const singleSetWidth = el.scrollWidth / 3;
        if (el.scrollLeft >= singleSetWidth * 2) el.scrollLeft -= singleSetWidth;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isHovered]);

  const scrollBy = (dir) => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -420 : 420, behavior: 'smooth' });
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#0A0A0A] text-white">

      {/* ── SVG Architectural Blueprint Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src="/images/bg-pattern.svg"
          alt=""
          className="w-full h-full object-cover object-center opacity-[0.055]"
          aria-hidden="true"
        />
        {/* Vignette edges so the SVG fades naturally */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/60" />
      </div>

      {/* ── Red ambient bloom ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none z-0" />

      {/* ══════════════════════════════════════════
          TOP MARQUEE TICKER
      ══════════════════════════════════════════ */}
      <div className="relative z-10 py-2">
        <MarqueeTicker items={TICKER_TOP} speed={40} reverse={false} dark={true} />
      </div>

      {/* ══════════════════════════════════════════
          HEADER
      ══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-8 sm:pb-12">
        <ScrollReveal direction="up" delay={0.05}>
          {/* Kicker */}
          <div className="flex items-center text-[11px] font-mono tracking-[0.22em] uppercase mb-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-px bg-brand-red" />
              <span className="text-brand-red font-bold">PORTFOLIO &amp; TRACK RECORD</span>
            </div>
          </div>

          {/* Title + Nav row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 sm:pb-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-display font-semibold tracking-tight leading-[1.15]">
                <span className="text-[#E6E6E6] block">Experience You Can See</span>
                <span className="text-brand-red font-semibold block">
                  in the Work.
                </span>
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#A8A8A0] leading-relaxed font-sans">
                Our team's experience includes multifamily developments, hotels, condominiums, commercial buildings, automotive facilities, retail projects, aviation facilities, renovations and other complex construction projects. Explore our project portfolio to see the range of work and experience behind BNS Development.
              </p>
            </div>

            <div className="shrink-0">
              <PremiumGlassButton
                onClick={onViewAll}
                size="sm"
                baseColor="#000000"
                glassColor="#ffffff"
                hoverSpeed={0.7}
              >
                VIEW OUR PROJECTS
              </PremiumGlassButton>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ══════════════════════════════════════════
          CARDS ROW
      ══════════════════════════════════════════ */}
      <div
        className="relative z-10 w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar px-4 sm:px-8 lg:px-12 pb-2 select-none"
          style={{ scrollBehavior: 'auto' }}
        >
          {displayProjects.map((project, idx) => (
            <motion.div
              key={`${project.id}-${idx}`}
              onClick={() => onSelectProject(project)}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-[270px] sm:w-[330px] md:w-[380px] flex-shrink-0 cursor-pointer group flex flex-col bg-white/[0.04] border border-white/[0.07] hover:border-brand-red/40 backdrop-blur-sm transition-colors duration-300"
            >
              {/* Top meta row */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-1.5 text-white/40 text-[10px] font-mono uppercase tracking-wider">
                  <MapPin className="w-3 h-3 text-brand-red/60" />
                  <span className="truncate">{project.location}</span>
                </div>
                <div className="flex items-center gap-1 text-white/30 text-[10px] font-mono">
                  <Calendar className="w-3 h-3" />
                  <span>{project.year}</span>
                </div>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none pointer-events-none"
                  loading="lazy"
                />
                {/* Dark scrim on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Category pill */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-brand-red text-white text-[9px] font-mono font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.category}
                </div>

              </div>

              {/* Bottom title & Action Button */}
              <div className="px-4 py-3 sm:py-3.5 flex items-center justify-between gap-3">
                <h3 className="text-sm sm:text-base font-semibold font-display text-white/85 group-hover:text-white transition-colors tracking-tight line-clamp-1 flex-1">
                  {project.title}
                </h3>
                <div className="w-8 h-8 bg-brand-red flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          STATUS BAR
      ══════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono text-white/25 uppercase tracking-widest pb-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
          <span>Drag or scroll to explore · Hover to pause</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <HardHat className="w-3.5 h-3.5 text-brand-red/40" />
          <span>Florida &amp; Texas Landmark Projects</span>
        </div>
      </div>

      {/* ── BOTTOM MARQUEE TICKER ── */}
      <div className="relative z-10 py-2 mt-2">
        <MarqueeTicker items={TICKER_BOTTOM} speed={50} reverse={true} dark={true} />
      </div>

    </section>
  );
}

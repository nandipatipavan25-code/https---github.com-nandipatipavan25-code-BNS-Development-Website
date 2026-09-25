import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';

export default function ProjectCard({ project, onSelect, theme = 'light' }) {
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      onClick={() => onSelect(project)}
      data-cursor="VIEW PROJECT"
      className={`group relative cursor-pointer flex flex-col rounded-2xl overflow-hidden transition-all duration-500 hover-beam-card ${
        isDark
          ? 'bg-brand-graphite border border-brand-border/70 hover:border-brand-red/60 shadow-xl'
          : 'bg-white border border-black/10 hover:border-brand-red/40 shadow-sm hover:shadow-xl'
      }`}
    >
      {/* Image Container with Zoom & Architectural Mask */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:brightness-105"
          loading="lazy"
        />

        {/* Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono tracking-wider text-white uppercase">
            {project.category}
          </span>
          <span
            className={`px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase font-semibold backdrop-blur-md ${
              project.status === 'Active Projects'
                ? 'bg-brand-red/90 text-white shadow-[0_0_12px_rgba(215,25,32,0.5)]'
                : project.status === 'Upcoming Projects'
                ? 'bg-amber-500/80 text-white'
                : 'bg-white/20 text-white border border-white/20'
            }`}
          >
            {project.status.replace(' Projects', '')}
          </span>
        </div>

        {/* Floating Quick Action Arrow */}
        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg shadow-brand-red/40">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-500 mb-2">
            <MapPin className="w-3.5 h-3.5 text-brand-red" />
            <span>{project.location}</span>
          </div>

          <h3 className={`text-xl sm:text-2xl font-semibold font-display tracking-tight transition-colors duration-300 ${
            isDark ? 'text-white group-hover:text-brand-red' : 'text-neutral-900 group-hover:text-brand-red'
          }`}>
            {project.title}
          </h3>

          <p className="mt-1 text-sm text-neutral-500 line-clamp-1">
            {project.subtitle}
          </p>
        </div>

        {/* Technical Specs Strip */}
        <div className={`mt-6 pt-4 border-t grid grid-cols-2 gap-4 text-xs font-mono ${
          isDark ? 'border-brand-border/60' : 'border-black/5'
        }`}>
          <div>
            <span className="block text-[10px] text-neutral-400 uppercase">DELIVERY / TIMELINE</span>
            <span className={`font-semibold ${isDark ? 'text-white' : 'text-neutral-900'}`}>{project.year}</span>
          </div>
          <div>
            <span className="block text-[10px] text-neutral-400 uppercase">VALUATION / SCOPE</span>
            <span className="font-semibold text-brand-red">{project.value}</span>
          </div>
        </div>
      </div>

      {/* Red Laser Accent on Hover */}
      <div className="h-[2px] w-0 bg-brand-red group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

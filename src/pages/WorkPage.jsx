import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, MapPin, Maximize2, Building2 } from 'lucide-react';
import SectionHeading, { ConstructionScaleSVG } from '../components/SectionHeading';
import ScrollWordReveal from '../components/ScrollWordReveal';
import EyeFollowButton from '../components/EyeFollowButton';
import HouseCTA from '../components/HouseCTA';
import { projectsData } from '../data/projects';

export default function WorkPage({ setSelectedProject, setActivePage }) {
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const statusOptions = ['All', 'Completed Projects', 'Active Projects', 'Upcoming Projects'];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((p) => {
      const matchStatus = statusFilter === 'All' || p.status === statusFilter;
      const matchQuery =
        searchQuery === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.scope && p.scope.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchStatus && matchQuery;
    });
  }, [statusFilter, searchQuery]);

  const handleOpenDetail = (project) => {
    setSelectedProject(project);
    setActivePage('work-detail');
    const targetUrl = `/work-detail.html?id=${project.id}`;
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({ page: 'work-detail', id: project.id }, '', targetUrl);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative pt-24 sm:pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================
            HERO / HEADING
            ======================================================== */}
        <section className="mb-10">
          <SectionHeading
            tag="PORTFOLIO &amp; ARCHITECTURAL ARCHIVE"
            title="Our Work &amp; Landmark Builds."
            highlight="35+ Years Delivered."
            description="Explore our curated catalogue of completed, active, and upcoming developments across Florida and Central Texas. Over $800M in delivered capital volume built with uncompromising structural discipline."
            theme="dark"
            scaleColor="red"
          />

          {/* Interactive Filter Matrix in Dark Glassmorphism */}
          <div className="p-5 sm:p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl space-y-4">
            {/* Top Bar: Search and Status Tabs */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Status Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                {statusOptions.map((st) => {
                  const isActive = statusFilter === st;
                  return (
                    <button
                      key={st}
                      onClick={() => setStatusFilter(st)}
                      className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                        isActive
                          ? 'bg-brand-red text-white font-bold shadow-md shadow-brand-red/30'
                          : 'bg-white/[0.04] text-neutral-400 hover:text-white border border-white/10'
                      }`}
                    >
                      {st === 'All' ? 'All Projects' : st}
                    </button>
                  );
                })}
              </div>

              {/* Search Box */}
              <div className="relative w-full lg:w-72">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search project, scope, city..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white placeholder-neutral-500 focus:outline-none focus:border-brand-red transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            PROJECTS GRID CATALOGUE (Direct Navigation, No Popup Modal)
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => handleOpenDetail(project)}
                className="group cursor-pointer rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-xl transition-all duration-500 flex flex-col justify-between hover:shadow-2xl hover:shadow-brand-red/10 hover:-translate-y-1 hover-beam-card"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                    loading="lazy"
                  />
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E12] via-transparent to-black/30" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono uppercase tracking-wider text-brand-red font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom Location */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs font-mono text-brand-body">
                    <MapPin className="w-3.5 h-3.5 text-brand-red" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold font-display text-brand-subheading group-hover:text-brand-red transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-brand-body font-sans line-clamp-2 leading-relaxed">
                      {project.overview}
                    </p>
                  </div>

                  {/* Metrics strip */}
                  <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] font-mono text-brand-mutedText">
                    <div>
                      <span className="text-[10px] text-white/60 uppercase block">AREA</span>
                      <span className="text-brand-subheading font-semibold">{project.sqft}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/60 uppercase block">BUDGET</span>
                      <span className="text-brand-red font-semibold">{project.value}</span>
                    </div>
                  </div>

                  {/* View Details Link */}
                  <div className="pt-2 flex items-center justify-between text-xs font-mono uppercase tracking-wider font-bold text-brand-subheading group-hover:text-brand-red transition-colors">
                    <span>View Specifications</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 p-8 rounded-3xl bg-white/[0.02] border border-white/10">
            <Building2 className="w-12 h-12 text-neutral-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No Projects Found</h3>
            <p className="text-xs text-neutral-400 mb-4">Try clearing your search query or changing filters.</p>
            <button
              onClick={() => {
                setStatusFilter('All');
                setSectorFilter('All');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-full bg-brand-red text-white text-xs font-mono uppercase font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* ========================================================
            CALL TO ACTION (Consistent Video CTA)
            ======================================================== */}
        <HouseCTA
          onStartProject={() => setActivePage('contact')}
        />
      </div>
    </div>
  );
}

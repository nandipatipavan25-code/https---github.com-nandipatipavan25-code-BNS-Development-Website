import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass, Layers, Home, Maximize, Building2, CheckCircle2,
  ArrowRight, ArrowUpRight, ShieldCheck, Clock, FileText,
  Search, SlidersHorizontal, CheckSquare, Sparkles, HardHat,
  Phone, Mail, MapPin, Eye, Award
} from 'lucide-react';
import SectionHeading, { ConstructionScaleSVG } from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import ScrollWordReveal from '../components/ScrollWordReveal';
import PremiumGlassButton from '../components/PremiumGlassButton';
import HouseCTA from '../components/HouseCTA';
import { servicesData } from '../data/services';

export default function ServicesPage({ setActivePage, setSelectedService }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Icon mapping
  const getServiceIcon = (iconName, className = "w-5 h-5") => {
    switch (iconName) {
      case 'Compass': return <Compass className={className} />;
      case 'Layers': return <Layers className={className} />;
      case 'Home': return <Home className={className} />;
      case 'Maximize': return <Maximize className={className} />;
      case 'Building2': return <Building2 className={className} />;
      case 'HardHat': return <HardHat className={className} />;
      default: return <Building2 className={className} />;
    }
  };

  // Categories for filter tabs
  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'predevelopment', label: 'Pre Development Services' },
    { id: 'design-build', label: 'Design-Build' },
    { id: 'residential', label: 'Residential' },
    { id: 'tenant-improvements', label: 'Commercial' },
    { id: 'ground-up', label: 'Ground Up' },
  ];

  // 5-step delivery standard
  const deliveryLifecycle = [
    {
      step: '01',
      phase: 'FEASIBILITY & CONSTRUCTABILITY',
      title: 'Constructability & Cost Modeling',
      desc: 'Initial site evaluation, zoning constraints, early parametric budget modeling, and identifying risk factors before capital commitments.',
    },
    {
      step: '02',
      phase: 'PRE DEVELOPMENT & GMP',
      title: 'GMP Formulation & Buyout Strategy',
      desc: 'Comprehensive trade scope packaging, Primavera P6 baseline scheduling, value engineering, and establishing a Guaranteed Maximum Price.',
    },
    {
      step: '03',
      phase: 'PROCUREMENT & PERMITTING',
      title: 'Permitting & Trade Vetting',
      desc: 'Engaging pre-qualified trade partners, long-lead equipment buyout, municipal agency coordination, and expedited permit approvals.',
    },
    {
      step: '04',
      phase: 'FIELD EXECUTION',
      title: 'Active Construction & Safety Governance',
      desc: 'Mobilization, structural shell erection, daily QA/QC inspections, and zero-compromise OSHA-certified field safety leadership.',
    },
    {
      step: '05',
      phase: 'COMMISSIONING & HANDOVER',
      title: 'Commissioning & Turnkey Handover',
      desc: 'System testing, life-safety certification, punch list zeroing, Certificate of Occupancy issuance, and complete closeout documentation.',
    },
  ];

  // 3 Pillars of BNS delivery
  const deliveryPillars = [
    {
      title: 'Zero-Compromise Safety',
      desc: 'OSHA-30 certified superintendents on every jobsite with daily safety briefings and strict risk management protocols.',
      icon: ShieldCheck,
    },
    {
      title: 'Transparent Guaranteed Pricing',
      desc: 'Open-book cost accounting and proactive value engineering that protects client capital from unexpected change orders.',
      icon: CheckSquare,
    },
    {
      title: 'Direct Senior Leadership',
      desc: 'Our principals stay personally involved in field coordination, resolving potential bottlenecks in hours rather than weeks.',
      icon: Award,
    },
  ];

  // Filtered services
  const filteredServices = useMemo(() => {
    return servicesData.filter((svc) => {
      const matchesCategory =
        selectedCategory === 'all' || svc.id === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        svc.title.toLowerCase().includes(query) ||
        svc.subtitle.toLowerCase().includes(query) ||
        svc.overview.toLowerCase().includes(query) ||
        svc.subdisciplines.some(
          (sub) =>
            sub.name.toLowerCase().includes(query) ||
            sub.desc.toLowerCase().includes(query)
        ) ||
        svc.deliverables.some((d) => d.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="relative pt-24 sm:pt-32 pb-24 overflow-hidden bg-transparent text-white">
      {/* Background Architectural Ambient Lighting */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-28">

        {/* ========================================================
            1. CATALOGUE HERO: Brand Positioning & Overview
            ======================================================== */}
        <section className="space-y-8">
          <ScrollReveal direction="up" delay={0.05}>
            <div className="max-w-4xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/70 border border-brand-red/60 backdrop-blur-md text-[10px] sm:text-xs font-mono text-brand-red font-semibold uppercase tracking-wider shadow-sm">
                <ConstructionScaleSVG color="red" />
                <span>FL CGC 1505391</span>
                <span className="text-white/30">•</span>
                <span>COMPREHENSIVE SERVICES CATALOGUE</span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[42px] font-display font-semibold tracking-tight leading-tight sm:leading-snug md:leading-normal lg:leading-[42px] text-brand-heading">
                Precision Disciplines.<br />
                <span className="text-brand-red">
                  Built for Complexity.
                </span>
              </h1>

              <div className="pt-2 max-w-2xl">
                <ScrollWordReveal
                  text="From early feasibility and Pre Development cost modeling through complex ground-up superstructures and commercial tenant improvements, BNS Development brings single-source accountability and experienced builder leadership to every project."
                  colorRevealed="#A8A8A0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  className="text-sm sm:text-base text-brand-subtext font-sans leading-relaxed"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Quick Metrics Ribbon */}
          <ScrollReveal direction="up" delay={0.12}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl">
              <div className="space-y-1 p-3">
                <div className="flex items-center gap-2 text-brand-red text-xs font-mono uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Leadership</span>
                </div>
                <div className="text-2xl sm:text-3xl font-display font-semibold text-[#D4D4D0]">35+ Years</div>
                <p className="text-xs text-[#A8A8A0]">Combined building mastery</p>
              </div>

              <div className="space-y-1 p-3 border-l border-white/10">
                <div className="flex items-center gap-2 text-brand-red text-xs font-mono uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Licensing</span>
                </div>
                <div className="text-2xl sm:text-3xl font-display font-semibold text-[#D4D4D0]">FL &amp; TX</div>
                <p className="text-xs text-[#A8A8A0]">General Contractor CGC 1505391</p>
              </div>

              <div className="space-y-1 p-3 border-l-0 md:border-l border-white/10">
                <div className="flex items-center gap-2 text-brand-red text-xs font-mono uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Accountability</span>
                </div>
                <div className="text-2xl sm:text-3xl font-display font-semibold text-[#D4D4D0]">Single-Source</div>
                <p className="text-xs text-[#A8A8A0]">Unified design &amp; build delivery</p>
              </div>

              <div className="space-y-1 p-3 border-l border-white/10">
                <div className="flex items-center gap-2 text-brand-red text-xs font-mono uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  <span>Standards</span>
                </div>
                <div className="text-2xl sm:text-3xl font-display font-semibold text-[#D4D4D0]">100%</div>
                <p className="text-xs text-[#A8A8A0]">Safety &amp; QA/QC governance</p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ========================================================
            2. INTERACTIVE CATALOGUE FILTER & SCOPE SEARCH
            ======================================================== */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
            {/* Filter Pill Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-brand-red text-white font-bold shadow-lg shadow-brand-red/30'
                        : 'bg-white/[0.04] text-neutral-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Live Search Scope Input */}
            <div className="relative min-w-[240px] sm:min-w-[280px]">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search scopes, deliverables, GMP..."
                className="w-full bg-white/[0.04] border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-brand-red transition-colors font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* ========================================================
              3. CATALOGUE ITEMS: In-Depth Service Capabilities
              ======================================================== */}
          {filteredServices.length === 0 ? (
            <div className="py-16 text-center space-y-4 rounded-3xl bg-white/[0.02] border border-white/10 p-8">
              <Search className="w-10 h-10 text-neutral-500 mx-auto" />
              <h3 className="text-lg font-semibold font-display text-white">No Matching Capabilities Found</h3>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
                No services matched your search term "{searchQuery}". Try searching for terms like "GMP", "scheduling", "permits", or reset filters.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="px-5 py-2 rounded-full bg-brand-red text-white text-xs font-bold uppercase tracking-wider"
              >
                Reset Catalogue Filters
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              {filteredServices.map((svc, idx) => (
                <ScrollReveal key={svc.id} delay={idx * 0.06}>
                  <div className="p-6 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-2xl transition-all duration-500 group hover-beam-card">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                      {/* Left: Image & Quick Meta */}
                      <div className="lg:col-span-5 space-y-5">
                        <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-lg">
                          <img
                            src={svc.heroImage}
                            alt={svc.title}
                            className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white font-semibold uppercase flex items-center gap-1.5">
                            <ConstructionScaleSVG color="white" />
                            <span>DISCIPLINE {svc.number}</span>
                          </div>

                          <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/80 backdrop-blur-md border border-brand-red/50 text-brand-red flex items-center justify-center shadow-lg">
                            {getServiceIcon(svc.icon, "w-4 h-4")}
                          </div>

                          <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-neutral-300">
                            <span className="text-brand-red font-semibold">CORE SCOPE: </span>
                            {svc.subtitle}
                          </div>
                        </div>

                        {/* Concrete Deliverables Box */}
                        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                          <div className="flex items-center justify-between text-xs font-mono text-brand-red font-semibold uppercase tracking-wider">
                            <span>// KEY DELIVERABLES</span>
                            <span className="text-[10px] text-neutral-500">AUDITED OUTPUTS</span>
                          </div>
                          <ul className="space-y-2">
                            {svc.deliverables.map((item, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2.5 text-xs text-[#A8A8A0] font-sans">
                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right: Narrative, Subdisciplines & Action Triggers */}
                      <div className="lg:col-span-7 space-y-6 flex flex-col justify-between h-full">
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-brand-red/10 border border-brand-red/40 flex items-center justify-center text-brand-red shrink-0">
                              {getServiceIcon(svc.icon, "w-4 h-4")}
                            </div>
                            <div>
                              <span className="text-[11px] font-mono text-brand-red uppercase tracking-widest font-bold">
                                SCOPE DISCIPLINE {svc.number}
                              </span>
                              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-brand-heading">
                                {svc.title}
                              </h2>
                            </div>
                          </div>

                          <p className="text-xs sm:text-sm text-brand-body leading-relaxed font-sans">
                            {svc.overview}
                          </p>

                          {/* Subdisciplines Breakdown */}
                          <div className="pt-2 space-y-3">
                            <h4 className="text-xs font-mono tracking-widest text-brand-mutedText uppercase font-semibold flex items-center gap-2">
                              <span>// DETAILED SUBDISCIPLINES</span>
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                            </h4>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {svc.subdisciplines.map((sub, sIdx) => (
                                <div
                                  key={sIdx}
                                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors space-y-1"
                                >
                                  <div className="text-xs font-bold text-brand-subheading flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
                                    <span>{sub.name}</span>
                                  </div>
                                  <p className="text-[11px] text-brand-body font-sans leading-relaxed pl-3.5">
                                    {sub.desc}
                                  </p>
                                </div>
                              ))}
                            </div>

                            {/* Detailed Service Page Link */}
                            {(svc.id === 'design-build' || svc.id === 'predevelopment' || svc.id === 'preconstruction' || svc.id === 'residential') && (
                              <div className="pt-4 flex justify-end">
                                <button
                                  onClick={() => setActivePage(svc.id === 'preconstruction' ? 'predevelopment' : svc.id)}
                                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.04] hover:bg-brand-red/15 border border-white/10 hover:border-brand-red/40 text-xs font-mono text-white transition-all cursor-pointer group shadow-lg"
                                >
                                  <span>View Detailed Service Page</span>
                                  <ArrowRight className="w-3.5 h-3.5 text-brand-red group-hover:translate-x-1 transition-transform" />
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </section>

        {/* ========================================================
            4. METHODOLOGY: The 5-Step Delivery Lifecycle
            ======================================================== */}
        <section className="space-y-10 pt-16">
          <ScrollReveal direction="up" delay={0.06}>
            <SectionHeading
              tag="PROJECT DELIVERY METHODOLOGY"
              title="The 5-Step"
              highlight="Delivery Lifecycle."
              description="How BNS Development orchestrates complex capital projects from conception through Certificate of Occupancy with clockwork predictability."
              theme="dark"
              scaleColor="red"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {deliveryLifecycle.map((item, idx) => (
              <ScrollReveal key={item.step} delay={idx * 0.07}>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 transition-all duration-300 flex flex-col justify-between h-full group hover:-translate-y-1 hover-beam-card">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-mono font-extrabold text-brand-red">
                        {item.step}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red group-hover:scale-150 transition-transform" />
                    </div>
                    <div className="text-[10px] font-mono text-brand-mutedText uppercase tracking-widest">
                      {item.phase}
                    </div>
                    <h4 className="text-base font-semibold font-display text-brand-subheading group-hover:text-brand-red transition-colors leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-brand-body font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-white/10 text-[10px] font-mono text-brand-mutedText uppercase">
                    PHASE {item.step} // AUDITED
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ========================================================
            5. THE BNS COMMITMENT: Quality, Safety & Transparency
            ======================================================== */}
        <section className="space-y-10 pt-16">
          <ScrollReveal direction="up" delay={0.06}>
            <SectionHeading
              tag="EXECUTION STANDARDS"
              title="Built on"
              highlight="Uncompromising Standards."
              description="Three foundational principles guide every project we accept, ensuring budget certainty, field safety and transparent communication."
              theme="dark"
              scaleColor="red"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliveryPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 0.08}>
                  <div className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-xl space-y-4 h-full flex flex-col justify-between group hover:-translate-y-1 hover-beam-card">
                    <div className="space-y-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/40 flex items-center justify-center text-brand-red">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-semibold font-display text-brand-subheading">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-brand-body font-sans leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-500">
                      <span>BNS GUARANTEE</span>
                      <span className="text-brand-red font-semibold">ZERO COMPROMISE</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

      {/* ========================================================
          6. ARCHITECTURAL CTA SECTION (Consistent Video CTA)
          ======================================================== */}
      <HouseCTA
        onStartProject={() => setActivePage('contact')}
      />

      </div>
    </div>
  );
}

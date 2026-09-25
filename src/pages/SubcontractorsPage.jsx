import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  Globe,
  ExternalLink,
  Search,
  MapPin,
  HardHat,
  ShieldCheck,
  CheckCircle2,
  Building2,
  Wrench,
  Layers,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { ConstructionScaleSVG } from '../components/SectionHeading';
import PremiumGlassButton from '../components/PremiumGlassButton';

// Premier vetted subcontractors directory data
const SUBCONTRACTORS = [
  {
    id: 'apex-concrete',
    name: 'Apex Structural Concrete',
    shortName: 'ASC',
    trade: 'Structural Concrete & Post-Tensioned Slabs',
    category: 'Structural & Civil',
    region: 'Florida & Texas',
    phone: '(305) 842-9100',
    email: 'estimating@apexstructuralconcrete.com',
    website: 'https://apexstructuralconcrete.com',
    verified: true,
    accent: '#D71920',
    specialties: ['Post-Tension Slabs', 'Cast-In-Place Walls', 'Foundation Pours'],
  },
  {
    id: 'titan-civil',
    name: 'Titan Civil & Earthworks',
    shortName: 'TCE',
    trade: 'Site Civil, Grading & Deep Excavation',
    category: 'Structural & Civil',
    region: 'Central Texas & Dallas',
    phone: '(512) 693-4410',
    email: 'bids@titancivilearth.com',
    website: 'https://titancivilearth.com',
    verified: true,
    accent: '#E03131',
    specialties: ['Mass Excavation', 'Site Utilities', 'Laser Grade Profiling'],
  },
  {
    id: 'vanguard-steel',
    name: 'Vanguard Steel Erectors',
    shortName: 'VSE',
    trade: 'Structural Steel & Miscellaneous Metals',
    category: 'Structural & Civil',
    region: 'Florida & Texas',
    phone: '(813) 472-8830',
    email: 'commercial@vanguardsteel.com',
    website: 'https://vanguardsteelerectors.com',
    verified: true,
    accent: '#D71920',
    specialties: ['Structural Frames', 'Architectural Trusses', 'Stair Towers'],
  },
  {
    id: 'horizon-glazing',
    name: 'Horizon Architectural Glazing',
    shortName: 'HAG',
    trade: 'Curtainwall, Storefronts & Impact Glazing',
    category: 'Envelope & Glazing',
    region: 'South Florida & Tampa',
    phone: '(786) 524-1180',
    email: 'contracts@horizonglazing.com',
    website: 'https://horizonglazing.com',
    verified: true,
    accent: '#C92A2A',
    specialties: ['Unitized Curtainwall', 'Miami-Dade NOA Systems', 'Storefronts'],
  },
  {
    id: 'voltcore-power',
    name: 'Voltcore Power & Systems',
    shortName: 'VPS',
    trade: 'Commercial Electrical & Low-Voltage BIM',
    category: 'Mechanical & MEP',
    region: 'Florida & Texas',
    phone: '(407) 318-7200',
    email: 'projects@voltcorepower.com',
    website: 'https://voltcorepower.com',
    verified: true,
    accent: '#D71920',
    specialties: ['Switchgear Integration', '3D BIM Rough-In', 'Life Safety Gen'],
  },
  {
    id: 'patriot-mechanical',
    name: 'Patriot Mechanical & HVAC',
    shortName: 'PMH',
    trade: 'Heavy Commercial HVAC & Hydronic Piping',
    category: 'Mechanical & MEP',
    region: 'Central Florida & Austin',
    phone: '(904) 580-3320',
    email: 'operations@patriotmechanical.com',
    website: 'https://patriotmechanicalhvac.com',
    verified: true,
    accent: '#E03131',
    specialties: ['VRF Central Systems', 'Chilled Water Loops', 'Rooftop AHUs'],
  },
  {
    id: 'metro-plumbing',
    name: 'Metro Commercial Plumbing',
    shortName: 'MCP',
    trade: 'Civil Underground & High-Rise Domestic Plumbing',
    category: 'Mechanical & MEP',
    region: 'Florida & Texas',
    phone: '(214) 739-9050',
    email: 'bidding@metroplumbingcorp.com',
    website: 'https://metroplumbingcorp.com',
    verified: true,
    accent: '#D71920',
    specialties: ['Underground Mains', 'Booster Stations', 'Multi-Floor Sanitary'],
  },
  {
    id: 'coastal-framing',
    name: 'Coastal Framing & Acoustics',
    shortName: 'CFA',
    trade: 'Heavy Gauge Metal Framing & Drywall Systems',
    category: 'Interior & Finishes',
    region: 'South & Central Florida',
    phone: '(305) 677-2240',
    email: 'info@coastalframingacoustics.com',
    website: 'https://coastalframingacoustics.com',
    verified: true,
    accent: '#C92A2A',
    specialties: ['Structural Light Gauge', 'Level-5 Finish', 'Acoustic Ceilings'],
  },
  {
    id: 'summit-envelope',
    name: 'Summit Building Envelope',
    shortName: 'SBE',
    trade: 'Commercial TPO Roofing & Waterproofing',
    category: 'Envelope & Glazing',
    region: 'Texas & Florida',
    phone: '(512) 840-1920',
    email: 'commercial@summitenvelope.com',
    website: 'https://summitenvelope.com',
    verified: true,
    accent: '#D71920',
    specialties: ['TPO/EPDM Membranes', 'Vapor Barriers', 'Terrace Decks'],
  },
  {
    id: 'shield-fire',
    name: 'Shield Fire Protection',
    shortName: 'SFP',
    trade: 'Commercial Sprinkler Networks & Fire Safety',
    category: 'Mechanical & MEP',
    region: 'Florida & Texas',
    phone: '(813) 902-6110',
    email: 'dispatch@shieldfireprotection.com',
    website: 'https://shieldfireprotection.com',
    verified: true,
    accent: '#E03131',
    specialties: ['ESFR Systems', 'Pre-Action Wet/Dry', 'Fire Pump Mains'],
  },
  {
    id: 'lonestar-masonry',
    name: 'Lone Star Architectural Masonry',
    shortName: 'LSM',
    trade: 'Structural CMU, Architectural Stone & Brickwork',
    category: 'Structural & Civil',
    region: 'Texas Operations',
    phone: '(214) 862-4400',
    email: 'estimating@lonestarmasonry.com',
    website: 'https://lonestarmasonry.com',
    verified: true,
    accent: '#D71920',
    specialties: ['Engineered CMU', 'Texas Native Limestone', 'Cast Stone Accents'],
  },
  {
    id: 'precision-finishes',
    name: 'Precision Architectural Finishes',
    shortName: 'PAF',
    trade: 'Large-Format Porcelain, Terrazzo & Hard Surfaces',
    category: 'Interior & Finishes',
    region: 'Florida & Texas',
    phone: '(786) 410-8870',
    email: 'projects@precisionfinishes.com',
    website: 'https://precisionfinishes.com',
    verified: true,
    accent: '#C92A2A',
    specialties: ['Poured Terrazzo', 'Large-Format Slabs', 'Epoxy Resinous'],
  },
];

const CATEGORIES = [
  'All Trades',
  'Structural & Civil',
  'Envelope & Glazing',
  'Mechanical & MEP',
  'Interior & Finishes',
];

export default function SubcontractorsPage({ setActivePage }) {
  const [selectedCategory, setSelectedCategory] = useState('All Trades');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtered subcontractors
  const filteredSubcontractors = useMemo(() => {
    return SUBCONTRACTORS.filter((sub) => {
      const matchesCategory =
        selectedCategory === 'All Trades' || sub.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        sub.name.toLowerCase().includes(q) ||
        sub.trade.toLowerCase().includes(q) ||
        sub.region.toLowerCase().includes(q) ||
        sub.specialties.some((s) => s.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="relative pt-24 sm:pt-28 pb-24 overflow-hidden bg-transparent text-[#E6E6E6] min-h-screen">
      {/* Subtle Architectural Ambient Red Laser Sweep */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-brand-red/[0.04] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-40 w-96 h-96 rounded-full bg-brand-red/[0.04] blur-[150px] pointer-events-none" />

      {/* ========================================================
          1. CINEMATIC HERO SECTION
          ======================================================== */}
      <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl">
          {/* Hero Image: Professional construction site & structural engineering */}
          <div className="relative h-[340px] sm:h-[400px] lg:h-[440px] w-full overflow-hidden">
            <img
              src="/images/ground-up.jpg"
              alt="BNS Construction Site Structural Engineering"
              className="w-full h-full object-cover select-none brightness-75 contrast-110 opacity-80 scale-105 transition-transform duration-1000"
            />
            {/* Dark Dramatic Architectural Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080A]/90 via-[#07080A]/40 to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07080A]/90 via-transparent to-[#07080A]/60" />

            {/* Subtle Blueprint Grid Accent */}
            <div className="absolute inset-0 blueprint-grid-dark opacity-30 pointer-events-none" />

            {/* Hero Content Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 sm:p-10 lg:p-14 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-3 sm:space-y-4"
              >
                {/* Technical Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 border border-brand-red/60 backdrop-blur-md text-[10px] sm:text-xs font-mono text-brand-red font-semibold uppercase tracking-wider shadow-sm">
                  <ConstructionScaleSVG color="red" size={16} />
                  <span>TRUSTED TRADE PARTNERS // FLORIDA &amp; TEXAS</span>
                </div>

                {/* Main Heading: Our Subcontractors in GT Super font */}
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-display font-semibold text-brand-heading uppercase tracking-[0.03em] leading-[1.12]">
                  Our <span className="text-brand-red">Subcontractors</span>
                </h1>

                {/* Supporting Text in Manrope #A8A8A0 */}
                <p className="text-sm sm:text-base lg:text-lg text-[#A8A8A0] font-sans leading-relaxed max-w-2xl">
                  A trusted network of premier specialty trade contractors, structural engineers, and craft specialists powering BNS commercial, multifamily, and ground-up builds.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Sub-Hero Ribbon: Key Trade Standards */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-black/60 backdrop-blur-md border-t border-white/10 font-mono text-xs">
            <div className="p-4 sm:p-5 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse shrink-0" />
              <div>
                <span className="block text-brand-heading font-semibold">Prompt Net-30</span>
                <span className="text-[10px] text-white/60 uppercase">Payment Discipline</span>
              </div>
            </div>
            <div className="p-4 sm:p-5 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
              <div>
                <span className="block text-brand-heading font-semibold">OSHA-30 Verified</span>
                <span className="text-[10px] text-white/60 uppercase">Strict Site Safety</span>
              </div>
            </div>
            <div className="p-4 sm:p-5 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
              <div>
                <span className="block text-brand-heading font-semibold">Primavera P6</span>
                <span className="text-[10px] text-white/60 uppercase">Coordinated Flow</span>
              </div>
            </div>
            <div className="p-4 sm:p-5 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
              <div>
                <span className="block text-brand-heading font-semibold">Vetted Trade Network</span>
                <span className="text-[10px] text-white/60 uppercase">Florida &amp; Texas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. FILTER & SEARCH CONTROL BAR
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Trade Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-brand-red text-white font-bold shadow-md shadow-brand-red/30'
                      : 'bg-white/[0.04] text-neutral-400 hover:text-brand-heading hover:bg-white/[0.08] border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search company, trade, or region..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-brand-heading placeholder-neutral-500 focus:outline-none focus:border-brand-red transition-colors font-sans"
            />
          </div>
        </div>

        {/* Directory Count Tag */}
        <div className="flex items-center justify-between mt-3 px-2 font-mono text-xs text-brand-mutedText">
          <span>
            SHOWING <strong className="text-brand-heading font-semibold">{filteredSubcontractors.length}</strong> VERIFIED TRADE PARTNERS
          </span>
          <span className="hidden sm:inline">ALL LISTINGS ACTIVE &bull; NO INTERMEDIARY FEES</span>
        </div>
      </section>

      {/* ========================================================
          3. SUBCONTRACTORS GRID LISTING (Clean, Premium Cards)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        {filteredSubcontractors.length === 0 ? (
          <div className="py-20 text-center rounded-3xl bg-white/[0.02] border border-white/10 p-8 space-y-4">
            <HardHat className="w-12 h-12 text-brand-red/50 mx-auto" />
            <h3 className="text-xl font-semibold font-display text-brand-heading uppercase">
              No Trade Partners Found
            </h3>
            <p className="text-sm text-brand-body max-w-md mx-auto font-sans">
              No subcontractors match your active filter. Clear your search or filter to view the complete trade directory.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All Trades');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-full bg-white/[0.06] border border-white/15 text-xs font-mono uppercase tracking-wider text-brand-heading hover:bg-brand-red hover:border-brand-red transition-all cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredSubcontractors.map((sub, idx) => (
                <motion.div
                  key={sub.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/50 backdrop-blur-xl shadow-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover-beam-card group hover:-translate-y-1"
                >
                  <div className="space-y-5">
                    {/* Top Header: Logo Emblem + Region Badge */}
                    <div className="flex items-center justify-between gap-3">
                      {/* Stylized Architectural Company Logo Badge */}
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-black/80 border border-white/15 flex items-center justify-center text-brand-red shadow-inner group-hover:border-brand-red/60 group-hover:bg-brand-red/10 group-hover:scale-105 transition-all duration-300 relative overflow-hidden shrink-0">
                        {/* Inner Blueprint Hash Marks */}
                        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white to-transparent pointer-events-none" />
                        <div className="text-center font-mono font-black text-sm tracking-wider">
                          <span className="text-brand-heading group-hover:text-white transition-colors">{sub.shortName}</span>
                        </div>
                        <span className="absolute bottom-1 right-1 w-1.5 h-1.5 rounded-full bg-brand-red" />
                      </div>

                      {/* Region Badge */}
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-brand-subheading shrink-0">
                        {sub.region}
                      </span>
                    </div>

                    {/* Company Name (GT Super font, off-white) */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold font-display text-brand-heading group-hover:text-brand-red transition-colors leading-tight">
                        {sub.name}
                      </h3>
                      <p className="mt-1.5 text-xs text-[#A8A8A0] font-sans leading-relaxed">
                        {sub.trade}
                      </p>
                    </div>

                    {/* Specialty Scope Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {sub.specialties.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5 text-neutral-400 group-hover:text-brand-subheading transition-colors"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Details Strip (Number, Website, Email) */}
                  <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5 text-xs font-mono">
                    {/* Phone Number */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-[#A8A8A0]/70 uppercase flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
                        <span>PHONE:</span>
                      </span>
                      <a
                        href={`tel:${sub.phone.replace(/[^0-9]/g, '')}`}
                        className="text-[#A8A8A0] hover:text-brand-red font-medium transition-colors"
                      >
                        {sub.phone}
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-[#A8A8A0]/70 uppercase flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-brand-red shrink-0" />
                        <span>EMAIL:</span>
                      </span>
                      <a
                        href={`mailto:${sub.email}`}
                        className="text-[#A8A8A0] hover:text-brand-red transition-colors truncate max-w-[190px] text-right"
                        title={sub.email}
                      >
                        {sub.email}
                      </a>
                    </div>

                    {/* Website */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[11px] text-[#A8A8A0]/70 uppercase flex items-center gap-2">
                        <Globe className="w-3.5 h-3.5 text-brand-red shrink-0" />
                        <span>WEBSITE:</span>
                      </span>
                      <a
                        href={sub.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#A8A8A0] hover:text-brand-red font-medium transition-colors group/link"
                      >
                        <span>{sub.website.replace('https://', '')}</span>
                        <ArrowUpRight className="w-3 h-3 text-[#A8A8A0]/60 group-hover/link:text-brand-red transition-colors" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* ========================================================
          4. TRADE PREQUALIFICATION & PARTNERSHIP CTA BAR
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.03] border border-white/15 backdrop-blur-2xl shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Red Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-red/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red font-mono text-[10px] uppercase tracking-wider">
                <ConstructionScaleSVG color="red" size={14} />
                <span>TRADE ONBOARDING &bull; FLORIDA &amp; TEXAS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-brand-heading uppercase leading-tight">
                Want to Join the BNS Trade Network?
              </h3>
              <p className="text-sm text-[#A8A8A0] font-sans leading-relaxed">
                We are actively bidding and awarding packages across Central Texas, Dallas, Tampa, and South Florida. Reliable pay applications, pristine jobsites, and collaborative superintendents guaranteed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <PremiumGlassButton
                onClick={() => {
                  if (setActivePage) setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                size="md"
              >
                INITIATE TRADE PREQUAL
              </PremiumGlassButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2, Building, Sparkles, Layers, Home, Car, Store, Plane,
  HardHat, Shield, Compass, MapPin, Users, CheckCircle2,
  Target, ClipboardList, CheckSquare, Briefcase, Handshake, Eye
} from 'lucide-react';
import SectionHeading, { ConstructionScaleSVG } from '../components/SectionHeading';
import ScrollWordReveal from '../components/ScrollWordReveal';
import TeamBioTabs from '../components/TeamBioTabs';
import ScrollReveal from '../components/ScrollReveal';
import PremiumGlassButton from '../components/PremiumGlassButton';
import HouseCTA from '../components/HouseCTA';

export default function AboutPage({ setActivePage }) {
  // 5 Operational Pillars ("How We Work")
  const workflowPillars = [
    {
      step: '01',
      title: 'Understand the Vision',
      desc: 'Every project starts with a goal. We take the time to understand what you are trying to accomplish, the requirements of the project and what success looks like to you.',
      icon: Eye,
    },
    {
      step: '02',
      title: 'Plan Before We Build',
      desc: 'Early planning creates an opportunity to identify requirements, coordinate scope and address potential challenges before they become construction issues.',
      icon: ClipboardList,
    },
    {
      step: '03',
      title: 'Coordinate the Team',
      desc: 'A successful project depends on many people working together. We help maintain communication and alignment between owners, consultants, contractors, subcontractors and other project partners.',
      icon: Users,
    },
    {
      step: '04',
      title: 'Manage the Details',
      desc: 'Scheduling, contracts, change orders, coordination and problem solving are part of the day-to-day work of delivering a project. Experienced oversight helps keep these details moving.',
      icon: CheckSquare,
    },
    {
      step: '05',
      title: 'Deliver With Accountability',
      desc: 'From the early planning stages through completion, we remain focused on the project\'s goals, the details that matter and the relationship with the client.',
      icon: Target,
    },
  ];

  // 12 Proven Project Types
  const projectTypes = [
    { title: 'Multifamily Residential', icon: Building2 },
    { title: 'Commercial Construction', icon: Building },
    { title: 'Hospitality', icon: Sparkles },
    { title: 'Mixed-Use Developments', icon: Layers },
    { title: 'Condominiums', icon: Home },
    { title: 'Automotive Facilities', icon: Car },
    { title: 'Retail', icon: Store },
    { title: 'Aviation', icon: Plane },
    { title: 'Ground-Up Construction', icon: HardHat },
    { title: 'Building Shells', icon: Shield },
    { title: 'Renovations', icon: Compass },
    { title: 'Land Development', icon: MapPin },
  ];

  // 4 Relationship Values
  const relationshipValues = [
    { name: 'Communication', desc: 'Transparent, proactive dialogue across every phase.' },
    { name: 'Responsiveness', desc: 'Rapid resolution of RFIs, submittals, and field questions.' },
    { name: 'Accountability', desc: 'Fidelity to schedule, budget, and commitments.' },
    { name: 'Mutual Respect', desc: 'Honoring trade partners, owners, and design professionals.' },
  ];

  return (
    <div className="relative pt-24 sm:pt-32 pb-24 text-white min-h-screen">
      {/* ========================================================
          1. HERO — Built on Experience. Built on Relationships.
          ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <section className="mb-14 sm:mb-20">
          <SectionHeading
            tag="ABOUT BNS DEVELOPMENT"
            title="Built on Experience."
            highlight="Built on Relationships."
            description="At BNS Development, we believe successful projects begin with the right people, the right conversations and a clear understanding of what needs to be accomplished. Our team brings decades of experience across construction, development, project management, general contracting and business development. That experience allows us to look at a project from more than one perspective and help clients make informed decisions as the project moves forward."
            theme="dark"
            scaleColor="red"
          />

          <ScrollReveal direction="up" delay={0.1}>
            <div className="relative aspect-[16/8] sm:aspect-[21/9] min-h-[260px] sm:min-h-[380px] w-full rounded-3xl overflow-hidden border border-white/10 bg-black/80 shadow-2xl mt-8 group">
              <img
                src="/images/about-hero.jpg"
                alt="BNS Construction Mastery"
                className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105 opacity-90"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/70 border border-brand-red/60 text-brand-red font-mono text-[10px] uppercase tracking-wider mb-2 backdrop-blur-md">
                  <ConstructionScaleSVG color="red" />
                  <span>THE BNS STANDARD</span>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-semibold font-display leading-tight max-w-3xl text-brand-heading">
                  "Strong Projects. Stronger Partnership. More Than Your Average Partner."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>

      {/* ========================================================
          2. THE EXPERIENCE BEHIND BNS DEVELOPMENT
          ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 overflow-hidden bg-white/[0.02] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            tag="PRACTICAL FOUNDATION"
            title="The Experience Behind"
            highlight="BNS Development."
            description="BNS Development's foundation is rooted in hands-on construction and development experience. Together with the broader BNS team, this experience creates a practical foundation for helping clients move projects from opportunity to execution."
            theme="dark"
            scaleColor="red"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* Bradford Smith Card */}
            <ScrollReveal delay={0.08} direction="up">
              <div className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-xl flex flex-col justify-between h-full transition-all duration-300 group hover:-translate-y-1 hover-beam-card">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider">
                      MANAGING PARTNER
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-brand-subheading">
                      CGC 1505391
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold font-display text-brand-subheading group-hover:text-brand-red transition-colors">
                    Bradford Smith
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-body leading-relaxed font-sans">
                    Brings more than 35 years of experience in the construction industry, with a background spanning general contracting, construction management, owner's representation and operations. His experience includes ground-up developments, building shells, renovations, multifamily, hospitality, mixed-use, condominium and commercial projects.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
                  <span className="text-brand-red font-semibold">35+ Years Mastery</span>
                  <span>FL &amp; TX Operations</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Manizha Buribekova Card */}
            <ScrollReveal delay={0.16} direction="up">
              <div className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-xl flex flex-col justify-between h-full transition-all duration-300 group hover:-translate-y-1 hover-beam-card">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-wider">
                      BUSINESS DEVELOPMENT
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-brand-subheading">
                      MBA
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold font-display text-brand-subheading group-hover:text-brand-red transition-colors">
                    Manizha Buribekova
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-body leading-relaxed font-sans">
                    Brings experience across commercial real estate, hospitality, land development and general contracting. She began her career in 2018 as co-founder of Roepnack Corporation alongside Bradford Smith and later helped establish BNS Development, expanding into North Florida with a focus on land development and rural-area projects.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60">
                  <span className="text-brand-red font-semibold">Market Growth</span>
                  <span>Strategic Expansion</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. MORE THAN A CONTRACTOR. A PROJECT PARTNER.
          ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-24">
        <ScrollReveal direction="up" delay={0.08}>
          <div className="relative p-8 sm:p-14 lg:p-16 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Ambient Radial Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl space-y-6">
              <SectionHeading
                tag="COLLABORATIVE EXCELLENCE"
                title="More Than a Contractor."
                highlight="A Project Partner."
                theme="dark"
                scaleColor="red"
              />

              <div className="space-y-4 text-sm sm:text-base lg:text-lg text-brand-subtext font-sans leading-relaxed">
                <ScrollWordReveal
                  text="A construction project involves thousands of decisions, multiple stakeholders and moving parts that have to stay aligned. We believe a project partner should understand more than the construction schedule."
                  colorRevealed="#A8A8A0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  delay={0.08}
                  className="text-brand-subtext font-medium"
                />
                <ScrollWordReveal
                  text="They should understand the objectives behind the project, the decisions that affect it and the challenges that can arise along the way. That's why our approach emphasizes early involvement, open communication, practical problem solving and accountability throughout the project."
                  colorRevealed="#A8A8A0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  delay={0.28}
                  className="text-brand-subtext"
                />
              </div>

              {/* 4 Partner Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
                {[
                  'Early Involvement',
                  'Open Communication',
                  'Practical Problem Solving',
                  'Project Accountability',
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-center font-mono text-[11px] sm:text-xs text-[#D4D4D0] uppercase tracking-wider font-semibold"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-red inline-block mr-2" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* ========================================================
          4. HOW WE WORK (5 Operational Pillars)
          ======================================================== */}
      <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-white/[0.02] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            tag="OPERATIONAL METHODOLOGY"
            title="How We"
            highlight="Work."
            description="Our disciplined five-pillar approach provides structured oversight, transparent communication, and decisive leadership at every milestone."
            theme="dark"
            centered={true}
            scaleColor="red"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-12">
            {workflowPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <ScrollReveal key={pillar.step} delay={idx * 0.08} direction="up">
                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-xl flex flex-col justify-between h-full transition-all duration-300 group hover:-translate-y-1.5 hover-beam-card">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-brand-red tracking-widest">
                          STEP // {pillar.step}
                        </span>
                        <div className="p-2 rounded-lg bg-brand-red/10 text-brand-red group-hover:scale-110 transition-transform">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>
                      <h4 className="text-base sm:text-lg font-semibold font-display text-brand-subheading mb-2 group-hover:text-brand-red transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-brand-body leading-relaxed font-sans">
                        {pillar.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between">
                      <div className="w-6 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-12" />
                      <span className="text-[9px] font-mono text-brand-mutedText uppercase tracking-widest">
                        EXECUTION
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. EXPERIENCE ACROSS PROJECT TYPES (12 Sectors)
          ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 sm:py-24">
        <SectionHeading
          tag="PORTFOLIO EXPERTISE"
          title="Experience Across"
          highlight="Project Types."
          description="Our team's documented experience spans a diverse range of construction environments across Florida and Texas:"
          theme="dark"
          centered={true}
          scaleColor="red"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 mt-12">
          {projectTypes.map((pt, idx) => {
            const IconComp = pt.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.04} direction="up">
                <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-lg transition-all duration-300 group hover:-translate-y-1 flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-semibold font-display text-brand-subheading group-hover:text-brand-red transition-colors line-clamp-1">
                      {pt.title}
                    </h5>
                    <span className="text-[10px] font-mono text-brand-mutedText uppercase tracking-wider block mt-0.5">
                      Documented Scope
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          6. LEADERSHIP (Interactive Bio Tabs with Source-of-Truth Copy)
          ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <section className="mb-16 sm:mb-24">
          <SectionHeading
            tag="EXECUTIVE LEADERSHIP"
            title="The People Behind"
            highlight="BNS Development."
            description="Our leadership team brings decades of verified excellence across general contracting, owner's representation, land development, and strategic capital allocation."
            theme="dark"
            scaleColor="red"
          />

          <div className="mt-8">
            <TeamBioTabs onContactClick={() => setActivePage('contact')} />
          </div>
        </section>
      </div>

      {/* ========================================================
          7. WHY RELATIONSHIPS MATTER
          ======================================================== */}
      <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-white/[0.02] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <SectionHeading
                tag="FOUNDATIONAL CREED"
                title="Why Relationships"
                highlight="Matter."
                theme="dark"
                scaleColor="red"
              />

              <div className="space-y-3.5 text-sm sm:text-base text-brand-subtext leading-relaxed font-sans">
                <p className="text-[#A8A8A0] font-semibold font-display text-lg sm:text-xl">
                  Construction is a relationship business.
                </p>
                <ScrollWordReveal
                  text="Owners, developers, architects, engineers, contractors, subcontractors and suppliers all contribute to the final result. When communication breaks down, projects can become harder than they need to be."
                  colorRevealed="#A8A8A0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  className="text-brand-subtext"
                />
                <ScrollWordReveal
                  text="We believe in building relationships based on communication, responsiveness, accountability and mutual respect. The objective is not simply to complete one project, but to create a working relationship that can continue beyond it."
                  colorRevealed="#A8A8A0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  className="text-brand-subtext"
                />
              </div>
            </div>

            {/* Right Value Pillars */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relationshipValues.map((val, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.08} direction="up">
                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-xl space-y-2 transition-all duration-300 group hover:-translate-y-1 hover-beam-card">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-red group-hover:scale-125 transition-transform" />
                      <h4 className="text-base font-semibold font-display text-brand-subheading group-hover:text-brand-red transition-colors">
                        {val.name}
                      </h4>
                    </div>
                    <p className="text-xs text-brand-body leading-relaxed font-sans">
                      {val.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. CALL TO ACTION (Architectural Video CTA)
          ======================================================== */}
      <HouseCTA
        onStartProject={() => setActivePage('contact')}
      />
    </div>
  );
}

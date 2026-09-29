import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Compass, Layers, CheckCircle2, ArrowRight, ArrowUpRight,
  ShieldCheck, Eye, ClipboardList, Users, HardHat, Target,
  Sparkles, CheckSquare, Building2, Calendar, DollarSign
} from 'lucide-react';
import SectionHeading, { ConstructionScaleSVG } from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import ScrollWordReveal from '../components/ScrollWordReveal';
import EyeFollowButton from '../components/EyeFollowButton';

export default function PreconstructionPage({ setActivePage }) {
  useEffect(() => {
    document.title = "BNS Development | Pre Development Services";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Plan your construction project with BNS Development's Pre Development Services, including project planning, scope development, scheduling and coordination.";
  }, []);

  const handleContactNav = () => {
    if (setActivePage) {
      setActivePage('contact');
    } else {
      window.location.hash = '#contact';
    }
  };

  // Exact 6 Preconstruction Services Verbatim from User Specification
  const preconstructionServices = [
    {
      title: 'Project Planning',
      desc: 'We work to understand the project\'s goals, requirements, scope and priorities before construction begins.',
      icon: ClipboardList,
    },
    {
      title: 'Scope Development',
      desc: 'A clearly defined scope helps establish expectations and provides a stronger foundation for project execution.',
      icon: CheckSquare,
    },
    {
      title: 'Scheduling',
      desc: 'We help develop a practical project schedule and identify key stages that need to be coordinated before and during construction.',
      icon: Calendar,
    },
    {
      title: 'Project Coordination',
      desc: 'We help bring owners, consultants, designers, contractors and other project stakeholders together to establish alignment.',
      icon: Users,
    },
    {
      title: 'Construction Planning',
      desc: 'Our construction experience allows us to identify potential challenges early and consider how they may affect execution.',
      icon: HardHat,
    },
    {
      title: 'Budget & Cost Considerations',
      desc: 'Early understanding of project requirements and scope can help inform cost-related decisions and reduce unnecessary surprises later in the process.',
      icon: DollarSign,
    },
  ];

  // Exact 7 Early Planning Benefits Curated in Pictorial Format
  const pictorialBenefits = [
    {
      step: '01',
      title: 'Identify potential challenges',
      image: '/images/ground-up.jpg',
      alt: 'Civil engineers and superintendents inspecting deep foundations and structural parameters on site',
    },
    {
      step: '02',
      title: 'Clarify project scope',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
      alt: 'Comprehensive architectural drawings, engineering schematics, and trade scopes',
    },
    {
      step: '03',
      title: 'Improve coordination',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
      alt: 'Multi-stakeholder project coordination between developers, architects, and trade partners',
    },
    {
      step: '04',
      title: 'Establish realistic schedules',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
      alt: 'Critical path milestone scheduling and construction sequencing analytics',
    },
    {
      step: '05',
      title: 'Support informed decision-making',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80',
      alt: 'Engineers analyzing technical feasibility models and parametric budgets',
    },
    {
      step: '06',
      title: 'Prepare stakeholders for construction',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
      alt: 'Groundbreaking mobilization and site readiness briefing with trade leadership',
    },
    {
      step: '07',
      title: 'Create a clearer path toward execution',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85',
      alt: 'Rising landmark structure moving from planning into flawless physical execution',
    },
  ];

  return (
    <div className="relative pt-24 sm:pt-32 pb-24 text-white overflow-hidden">
      {/* Background Architectural Ambient Lighting */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-28">

        {/* ========================================================
            1. HERO SECTION (Plan With Confidence Before You Build)
            ======================================================== */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Left Column: Badge, Heading, Narrative, and Button */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
              <div>
                <ScrollReveal direction="up" delay={0.05}>
                  <div className="space-y-2.5">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/80 border border-brand-red backdrop-blur-md text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(215,25,32,0.3)]">
                      <ConstructionScaleSVG color="red" />
                      <span className="text-white">BNS DEVELOPMENT</span>
                      <span className="text-brand-red">•</span>
                      <span className="text-brand-red">PRE DEVELOPMENT SERVICES</span>
                    </div>

                    <h1 className="text-[30px] sm:text-[36px] md:text-[42px] font-display font-semibold tracking-tight leading-[1.15]">
                      <span className="block text-white">Plan With Confidence</span>
                      <span className="block text-brand-red">Before You Build</span>
                    </h1>
                  </div>
                </ScrollReveal>

                {/* Tight spacing directly below heading */}
                <div className="mt-4 space-y-3.5 font-sans">
                  <ScrollWordReveal
                    text="The success of a construction project is often determined before construction begins."
                    colorRevealed="#a8a8a0"
                    colorHidden="rgba(168, 168, 160, 0.25)"
                    delay={0.05}
                    className="font-medium text-[16px] leading-relaxed text-[#a8a8a0]"
                  />
                  <ScrollWordReveal
                    text="BNS Development provides Pre Development Services designed to help owners and developers understand their project, identify potential challenges and establish a practical path toward construction."
                    colorRevealed="#a8a8a0"
                    colorHidden="rgba(168, 168, 160, 0.25)"
                    delay={0.15}
                    className="text-[16px] leading-relaxed text-[#a8a8a0]"
                  />
                  <ScrollWordReveal
                    text="From early planning and scope development to scheduling and coordination, we help bring clarity to the decisions that need to be made before work begins."
                    colorRevealed="#a8a8a0"
                    colorHidden="rgba(168, 168, 160, 0.25)"
                    delay={0.25}
                    className="text-[16px] leading-relaxed text-[#a8a8a0]"
                  />
                </div>
              </div>

              {/* Action Button without arrows */}
              <div className="pt-2">
                <EyeFollowButton
                  onClick={handleContactNav}
                  size="lg"
                  icon="none"
                  className="font-mono text-xs uppercase tracking-wider font-bold"
                >
                  Start a Conversation
                </EyeFollowButton>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-6 flex">
              <ScrollReveal direction="up" delay={0.15} className="w-full h-full flex">
                <div className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-full rounded-3xl overflow-hidden border border-white/10 hover:border-brand-red/60 bg-neutral-950 shadow-2xl group hover-beam-card transition-all duration-500">
                  <img
                    src="/images/preconstruction.jpg"
                    alt="BNS Development Preconstruction Precision Planning"
                    className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105 opacity-90"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-transparent to-transparent pointer-events-none" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. BUILD A STRONGER FOUNDATION BEFORE CONSTRUCTION BEGINS
            ======================================================== */}
        <section className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Real Planning Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 hover:border-brand-red/50 bg-neutral-900 shadow-xl group transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=85"
                    alt="Engineers and managers reviewing technical preconstruction blueprints"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </ScrollReveal>
            </div>

            {/* Core Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <SectionHeading
                tag="PRE DEVELOPMENT"
                title={<span className="text-white">Build a Stronger Foundation</span>}
                highlight={<span className="text-brand-red">Before Construction Begins</span>}
                theme="dark"
                scaleColor="red"
              />

              <div className="space-y-4 text-sm sm:text-base font-sans leading-relaxed">
                <ScrollWordReveal
                  text="Preconstruction is where ideas begin to take shape."
                  colorRevealed="#a8a8a0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  delay={0.06}
                  className="font-medium text-base sm:text-lg text-[#a8a8a0]"
                />
                <ScrollWordReveal
                  text="It is also where important decisions can be addressed before they become costly problems during construction."
                  colorRevealed="#a8a8a0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  delay={0.18}
                  className="text-[#a8a8a0]"
                />
                <ScrollWordReveal
                  text="Our team works with clients and project partners to understand the project requirements, coordinate the necessary information and prepare for the construction phase."
                  colorRevealed="#a8a8a0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  delay={0.3}
                  className="text-[#a8a8a0]"
                />
                <ScrollWordReveal
                  text="With extensive experience in construction management and general contracting, BNS Development brings a practical construction perspective to the planning process."
                  colorRevealed="#a8a8a0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  delay={0.42}
                  className="font-medium text-[#a8a8a0]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. OUR PRE DEVELOPMENT SERVICES (6 Disciplines Verbatim)
            ======================================================== */}
        <section className="space-y-10">
          <SectionHeading
            tag="SERVICES"
            title={<span className="text-white">Our Pre Development</span>}
            highlight={<span className="text-brand-red">Services</span>}
            theme="dark"
            scaleColor="red"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {preconstructionServices.map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <ScrollReveal key={idx} delay={idx * 0.07} direction="up">
                  <div className="p-7 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-red/60 backdrop-blur-xl shadow-xl flex flex-col justify-between h-full transition-all duration-300 group hover:-translate-y-1.5 hover-beam-card">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="p-2.5 rounded-xl bg-brand-red/15 border border-brand-red/40 text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all shadow-md">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono text-brand-red font-bold uppercase tracking-widest">
                          0{idx + 1}
                        </span>
                      </div>
                      <h4 className="text-lg font-semibold font-display text-white group-hover:text-brand-red transition-colors">
                        {svc.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] text-[#a8a8a0] leading-relaxed font-sans">
                        {svc.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-start">
                      <div className="w-6 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-14" />
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            4. WHY START WITH PRECONSTRUCTION? (Pictorial Showcase)
            ======================================================== */}
        <section className="space-y-8">
          <div className="max-w-4xl space-y-3">
            <SectionHeading
              tag="ADVANTAGES"
              title={<span className="text-white">Why Start With</span>}
              highlight={<span className="text-brand-red">Preconstruction?</span>}
              description="A well-planned project can make the construction process more organized and predictable."
              theme="dark"
              scaleColor="red"
            />
            <p className="text-xs sm:text-sm font-mono text-brand-red uppercase tracking-wider font-bold pt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
              <span>Early planning can help:</span>
            </p>
          </div>

          {/* Pictorial Grid Display: 7 Benefits from user specification */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pictorialBenefits.map((item, idx) => {
              const isFeatureCard = idx === 6; // 7th card spans wide across 3 columns on desktop
              return (
                <ScrollReveal
                  key={idx}
                  delay={idx * 0.05}
                  direction="up"
                  className={isFeatureCard ? 'md:col-span-2 lg:col-span-3' : ''}
                >
                  <div
                    className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 hover:border-brand-red/60 transition-all duration-500 shadow-2xl flex flex-col justify-between p-6 sm:p-8 hover:-translate-y-1.5 hover-beam-card ${
                      isFeatureCard
                        ? 'min-h-[280px] sm:min-h-[320px] lg:min-h-[340px]'
                        : 'min-h-[280px] sm:min-h-[300px]'
                    }`}
                  >
                    {/* Background Pictorial Real Image */}
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-700 ease-out group-hover:scale-108 opacity-80 group-hover:opacity-95"
                      loading="lazy"
                    />

                    {/* High-Contrast Gradient Vignette for Readability & White/Red Style */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-[#07080A]/60 to-black/30 group-hover:via-[#07080A]/45 transition-all duration-500 pointer-events-none" />

                    {/* Top Row: Step indicator & Status Icon */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-brand-red/60 text-[10px] font-mono text-brand-red font-bold uppercase tracking-wider shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                        <span>{item.step}</span>
                      </span>
                      <div className="w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:border-brand-red group-hover:text-brand-red transition-all shadow-md">
                        <CheckCircle2 className="w-4 h-4 text-brand-red" />
                      </div>
                    </div>

                    {/* Bottom Row: Exact Benefit Title */}
                    <div className="relative z-10 space-y-2 mt-auto pt-8">
                      <div className="w-8 h-[2px] bg-brand-red group-hover:w-16 transition-all duration-300" />
                      <h4
                        className={`font-semibold font-display text-white group-hover:text-brand-red transition-colors leading-snug tracking-tight ${
                          isFeatureCard ? 'text-xl sm:text-2xl lg:text-3xl max-w-2xl' : 'text-lg sm:text-xl'
                        }`}
                      >
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* ========================================================
            5. FROM PLANNING TO CONSTRUCTION
            ======================================================== */}
        <section className="relative p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <SectionHeading
                tag="FOUNDATION"
                title={<span className="text-white">From Planning to</span>}
                highlight={<span className="text-brand-red">Construction</span>}
                theme="dark"
                scaleColor="red"
              />

              <div className="space-y-4 text-base sm:text-lg font-sans leading-relaxed">
                <ScrollWordReveal
                  text="Preconstruction is not simply a preliminary step. It is an opportunity to establish the foundation for the entire project."
                  colorRevealed="#a8a8a0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  delay={0.06}
                  className="font-medium text-[#a8a8a0]"
                />
                <ScrollWordReveal
                  text="BNS Development works with clients to move from an initial concept toward a project that is better understood, better coordinated and ready for the next stage."
                  colorRevealed="#a8a8a0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  delay={0.22}
                  className="text-[#a8a8a0]"
                />
              </div>
            </div>

            {/* Real Construction Foundation Photo */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="up" delay={0.12}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 hover:border-brand-red/50 bg-neutral-900 shadow-xl group transition-all duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=85"
                    alt="Commercial jobsite foundation and active construction crew"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ========================================================
            6. HAVE A PROJECT YOU'RE PLANNING? (Closing CTA)
            ======================================================== */}
        <section className="relative p-10 sm:p-14 lg:p-16 rounded-3xl border border-white/15 backdrop-blur-2xl shadow-2xl text-center space-y-6 overflow-hidden group">
          {/* Background Video (cta-bg.mp4) */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-[#07080A]">
            <video
              src="/videos/cta-bg.mp4"
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
              disablePictureInPicture
              className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-1000 ease-out scale-105 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              onEnded={(e) => {
                e.currentTarget.currentTime = 0;
                e.currentTarget.play().catch(() => {});
              }}
            >
              <source src="/videos/cta-bg.mp4" type="video/mp4" />
            </video>
            {/* Soft, balanced vignette to let video show through with high clarity */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080A]/50 via-[#07080A]/20 to-[#07080A]/40 pointer-events-none" />
            <div className="absolute inset-0 bg-radial-gradient from-brand-red/15 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="max-w-2xl mx-auto space-y-5 relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
              <span className="text-white">Have a Project</span>{' '}
              <span className="text-brand-red">You're Planning?</span>
            </h2>

            <div className="pt-2 flex justify-center">
              <EyeFollowButton
                onClick={handleContactNav}
                size="lg"
                icon="none"
                className="font-mono text-xs uppercase tracking-wider font-bold"
              >
                Let's Talk About Your Project
              </EyeFollowButton>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

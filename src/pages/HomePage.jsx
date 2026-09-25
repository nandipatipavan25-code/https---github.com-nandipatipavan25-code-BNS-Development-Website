import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight, ArrowRight, Shield, Award, Users, HardHat, Compass,
  Layers, Home, Maximize, Building2, Building, CheckCircle2,
  ChevronRight, Play, Pause, Volume2, VolumeX, Sparkles, Plane, Ruler,
  ShoppingBag, Wrench
} from 'lucide-react';
import SectionHeading, { ConstructionScaleSVG } from '../components/SectionHeading';
import ProjectCarousel from '../components/ProjectCarousel';
import HouseCTA from '../components/HouseCTA';
import ScrollWordReveal from '../components/ScrollWordReveal';
import ScrollReveal from '../components/ScrollReveal';
import TypewriterText from '../components/TypewriterText';
import PremiumGlassButton from '../components/PremiumGlassButton';
import { teamData } from '../data/team';
import { projectsData } from '../data/projects';

// 5 Dedicated Services matching exact user specification (informative display without links)
const HOME_SERVICES = [
  {
    id: 'preconstruction',
    title: 'Preconstruction Services',
    desc: 'Start with a clearer understanding of your project. Our preconstruction approach focuses on early planning, scope coordination, scheduling, project requirements and the decisions that need to be addressed before construction begins.',
    image: '/images/preconstruction.jpg',
    icon: Compass,
  },
  {
    id: 'construction-services',
    title: 'Construction Services',
    desc: 'From mobilization through completion, we provide hands-on project oversight focused on coordination, communication, quality and keeping the work moving.',
    image: '/images/ground-up.jpg',
    icon: Building2,
  },
  {
    id: 'design-build',
    title: 'Design-Build',
    desc: 'Bring design and construction together through a coordinated delivery approach. By connecting the people involved earlier, projects can move with greater alignment between design, scope, schedule and construction.',
    image: '/images/design-build.jpg',
    icon: Layers,
  },
  {
    id: 'residential-services',
    title: 'Residential Services',
    desc: 'From single-family homes to multifamily developments, we provide construction support tailored to the needs and complexity of residential projects.',
    image: '/images/residential.jpg',
    icon: Home,
  },
  {
    id: 'commercial-services',
    title: 'Commercial Services',
    desc: 'From ground-up construction to commercial improvements and complex projects, we bring experienced project leadership to help clients navigate the construction process.',
    image: '/images/tenant-improvements.jpg',
    icon: Maximize,
  },
];

// 11 Core Project Sectors — "Our Expertise" matching reference design exactly
const EXPERTISE_SECTORS = [
  // Row 1 (6 sectors)
  {
    id: 'single-family',
    name: 'Single-Family Residential',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'multifamily',
    name: 'Multifamily Residential',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'commercial',
    name: 'Commercial',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'hospitality',
    name: 'Hospitality',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'mixed-use',
    name: 'Mixed-Use',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'condominium',
    name: 'Condominium',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  },

  // Row 2 (5 sectors)
  {
    id: 'ground-up',
    name: 'Ground-Up Construction',
    icon: HardHat,
    image: '/images/ground-up.jpg',
  },
  {
    id: 'building-shells',
    name: 'Building Shells',
    icon: Layers,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'renovations',
    name: 'Renovations',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'land-development',
    name: 'Land Development',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: ShoppingBag,
    image: '/images/projects/modern-retail-showroom.png',
  },
];

const ROW_1_SECTORS = EXPERTISE_SECTORS.slice(0, 6);
const ROW_2_SECTORS = EXPERTISE_SECTORS.slice(6);

// 4 Pillars of the BNS Approach
const BNS_APPROACH = [
  {
    step: '01',
    title: 'Start Early',
    desc: 'The earlier the right questions are addressed, the fewer surprises there are later. We work to understand the project before construction begins.',
  },
  {
    step: '02',
    title: 'Stay Connected',
    desc: 'Clear communication keeps owners, consultants, contractors and project partners working from the same plan.',
  },
  {
    step: '03',
    title: 'Solve Problems',
    desc: 'Construction rarely goes exactly according to plan. Our experience helps us identify issues, evaluate options and keep decisions moving.',
  },
  {
    step: '04',
    title: 'Stay Accountable',
    desc: 'We take responsibility for our role in the process and remain focused on the project from planning through completion.',
  },
];

export default function HomePage({ setActivePage, setSelectedProject, setSelectedService }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = isMuted;
      video.defaultMuted = true;
      video.loop = true;
      video.playsInline = true;
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('loop', '');

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsPlaying(false);
          const resumeOnInteraction = () => {
            if (video && video.paused) {
              video.muted = true;
              video.play().catch(() => {});
            }
          };
          window.addEventListener('click', resumeOnInteraction, { once: true, passive: true });
          window.addEventListener('touchstart', resumeOnInteraction, { once: true, passive: true });
        });
      }

      // Seamless continuous loop handler
      const handleTimeUpdate = () => {
        if (video && video.duration > 0) {
          if (video.currentTime >= video.duration - 0.15) {
            video.currentTime = 0;
            if (video.paused) {
              video.play().catch(() => {});
            }
          }
        }
      };

      const handleEnded = () => {
        video.currentTime = 0;
        video.play().catch(() => {});
      };

      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('ended', handleEnded);

      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    setActivePage('work-detail');
    const targetUrl = `/work-detail.html?id=${project.id}`;
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({ page: 'work-detail', id: project.id }, '', targetUrl);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-transparent text-white">
      {/* ========================================================
          1. HERO SECTION (Full-Width Cinematic Video Hero)
          ======================================================== */}
      <section className="relative w-full pt-20 sm:pt-24 pb-0">
        <div className="relative w-full h-[72vh] min-h-[500px] sm:min-h-[600px] md:h-[82vh] overflow-hidden bg-black shadow-2xl flex items-center justify-center group">
          <video
            ref={videoRef}
            src="/videos/hero-video.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            webkit-playsinline="true"
            className="w-full h-full object-cover select-none cursor-pointer"
            onClick={togglePlay}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={(e) => {
              e.currentTarget.currentTime = 0;
              e.currentTarget.play().catch(() => {});
            }}
          />

          {/* Cinematic Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07080A] via-black/45 to-black/35 pointer-events-none" />

          {/* Hero Video Content Overlay */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-5 sm:p-8 md:p-12 lg:p-14 max-w-7xl mx-auto w-full pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl sm:max-w-3xl space-y-3 sm:space-y-4 pointer-events-auto pb-4 sm:pb-6"
            >
              {/* Badge: FL CGC 1505391 • TEXAS & FLORIDA OPERATIONS */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/70 border border-brand-red/60 backdrop-blur-md text-[10px] sm:text-xs font-mono text-brand-red font-semibold uppercase tracking-wider shadow-sm">
                <ConstructionScaleSVG color="red" />
                <span>FL CGC 1505391</span>
                <span className="text-white/30">•</span>
                <span>TEXAS &amp; FLORIDA OPERATIONS</span>
              </div>

              {/* Headline: Built on Experience. Driven by Partnership. */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[50px] font-display font-semibold text-brand-heading tracking-tight leading-tight lg:leading-[50px]">
                BUILT ON EXPERIENCE.<br />
                <span className="text-brand-red">DRIVEN BY PARTNERSHIP.</span>
              </h1>

              {/* Subtitle with typing animation effect on load */}
              <div className="max-w-xl sm:max-w-2xl min-h-[50px] sm:min-h-[58px]">
                <TypewriterText
                  text="From the first conversation to project completion, BNS Development brings experienced leadership, practical construction knowledge and a collaborative approach to every project."
                  speed={18}
                  startDelay={350}
                  className="text-xs sm:text-sm md:text-[15px] text-brand-subtext font-sans leading-relaxed"
                />
              </div>

              {/* Interactive CTA: Tell Us About Your Project */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <PremiumGlassButton
                  onClick={() => setActivePage('contact')}
                  size="md"
                  baseColor="#000000"
                  glassColor="#ffffff"
                  hoverSpeed={0.7}
                >
                  TELL US ABOUT YOUR PROJECT
                </PremiumGlassButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. STRATEGY & PHILOSOPHY: A Better Way to Move a Project Forward
          ======================================================== */}
      <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-white/[0.02] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Section Heading & Lead text */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="left" delay={0.08}>
                <SectionHeading
                  tag="STRATEGIC EXECUTION"
                  title="A Better Way to Move a"
                  highlight="Project Forward."
                  theme="dark"
                  scaleColor="red"
                  className="mb-3 sm:mb-4"
                />
                <div className="space-y-4 text-sm sm:text-base text-[#A8A8A0] leading-relaxed font-sans">
                  <p>
                    Construction is more than putting a plan into action. The decisions made before construction begins can shape the budget, schedule, coordination and outcome of the entire project.
                  </p>
                  <p>
                    BNS Development brings construction and development experience to the table early, helping clients think through the project before the work begins and stay connected throughout the build.
                  </p>
                </div>
                <div className="pt-6">
                  <PremiumGlassButton
                    onClick={() => setActivePage('about')}
                    size="md"
                    baseColor="#000000"
                    glassColor="#ffffff"
                    hoverSpeed={0.7}
                  >
                    MEET BNS DEVELOPMENT
                  </PremiumGlassButton>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Glass Card with comprehensive experience summary */}
            <div className="lg:col-span-6">
              <ScrollReveal direction="right" delay={0.16}>
                <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-2xl relative space-y-5 transition-all duration-300 group hover-beam-card">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red font-mono text-[10px] uppercase tracking-wider">
                    <ConstructionScaleSVG color="red" />
                    <span>FOUNDATIONAL PERSPECTIVE</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-semibold font-display text-[#A8A8A0] group-hover:text-brand-red transition-colors">
                    Decades of Ground-Up Mastery &amp; Guidance
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A8A8A0] leading-relaxed font-sans">
                    With experience spanning general contracting, construction management, owner's representation, land development, multifamily, hospitality, mixed-use, condominium, commercial and ground-up construction, our team understands the challenges that can arise at every stage.
                  </p>

                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                    <p className="text-xs sm:text-sm font-semibold text-[#A8A8A0] italic font-sans">
                      "Our goal is simple: give clients a knowledgeable partner who can help move the project forward with clarity and confidence."
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SERVICES: From Planning to Completion (Non-Linked Informative Cards)
          ======================================================== */}
      <section className="relative w-full py-16 sm:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" delay={0.08}>
            <div className="max-w-3xl mb-12">
              <SectionHeading
                tag="END-TO-END CAPABILITIES"
                title="From Planning to"
                highlight="Completion."
                description="Our services are designed to support projects at different stages, whether you are evaluating an opportunity, preparing for construction or ready to build."
                theme="dark"
                scaleColor="red"
              />
            </div>
          </ScrollReveal>

          {/* 5 Services Cards Grid (Pure Informative Display) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_SERVICES.map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <ScrollReveal key={svc.id} delay={idx * 0.08}>
                  <div
                    className="p-7 rounded-3xl flex flex-col justify-between h-full bg-white/[0.03] border border-white/10 hover:border-brand-red/30 backdrop-blur-xl shadow-xl transition-all duration-300 hover-beam-card group hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-900 relative">
                        <img
                          src={svc.image}
                          alt={svc.title}
                          className="w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white font-semibold uppercase flex items-center gap-1.5">
                          <ConstructionScaleSVG color="white" />
                          <span>0{idx + 1} SERVICE</span>
                        </div>
                        {/* Discipline Icon for future page development */}
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-brand-red flex items-center justify-center shadow-lg">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red shrink-0">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <h3 className="text-xl font-semibold font-display text-brand-subheading">
                          {svc.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#A8A8A0] leading-relaxed font-sans">
                        {svc.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-500 uppercase tracking-wider">
                      <span>CORE DISCIPLINE</span>
                      <span className="text-brand-red font-semibold">BNS SCOPE</span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          4. OUR EXPERTISE: Experience That Goes Beyond One Type of Project
          ======================================================== */}
      <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-transparent">
        {/* Subtle Ambient Blueprint Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-brand-red/[0.03] rounded-full blur-[180px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
          {/* Section Header Matching Reference Image */}
          <ScrollReveal direction="up" delay={0.08}>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12 pb-2">
              {/* Left: Red Accent Tag & GT Super 600 Main Heading */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-5 h-[2px] bg-brand-red inline-block" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[#A8A8A0] font-semibold">
                    OUR EXPERTISE
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-display font-semibold text-[#E6E6E6] tracking-[0.03em] uppercase leading-[1.15]">
                  EXPERIENCE THAT GOES
                  <br />
                  BEYOND ONE TYPE OF <span className="text-brand-red">PROJECT</span>
                </h2>
              </div>

              {/* Middle Subtle Divider (LG screens) */}
              <div className="hidden lg:block w-[1px] h-20 bg-white/10 self-center shrink-0" />

              {/* Right: Supporting Paragraph in #A8A8A0 */}
              <div className="max-w-md lg:pb-1">
                <p className="text-sm sm:text-base text-[#A8A8A0] font-sans leading-relaxed">
                  Every project is different. Experience across multiple sectors gives our team a broader perspective when planning, coordinating and solving problems.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 11 Sectors Balanced Editorial Grid */}
          <div className="space-y-3.5 sm:space-y-4">
            {/* Row 1: 6 Columns on Desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5">
              {ROW_1_SECTORS.map((sector, idx) => {
                const IconComp = sector.icon;
                return (
                  <ScrollReveal key={sector.id} direction="up" delay={0.04 * idx} distance={24}>
                    <div
                      className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#0A0C10] border border-white/10 hover:border-brand-red/50 transition-all duration-500 shadow-xl flex flex-col justify-end aspect-[4/5] min-h-[210px] sm:min-h-[230px] md:min-h-[250px] cursor-default"
                    >
                      {/* Background Image: Black & White by default, smoothly transitions to full color on hover */}
                      <img
                        src={sector.image}
                        alt={sector.name}
                        className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.85] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Cinematic Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent group-hover:via-black/25 transition-all duration-500 pointer-events-none" />

                      {/* Top Subtle Red Accent Sweep on Hover */}
                      <span className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20 pointer-events-none" />

                      {/* Bottom Info Shelf */}
                      <div className="relative z-10 p-3 sm:p-3.5 flex items-center gap-2.5">
                        {/* Icon Box */}
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black/65 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:text-white group-hover:border-brand-red/50 group-hover:bg-brand-red/10 group-hover:scale-105 transition-all duration-300 shrink-0">
                          <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>

                        {/* Red Accent Dash & Sector Title */}
                        <div className="min-w-0 flex-1">
                          <span className="w-3.5 h-[2px] bg-brand-red block mb-1 group-hover:w-5 transition-all duration-300" />
                          <h3 className="text-xs sm:text-[13px] font-sans font-medium text-[#E6E6E6] group-hover:text-white transition-colors leading-snug line-clamp-2">
                            {sector.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Row 2: 5 Columns on Desktop */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-3.5">
              {ROW_2_SECTORS.map((sector, idx) => {
                const IconComp = sector.icon;
                return (
                  <ScrollReveal key={sector.id} direction="up" delay={0.04 * (idx + 6)} distance={24}>
                    <div
                      className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#0A0C10] border border-white/10 hover:border-brand-red/50 transition-all duration-500 shadow-xl flex flex-col justify-end aspect-[4/5] min-h-[210px] sm:min-h-[230px] md:min-h-[250px] cursor-default"
                    >
                      {/* Background Image: Black & White by default, smoothly transitions to full color on hover */}
                      <img
                        src={sector.image}
                        alt={sector.name}
                        className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.85] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Cinematic Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent group-hover:via-black/25 transition-all duration-500 pointer-events-none" />

                      {/* Top Subtle Red Accent Sweep on Hover */}
                      <span className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20 pointer-events-none" />

                      {/* Bottom Info Shelf */}
                      <div className="relative z-10 p-3 sm:p-3.5 flex items-center gap-2.5">
                        {/* Icon Box */}
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black/65 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/80 group-hover:text-white group-hover:border-brand-red/50 group-hover:bg-brand-red/10 group-hover:scale-105 transition-all duration-300 shrink-0">
                          <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>

                        {/* Red Accent Dash & Sector Title */}
                        <div className="min-w-0 flex-1">
                          <span className="w-3.5 h-[2px] bg-brand-red block mb-1 group-hover:w-5 transition-all duration-300" />
                          <h3 className="text-xs sm:text-[13px] font-sans font-medium text-[#E6E6E6] group-hover:text-white transition-colors leading-snug line-clamp-2">
                            {sector.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. METHODOLOGY: The BNS Approach
          ======================================================== */}
      <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-white/[0.02] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" delay={0.08}>
            <SectionHeading
              tag="GUIDING METHODOLOGY"
              title="The BNS"
              highlight="Approach."
              description="A disciplined, relationship-driven foundation built on four essential commitments to every client."
              theme="dark"
              scaleColor="red"
            />
          </ScrollReveal>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {BNS_APPROACH.map((pillar, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08} direction="up">
                <div className="p-7 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-xl flex flex-col justify-between h-full transition-all duration-300 group hover:-translate-y-1 hover-beam-card">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-display font-semibold text-brand-red">
                        {pillar.step}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-brand-red group-hover:scale-125 transition-transform" />
                    </div>
                    <h3 className="text-xl font-semibold font-display text-brand-subheading group-hover:text-brand-red transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A8A8A0] leading-relaxed font-sans">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                    <span>COMMITMENT</span>
                    <span className="text-brand-red">DISCIPLINE</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          6. SELECTED WORK: Experience You Can See in the Work
          ======================================================== */}
      <ProjectCarousel
        onSelectProject={handleProjectSelect}
        onViewAll={() => setActivePage('work')}
      />

      {/* ========================================================
          7. PEOPLE & RELATIONSHIPS: People Build Projects
          ======================================================== */}
      <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 sm:py-24">
        <ScrollReveal direction="up" delay={0.08}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <SectionHeading
                tag="RELATIONSHIP-FIRST CULTURE"
                title="People Build"
                highlight="Projects."
                description="The strength of a construction company is not only measured by the projects it completes. It is also reflected in the people who plan, coordinate, communicate and solve problems along the way. BNS Development brings together experienced construction and business development professionals who understand the importance of strong relationships and consistent project communication."
                theme="dark"
                scaleColor="red"
              />
            </div>

            <div className="shrink-0 mb-6">
              <PremiumGlassButton
                onClick={() => setActivePage('about')}
                size="sm"
                baseColor="#000000"
                glassColor="#ffffff"
                hoverSpeed={0.7}
              >
                MEET OUR TEAM
              </PremiumGlassButton>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((person, idx) => (
            <ScrollReveal key={person.id} delay={idx * 0.08}>
              <div
                onClick={() => setActivePage('about')}
                className="rounded-3xl overflow-hidden cursor-pointer bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-xl transition-all duration-300 group hover:-translate-y-1 hover-beam-card"
              >
                <div className="aspect-[3/4] w-full overflow-hidden bg-neutral-900 relative">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-mono font-bold text-brand-red uppercase">
                    {person.role}
                  </div>
                </div>

                <div className="p-5 space-y-1">
                  <h4 className="text-lg font-semibold font-display text-brand-subheading group-hover:text-brand-red transition-colors">
                    {person.name}
                  </h4>
                  <p className="text-xs text-[#A8A8A0] truncate">
                    {person.title}
                  </p>
                  <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-brand-red">
                    <span>VIEW DOSSIER</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ========================================================
          8. READY TO TALK ABOUT YOUR PROJECT? (Architectural CTA)
          ======================================================== */}
      <HouseCTA
        onStartProject={() => setActivePage('contact')}
      />
    </div>
  );
}

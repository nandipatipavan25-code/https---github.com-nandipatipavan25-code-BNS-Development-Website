import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Home, Building2, Layers, Wrench, CheckCircle2,
  ClipboardList, Users, HardHat, Target, Sparkles
} from 'lucide-react';
import SectionHeading, { ConstructionScaleSVG } from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import ScrollWordReveal from '../components/ScrollWordReveal';
import EyeFollowButton from '../components/EyeFollowButton';

export default function ResidentialPage({ setActivePage }) {
  useEffect(() => {
    document.title = "BNS Development | Residential Construction Services";
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "BNS Development provides residential construction services for single-family and multifamily projects with experienced project leadership.";
  }, []);

  const handleContactNav = () => {
    if (setActivePage) {
      setActivePage('contact');
    } else {
      window.location.hash = '#contact';
    }
  };

  // Exact 4 Residential Services Verbatim from User Specification
  const residentialServices = [
    {
      title: 'Single-Family Construction',
      desc: 'We support single-family residential projects with an approach focused on planning, coordination, construction and project oversight.',
      icon: Home,
    },
    {
      title: 'Multifamily Construction',
      desc: 'Multifamily developments require careful coordination across multiple units, trades, schedules and project requirements. Our experience helps bring these moving parts together.',
      icon: Building2,
    },
    {
      title: 'Residential Developments',
      desc: 'For larger residential developments and community projects, we provide project leadership focused on coordination and execution.',
      icon: Layers,
    },
    {
      title: 'Renovation & Improvements',
      desc: 'Where applicable, we can support residential renovation and improvement projects that require experienced construction coordination.',
      icon: Wrench,
    },
  ];

  // Exact 4 Approach Steps Curated in Pictorial Format with Related Real Images
  const pictorialApproach = [
    {
      step: '01',
      title: 'Plan',
      desc: 'Understand the project, site, scope and requirements.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
      alt: 'Architectural drawings and residential site planning',
    },
    {
      step: '02',
      title: 'Coordinate',
      desc: 'Keep owners, designers, contractors and project partners aligned.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80',
      alt: 'Project coordination meeting between designers and contractors',
    },
    {
      step: '03',
      title: 'Build',
      desc: 'Maintain focus on construction execution, scheduling and project oversight.',
      image: '/images/ground-up.jpg',
      alt: 'Active residential construction site framing and execution',
    },
    {
      step: '04',
      title: 'Deliver',
      desc: 'Work toward completing the project with attention to quality, communication and accountability.',
      image: '/images/projects/luxury-penthouse-design.png',
      alt: 'Completed luxury residential living space delivered with high craftsmanship',
    },
  ];

  return (
    <div className="relative pt-24 sm:pt-32 pb-24 text-white overflow-hidden">
      {/* Background Architectural Ambient Lighting */}
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20 sm:space-y-28">

        {/* ========================================================
            1. HERO SECTION (Building Homes. Developing Communities.)
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
                      <span className="text-brand-red">RESIDENTIAL SERVICES</span>
                    </div>

                    <h1 className="text-[30px] sm:text-[36px] md:text-[42px] font-display font-semibold tracking-tight leading-[1.15]">
                      <span className="block text-white">Building Homes.</span>
                      <span className="block text-brand-red">Developing Communities.</span>
                    </h1>
                  </div>
                </ScrollReveal>

                {/* Tight spacing directly below heading */}
                <div className="mt-4 space-y-3.5 font-sans">
                  <ScrollWordReveal
                    text="Residential construction requires attention to both the individual project and the bigger picture."
                    colorRevealed="#a8a8a0"
                    colorHidden="rgba(168, 168, 160, 0.25)"
                    delay={0.05}
                    className="font-medium text-[16px] leading-relaxed text-[#a8a8a0]"
                  />
                  <ScrollWordReveal
                    text="BNS Development provides residential construction services for single-family and multifamily projects, bringing experienced project leadership and construction knowledge to developments of different sizes and complexities."
                    colorRevealed="#a8a8a0"
                    colorHidden="rgba(168, 168, 160, 0.25)"
                    delay={0.15}
                    className="text-[16px] leading-relaxed text-[#a8a8a0]"
                  />
                  <ScrollWordReveal
                    text="Whether you're planning a single-family project, multifamily development or residential community, we work to understand the requirements and provide a clear path toward construction."
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
                  Discuss Your Residential Project
                </EyeFollowButton>
              </div>
            </div>

            {/* Right Hero Image Card (Full height of the section, zero filler text) */}
            <div className="lg:col-span-6 flex">
              <ScrollReveal direction="up" delay={0.15} className="w-full h-full flex">
                <div className="relative w-full min-h-[460px] sm:min-h-[500px] lg:min-h-full rounded-3xl overflow-hidden border border-white/10 hover:border-brand-red/60 bg-neutral-950 shadow-2xl group hover-beam-card transition-all duration-500">
                  <img
                    src="/images/residential.jpg"
                    alt="BNS Development Residential Construction"
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
            2. RESIDENTIAL CONSTRUCTION WITH EXPERIENCE BEHIND IT
            ======================================================== */}
        <section className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-red/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Real Project Image */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <ScrollReveal direction="up" delay={0.1}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 hover:border-brand-red/50 bg-neutral-900 shadow-xl group transition-all duration-500">
                  <img
                    src="/images/projects/modern-luxury-residence.png"
                    alt="Modern Luxury Residential Development by BNS Development"
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
                tag="EXPERIENCE"
                title={<span className="text-white">Residential Construction With</span>}
                highlight={<span className="text-brand-red">Experience Behind It</span>}
                theme="dark"
                scaleColor="red"
              />

              <div className="space-y-4 text-sm sm:text-base font-sans leading-relaxed">
                <ScrollWordReveal
                  text="Every residential project has its own requirements, from site considerations and planning to coordination, scheduling and construction."
                  colorRevealed="#a8a8a0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  delay={0.06}
                  className="font-medium text-base sm:text-lg text-[#a8a8a0]"
                />
                <ScrollWordReveal
                  text="Our team brings experience across residential and multifamily construction environments, giving clients access to a broader construction perspective throughout the project."
                  colorRevealed="#a8a8a0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  delay={0.18}
                  className="text-[#a8a8a0]"
                />
                <ScrollWordReveal
                  text="We focus on communication, coordination and practical project management to help keep residential projects moving forward."
                  colorRevealed="#a8a8a0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  delay={0.3}
                  className="text-[#a8a8a0]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            3. RESIDENTIAL SERVICES (4 Core Disciplines Verbatim)
            ======================================================== */}
        <section className="space-y-10">
          <SectionHeading
            tag="SERVICES"
            title={<span className="text-white">Residential</span>}
            highlight={<span className="text-brand-red">Services</span>}
            theme="dark"
            scaleColor="red"
            centered={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {residentialServices.map((svc, idx) => {
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
            4. OUR RESIDENTIAL APPROACH (Pictorial Showcase - 4 Steps)
            ======================================================== */}
        <section className="space-y-8">
          <SectionHeading
            tag="APPROACH"
            title={<span className="text-white">Our Residential</span>}
            highlight={<span className="text-brand-red">Approach</span>}
            theme="dark"
            scaleColor="red"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pictorialApproach.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.06} direction="up">
                <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 hover:border-brand-red/60 transition-all duration-500 shadow-2xl flex flex-col justify-between p-6 sm:p-8 hover:-translate-y-1.5 hover-beam-card min-h-[300px] sm:min-h-[340px]">
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

                  {/* Bottom Row: Exact Step Title & Description */}
                  <div className="relative z-10 space-y-2 mt-auto pt-8">
                    <div className="w-8 h-[2px] bg-brand-red group-hover:w-16 transition-all duration-300" />
                    <h4 className="font-semibold font-display text-white group-hover:text-brand-red transition-colors leading-snug tracking-tight text-xl">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-[13px] text-[#a8a8a0] leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ========================================================
            5. BUILDING MORE THAN STRUCTURES
            ======================================================== */}
        <section className="relative p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/40 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <SectionHeading
                tag="PHILOSOPHY"
                title={<span className="text-white">Building More Than</span>}
                highlight={<span className="text-brand-red">Structures</span>}
                theme="dark"
                scaleColor="red"
              />

              <div className="space-y-4 text-base sm:text-lg font-sans leading-relaxed">
                <ScrollWordReveal
                  text="Residential projects ultimately become homes, communities and long-term investments."
                  colorRevealed="#a8a8a0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  delay={0.06}
                  className="font-medium text-[#a8a8a0]"
                />
                <ScrollWordReveal
                  text="That's why we approach every project with an understanding that the work matters beyond the construction site."
                  colorRevealed="#a8a8a0"
                  colorHidden="rgba(168, 168, 160, 0.25)"
                  delay={0.22}
                  className="text-[#a8a8a0]"
                />
              </div>
            </div>

            {/* Real Project Image */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="up" delay={0.12}>
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 hover:border-brand-red/50 bg-neutral-900 shadow-xl group transition-all duration-500">
                  <img
                    src="/images/projects/contemporary-villa-interior.png"
                    alt="Contemporary Villa Interior Architecture by BNS Development"
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
            6. PLANNING A RESIDENTIAL PROJECT? (Closing CTA)
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
              className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-1000 ease-out scale-105 group-hover:scale-110 opacity-60 group-hover:opacity-75"
              onEnded={(e) => {
                e.currentTarget.currentTime = 0;
                e.currentTarget.play().catch(() => {});
              }}
            >
              <source src="/videos/cta-bg.mp4" type="video/mp4" />
            </video>
            {/* Cinematic dark gradient vignette overlays for contrast and brand styling */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080A]/90 via-[#07080A]/60 to-[#07080A]/85 pointer-events-none" />
            <div className="absolute inset-0 bg-radial-gradient from-brand-red/15 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="max-w-2xl mx-auto space-y-5 relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold tracking-tight">
              <span className="text-white">Planning a</span>{' '}
              <span className="text-brand-red">Residential Project?</span>
            </h2>

            <div className="pt-2 flex justify-center">
              <EyeFollowButton
                onClick={handleContactNav}
                size="lg"
                icon="none"
                className="font-mono text-xs uppercase tracking-wider font-bold"
              >
                Let's Talk
              </EyeFollowButton>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

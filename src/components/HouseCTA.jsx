import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { ConstructionScaleSVG } from './SectionHeading';
import PremiumGlassButton from './PremiumGlassButton';

export default function HouseCTA({ onStartProject }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.loop = true;
      video.playsInline = true;
      video.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-16 sm:py-24">
      <ScrollReveal direction="up" distance={30} delay={0.1}>
        {/* Outer Frame */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative rounded-3xl overflow-hidden bg-[#07080A] border border-white/10 shadow-2xl transition-all duration-700 group"
        >
          {/* Background CTA Video (CTA Background.mp4 at 75% opacity) */}
          <div className="absolute inset-0 z-0 overflow-hidden bg-[#07080A]">
            <video
              ref={videoRef}
              src="/videos/CTA%20Background.mp4"
              autoPlay
              loop
              muted
              playsInline
              webkit-playsinline="true"
              disablePictureInPicture
              className="w-full h-full object-cover object-center pointer-events-none transition-transform duration-1000 ease-out scale-105 group-hover:scale-110"
              style={{ opacity: 0.75 }}
              onEnded={(e) => {
                e.currentTarget.currentTime = 0;
                e.currentTarget.play().catch(() => {});
              }}
            >
              <source src="/videos/CTA%20Background.mp4" type="video/mp4" />
              <source src="/videos/cta-bg.mp4" type="video/mp4" />
            </video>
            {/* Softened black vignette for maximum video clarity */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080A]/60 via-black/25 to-[#07080A]/60 pointer-events-none" />
          </div>

          {/* Foreground CTA Content Centered inside the Laser Frame */}
          <div className="relative z-10 p-8 sm:p-14 lg:p-20 text-center flex flex-col items-center justify-center min-h-[460px] sm:min-h-[540px]">
            {/* Top Monospace Badge with Construction Scale SVG */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-red/70 bg-black/70 backdrop-blur-md text-brand-red font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-6 sm:mb-8">
              <ConstructionScaleSVG color="red" />
              <span>PROJECT INITIATION</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-display font-semibold text-brand-heading tracking-[0.03em] uppercase leading-[1.15] max-w-4xl mx-auto">
              READY TO TALK ABOUT{' '}
              <span className="text-brand-red">
                YOUR PROJECT?
              </span>
            </h2>

            {/* Sub-text Narrative (Static text, no scroll removal/reveal animation) */}
            <div className="mt-4 sm:mt-6 max-w-2xl mx-auto">
              <p className="text-sm sm:text-base lg:text-lg text-[#A8A8A0] font-sans leading-relaxed text-center">
                Whether you're at the beginning of an idea or preparing to break ground, we'd like to understand what you're building and where you are in the process.
              </p>
            </div>

            {/* Interactive Premium Fluid Glass CTA Button */}
            <div className="mt-8 sm:mt-10">
              <PremiumGlassButton
                onClick={onStartProject}
                size="md"
                baseColor="#000000"
                glassColor="#ffffff"
                hoverSpeed={0.7}
              >
                START A CONVERSATION
              </PremiumGlassButton>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

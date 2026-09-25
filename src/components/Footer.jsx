import React, { useState } from 'react';
import { ArrowUp, Shield, MapPin, Mail, Phone } from 'lucide-react';
import LegalModal from './LegalModal';
import ArchitecturalFooterIllustration from './ArchitecturalFooterIllustration';
import { ConstructionScaleSVG } from './SectionHeading';

export default function Footer({ setActivePage }) {
  const [legalModalType, setLegalModalType] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative bg-[#07080A] pt-16 pb-12 overflow-hidden z-20 text-white">
        <ArchitecturalFooterIllustration />
        <div className="absolute inset-0 bg-[#07080A] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">

            {/* ── Left: Brand + Social ── */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <button onClick={() => handleNav('home')} className="focus:outline-none block mb-3 cursor-pointer" aria-label="BNS Development">
                  <img
                    src="/logos/BNS LOGO-01.svg"
                    alt="BNS DEVELOPMENT"
                    className="h-10 sm:h-12 w-auto object-contain"
                  />
                </button>

                <p className="text-sm text-brand-body max-w-md font-sans leading-relaxed">
                  A premier construction and real estate development enterprise operating across Florida and Texas. With 35+ years of verified executive leadership and $800M+ in delivered volume, our standard is unwavering:{' '}
                  <span className="text-brand-heading font-semibold">Build It Right.</span>
                </p>
              </div>

              {/* Social Media */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ConstructionScaleSVG color="red" />
                  <h5 className="text-[10px] font-mono tracking-widest text-brand-red uppercase font-semibold">FOLLOW US</h5>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    className="w-8 h-8 rounded-md flex items-center justify-center bg-white/[0.04] border border-white/10 hover:border-brand-red hover:bg-brand-red/15 hover:text-white text-neutral-400 transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title="Instagram"
                    className="w-8 h-8 rounded-md flex items-center justify-center bg-white/[0.04] border border-white/10 hover:border-brand-red hover:bg-brand-red/15 hover:text-white text-neutral-400 transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    title="X (Twitter)"
                    className="w-8 h-8 rounded-md flex items-center justify-center bg-white/[0.04] border border-white/10 hover:border-brand-red hover:bg-brand-red/15 hover:text-white text-neutral-400 transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    title="Facebook"
                    className="w-8 h-8 rounded-md flex items-center justify-center bg-white/[0.04] border border-white/10 hover:border-brand-red hover:bg-brand-red/15 hover:text-white text-neutral-400 transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* ── Right: Nav | Services | Contact & Offices ── */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">

              {/* Navigation */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <ConstructionScaleSVG color="red" />
                  <h4 className="text-xs font-mono tracking-widest text-brand-red uppercase font-semibold">NAVIGATION</h4>
                </div>
                <ul className="space-y-2.5 text-sm text-brand-body">
                  <li>
                    <button onClick={() => handleNav('home')} className="hover:text-brand-heading transition-colors">Home</button>
                  </li>
                  <li>
                    <button onClick={() => handleNav('about')} className="hover:text-brand-heading transition-colors">About Us</button>
                  </li>
                  <li><button onClick={() => handleNav('services')} className="hover:text-brand-heading transition-colors">Services</button></li>
                  <li><button onClick={() => handleNav('work')} className="hover:text-brand-heading transition-colors">Work</button></li>
                  <li><button onClick={() => handleNav('careers')} className="hover:text-brand-heading transition-colors">Careers</button></li>
                  <li><button onClick={() => handleNav('subcontractors')} className="hover:text-brand-heading transition-colors">Subcontractors</button></li>
                  <li>
                    <button onClick={() => handleNav('contact')} className="hover:text-brand-heading transition-colors">Contact Us</button>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <ConstructionScaleSVG color="red" />
                  <h4 className="text-xs font-mono tracking-widest text-brand-red uppercase font-semibold">SERVICES</h4>
                </div>
                <ul className="space-y-2.5 text-sm text-brand-body">
                  <li className="cursor-default select-none">Preconstruction</li>
                  <li className="cursor-default select-none">Design-Build Delivery</li>
                  <li className="cursor-default select-none">Residential Development</li>
                  <li className="cursor-default select-none">Tenant Improvements</li>
                  <li className="cursor-default select-none">Ground Up Construction</li>
                </ul>
              </div>

              {/* Contact & Offices — merged column */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <ConstructionScaleSVG color="red" />
                  <h4 className="text-xs font-mono tracking-widest text-brand-red uppercase font-semibold">CONTACT &amp; OFFICES</h4>
                </div>
                <ul className="space-y-2.5 text-xs text-brand-body">
                  <li className="flex items-center gap-2 font-mono">
                    <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
                    <a href="tel:7863683009" className="hover:text-brand-heading transition-colors">(786) 368-3009</a>
                  </li>
                  <li className="flex items-center gap-2 font-mono">
                    <Mail className="w-3.5 h-3.5 text-brand-red shrink-0" />
                    <a href="mailto:brad@achillesgc.com" className="hover:text-brand-heading transition-colors truncate">brad@achillesgc.com</a>
                  </li>
                  <li className="pt-1 border-t border-white/10" />
                  <li>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                      <div>
                        <p className="text-brand-subheading font-medium text-[11px] uppercase tracking-wider">South Florida HQ</p>
                        <p className="text-brand-mutedText text-[11px]">Miami · Fort Lauderdale · Palm Beach</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                      <div>
                        <p className="text-brand-subheading font-medium text-[11px] uppercase tracking-wider">Central Texas Ops</p>
                        <p className="text-brand-mutedText text-[11px]">Austin · Dallas-Fort Worth Metro</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-steel/70">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 text-center md:text-left">
              <span>© {new Date().getFullYear()} BNS DEVELOPMENT LLC. ALL RIGHTS RESERVED.</span>
              <span>•</span>
              <button onClick={() => setLegalModalType('privacy')} className="hover:text-white transition-colors underline">PRIVACY POLICY</button>
              <span>•</span>
              <button onClick={() => setLegalModalType('terms')} className="hover:text-white transition-colors underline">Terms &amp; Conditions</button>
              <span>•</span>
              <span className="text-neutral-400">Design and Developed by GA Digital Solutions</span>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-graphite hover:bg-brand-red text-white transition-all focus:outline-none shrink-0"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {legalModalType && (
        <LegalModal type={legalModalType} onClose={() => setLegalModalType(null)} />
      )}
    </>
  );
}

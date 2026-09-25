import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight, CheckCircle2, Shield, Send } from 'lucide-react';
import SectionHeading, { ConstructionScaleSVG } from '../components/SectionHeading';
// import SphericalArcs from '../components/SphericalArcs'; // Hidden for now as requested
import EyeFollowButton from '../components/EyeFollowButton';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    serviceNeeded: '',
    budgetRange: '',
    timeline: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 350, behavior: 'smooth' });
  };

  return (
    <div className="relative pt-24 sm:pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================
            HERO
            ======================================================== */}
        <section className="mb-8 sm:mb-12">
          <SectionHeading
            tag="INITIATE PROJECT INQUIRY"
            title="Let's Build What's Next,"
            highlight="Together."
            description="Whether you are assessing land acquisition feasibility, seeking a single-source Design-Build partner, or preparing a commercial GMP tender in Florida or Texas, our Managing Partners are directly accessible."
            theme="dark"
            scaleColor="red"
          />
        </section>

        {/* ========================================================
            REGIONAL HUBS & DIRECT DESK
            Three-column balanced executive contact strip
            ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-12 sm:mb-16">
          {/* Florida Operations */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col justify-between space-y-4 hover:border-brand-red/40 transition-all duration-300 hover-beam-card">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-brand-red uppercase tracking-widest font-bold">
                  FLORIDA OPERATIONS
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-neutral-300">
                  CGC 1505391
                </span>
              </div>
              <h4 className="text-lg font-semibold font-display text-brand-subheading">
                Miami &amp; South Florida Hub
              </h4>
            </div>
            <div className="space-y-2 text-xs text-brand-body font-mono pt-2 border-t border-white/5">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <a href="tel:7863683009" className="hover:text-brand-red transition-colors">
                  (786) 368-3009 (Bradford Smith)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <a href="mailto:brad@achillesgc.com" className="hover:text-brand-red transition-colors truncate">
                  brad@achillesgc.com
                </a>
              </div>
            </div>
          </div>

          {/* Texas Operations */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col justify-between space-y-4 hover:border-brand-red/40 transition-all duration-300 hover-beam-card">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-brand-red uppercase tracking-widest font-bold">
                  TEXAS OPERATIONS
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-neutral-300">
                  CENTRAL TX
                </span>
              </div>
              <h4 className="text-lg font-semibold font-display text-brand-subheading">
                Austin &amp; Hill Country Hub
              </h4>
            </div>
            <div className="space-y-2 text-xs text-brand-body font-mono pt-2 border-t border-white/5">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <a href="tel:9044797977" className="hover:text-brand-red transition-colors">
                  (904) 479-7977 (Aravind Vangala)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <a href="mailto:contact@bnsdevelopment.com" className="hover:text-brand-red transition-colors truncate">
                  contact@bnsdevelopment.com
                </a>
              </div>
            </div>
          </div>

          {/* Executive Direct Desk */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col justify-between space-y-4 hover:border-brand-red/40 transition-all duration-300 hover-beam-card">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-brand-red uppercase tracking-widest font-bold">
                  EXECUTIVE DESK
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-brand-red/10 border border-brand-red/30 text-brand-red font-bold">
                  24H RESPONSE
                </span>
              </div>
              <h4 className="text-lg font-semibold font-display text-brand-subheading">
                Direct Managing Partner
              </h4>
            </div>
            <div className="space-y-2 text-xs text-brand-body font-mono pt-2 border-t border-white/5">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <a href="tel:7863683009" className="hover:text-brand-red transition-colors">
                  (786) 368-3009 (Direct Line)
                </a>
              </div>
              <div className="flex items-center justify-between pt-0.5">
                <span className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>PARTNER DESK: ACTIVE</span>
                </span>
                <span className="text-[10px] text-neutral-500">AUSTIN • DALLAS • MIAMI</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================
            PROJECT INITIATION BRIEF FORM
            Centered, full-featured executive form
            ======================================================== */}
        {/* Note: 3D Geodesic Matrix is temporarily hidden as requested */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="p-6 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-brand-red/10 border border-brand-red flex items-center justify-center mx-auto text-brand-red">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold font-display text-white">
                    Inquiry Received
                  </h3>
                  <p className="text-sm text-brand-body max-w-md mx-auto font-sans leading-relaxed">
                    Thank you. Your project brief has been routed directly to Bradford Smith and Aravind Vangala. Our executive team will review your parameters and follow up within one business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono uppercase font-bold text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                      PROJECT INITIATION BRIEF
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">DIRECT EXECUTIVE DESK</span>
                  </div>

                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-neutral-300 uppercase tracking-wider block">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marcus Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-brand-red transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-neutral-300 uppercase tracking-wider block">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Vance Capital Partners"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-brand-red transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-neutral-300 uppercase tracking-wider block">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-brand-red transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-neutral-300 uppercase tracking-wider block">
                        Direct Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-brand-red transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Project Type & Estimated Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-neutral-300 uppercase tracking-wider block">
                        Development Sector / Type
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Multifamily, Commercial, Luxury Estate"
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-brand-red transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-neutral-300 uppercase tracking-wider block">
                        Estimated Budget / Capital Range
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. $5M – $25M+"
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-brand-red transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 4: Project Scope & Brief Message */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-neutral-300 uppercase tracking-wider block">
                      Project Parameters &amp; Objectives *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please outline site location, gross square footage, zoning status, target groundbreaking date, or specific construction scope..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-brand-red transition-colors resize-none font-sans"
                    />
                  </div>

                  {/* Submit Button with Eye-Follow Effect */}
                  <div className="pt-2">
                    <EyeFollowButton
                      type="submit"
                      variant="red"
                      size="lg"
                      icon="none"
                      className="w-full justify-center"
                    >
                      TRANSMIT INQUIRY TO MANAGING PARTNERS
                    </EyeFollowButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
  );
}

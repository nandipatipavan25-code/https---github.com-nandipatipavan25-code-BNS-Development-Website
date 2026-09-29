import React, { useState } from 'react';
import { Phone, Mail, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
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
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 flex-wrap gap-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-white font-bold">
                      PROJECT INITIATION BRIEF
                    </span>
                    <div className="flex items-center gap-4 text-[11px] font-mono text-neutral-400">
                      <a
                        href="tel:7863683009"
                        className="hover:text-brand-red transition-colors flex items-center gap-1.5"
                      >
                        <Phone className="w-3 h-3 text-brand-red" />
                        <span>(786) 368-3009</span>
                      </a>
                      <a
                        href="mailto:contact@bns-development.com"
                        className="hover:text-brand-red transition-colors flex items-center gap-1.5"
                      >
                        <Mail className="w-3 h-3 text-brand-red" />
                        <span>contact@bns-development.com</span>
                      </a>
                    </div>
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

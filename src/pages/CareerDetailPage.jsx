import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  MapPin,
  DollarSign,
  CheckCircle2,
  Briefcase,
  Clock,
  Award,
  Upload,
  Heart,
  Sparkles,
  Share2,
  Check,
  Building2,
  Users
} from 'lucide-react';
import { jobsData } from '../data/jobs';
import SectionHeading, { ConstructionScaleSVG } from '../components/SectionHeading';
import ScrollReveal from '../components/ScrollReveal';
import PremiumGlassButton from '../components/PremiumGlassButton';
import EyeFollowButton from '../components/EyeFollowButton';

export default function CareerDetailPage({
  job,
  setActivePage,
  setSelectedJob
}) {
  // Determine active job from prop, query parameter, or fallback to first job
  const getJob = () => {
    if (job) return job;
    if (typeof window !== 'undefined') {
      const searchStr = window.location.search || (window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '');
      const params = new URLSearchParams(searchStr);
      const id = params.get('id');
      if (id) {
        const found = jobsData.find((j) => j.id === id);
        if (found) return found;
      }
    }
    return jobsData[0];
  };

  const activeJob = getJob();

  // Application form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    portfolio: '',
    yearsExp: '',
    coverNote: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        portfolio: '',
        yearsExp: '',
        coverNote: '',
      });
    }, 3500);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const perks = [
    {
      icon: <DollarSign className="w-5 h-5 text-brand-red" />,
      title: 'Top-Tier Compensation',
      desc: 'Base salaries benchmarked above industry medians + milestone completion bonuses.',
    },
    {
      icon: <Heart className="w-5 h-5 text-brand-red" />,
      title: '100% Healthcare Coverage',
      desc: 'Full medical, dental, and vision health plans for all full-time team members.',
    },
    {
      icon: <Award className="w-5 h-5 text-brand-red" />,
      title: 'Licensure & CEUs',
      desc: 'Full company sponsorship for Florida GC, OSHA 30, and LEED AP certifications.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brand-red" />,
      title: 'Executive Autonomy',
      desc: 'Direct access to Managing Partners with autonomy to lead operations without red tape.',
    },
  ];

  const otherJobs = jobsData.filter((j) => j.id !== activeJob.id);

  return (
    <div className="relative pt-24 sm:pt-32 pb-24 overflow-hidden bg-transparent text-white min-h-screen">
      {/* Background Architectural Glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Top Breadcrumb & Return Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 relative z-10">
        <div className="flex items-center justify-between">
          <PremiumGlassButton
            onClick={() => {
              setActivePage('careers');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            size="sm"
            baseColor="#07080A"
            glassColor="#ffffff"
            hoverSpeed={0.65}
            icon={<ArrowLeft className="w-3.5 h-3.5 text-neutral-300" />}
          >
            BACK TO ALL OPENINGS
          </PremiumGlassButton>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-brand-red/60 text-xs font-mono text-neutral-300 hover:text-white transition-all cursor-pointer"
              title="Copy role link"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5 text-brand-red" />}
              <span>{copied ? 'LINK COPIED' : 'SHARE POSITION'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 relative z-10">

        {/* ========================================================
            1. HERO: Position Overview & Quick Apply CTA
            ======================================================== */}
        <section className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-red/15 border border-brand-red/40 text-brand-red font-mono text-xs uppercase font-bold tracking-wider">
                <ConstructionScaleSVG color="red" />
                {activeJob.department}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 font-mono text-xs">
                <MapPin className="w-3.5 h-3.5 text-brand-red" />
                {activeJob.location}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 font-mono text-xs">
                <Briefcase className="w-3.5 h-3.5 text-neutral-400" />
                {activeJob.type}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-300 font-mono text-xs">
                <Clock className="w-3.5 h-3.5 text-neutral-400" />
                {activeJob.experience}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-display font-semibold text-brand-heading tracking-tight leading-[1.12]">
              {activeJob.title}
            </h1>

            <div className="pt-1 flex items-center gap-3">
              <span className="px-4 py-1.5 rounded-xl bg-white/[0.06] border border-white/15 text-brand-red font-mono text-sm sm:text-base font-bold shadow-lg">
                {activeJob.salary}
              </span>
            </div>

            <p className="text-sm sm:text-base text-brand-subtext font-sans leading-relaxed max-w-4xl pt-2">
              {activeJob.description}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <PremiumGlassButton
              onClick={() => {
                const el = document.getElementById('apply-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              size="md"
            >
              APPLY FOR THIS ROLE
            </PremiumGlassButton>
            <PremiumGlassButton
              onClick={() => {
                setActivePage('careers');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              size="md"
              baseColor="#07080A"
              glassColor="#ffffff"
            >
              VIEW ALL OPEN POSITIONS
            </PremiumGlassButton>
          </div>
        </section>

        {/* ========================================================
            2. DETAILED SPECS: Responsibilities & Requirements
            ======================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* Key Responsibilities */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-red/15 border border-brand-red/40 flex items-center justify-center text-brand-red">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-brand-subheading">
                Key Responsibilities
              </h2>
            </div>
            <ul className="space-y-4">
              {activeJob.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-red shrink-0 mt-2" />
                  <span className="text-sm sm:text-[15px] text-brand-body leading-relaxed font-sans">
                    {resp}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Position Requirements */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-red/15 border border-brand-red/40 flex items-center justify-center text-brand-red">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-semibold text-white">
                Required Qualifications
              </h2>
            </div>
            <ul className="space-y-4">
              {activeJob.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-red shrink-0 mt-2" />
                  <span className="text-sm sm:text-[15px] text-brand-body leading-relaxed font-sans">
                    {req}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ========================================================
            3. BENEFITS & THE BNS STANDARD
            ======================================================== */}
        <section className="space-y-8">
          <SectionHeading
            tag="THE BNS STANDARD"
            title="Benefits &"
            highlight="Total Rewards."
            description="Our leadership structure rewards top-caliber builders with industry-leading packages and career longevity."
            theme="dark"
            scaleColor="red"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-xl space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center text-brand-red">
                  {perk.icon}
                </div>
                <h3 className="text-base font-semibold font-display text-white">
                  {perk.title}
                </h3>
                <p className="text-xs text-brand-body leading-relaxed font-sans">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================
            4. APPLICATION FORM
            ======================================================== */}
        <section id="apply-form" className="max-w-3xl mx-auto pt-6">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0C0E12] border border-white/15 backdrop-blur-2xl shadow-2xl space-y-8">
            <div className="border-b border-white/10 pb-6">
              <span className="text-xs font-mono text-brand-red uppercase tracking-widest font-bold">
                DIRECT APPLICATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-semibold text-white mt-1">
                Apply for {activeJob.title}
              </h2>
              <p className="text-sm text-brand-body mt-2 font-sans">
                Submit your credentials directly to BNS Executive Hiring. Confidentiality guaranteed.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold font-display text-white">
                  Application Successfully Received
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto font-sans leading-relaxed">
                  Thank you for submitting your credentials. Our Managing Partners will review your experience and follow up promptly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-300 uppercase mb-1">
                      Full Legal Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Johnathan Vance"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-neutral-300 uppercase mb-1">
                      Direct Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-neutral-300 uppercase mb-1">
                      Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(512) 000-0000"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-neutral-300 uppercase mb-1">
                      Years of Experience
                    </label>
                    <input
                      type="text"
                      value={formData.yearsExp}
                      onChange={(e) => setFormData({ ...formData, yearsExp: e.target.value })}
                      placeholder="e.g. 12 Years"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-300 uppercase mb-1">
                    LinkedIn / Portfolio URL
                  </label>
                  <input
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-300 uppercase mb-1">
                    Resume Attachment (PDF or DOCX)
                  </label>
                  <div className="p-4 rounded-xl border border-dashed border-white/20 bg-white/[0.02] text-center cursor-pointer hover:border-brand-red transition-colors">
                    <Upload className="w-5 h-5 text-brand-red mx-auto mb-1" />
                    <span className="text-xs text-neutral-400">Click to select resume file or drag here</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-300 uppercase mb-1">
                    Brief Introduction / Note
                  </label>
                  <textarea
                    rows={3}
                    value={formData.coverNote}
                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    placeholder="Highlight relevant ground-up or commercial projects you've led..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-brand-red transition-colors resize-none font-sans"
                  />
                </div>

                <div className="pt-3 flex justify-end">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-full bg-brand-red text-white/80 text-xs font-mono uppercase font-bold tracking-wider hover:bg-brand-redDark hover:text-white transition-all shadow-xl shadow-brand-red/30 cursor-pointer"
                  >
                    SUBMIT APPLICATION
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* ========================================================
            5. OTHER OPPORTUNITIES
            ======================================================== */}
        {otherJobs.length > 0 && (
          <section className="space-y-8 pt-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-brand-red uppercase tracking-wider">OTHER POSITIONS</span>
                <h3 className="text-2xl font-display font-semibold text-white">Explore More Roles</h3>
              </div>
              <PremiumGlassButton
                onClick={() => {
                  setActivePage('careers');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                size="sm"
                baseColor="#07080A"
                glassColor="#ffffff"
              >
                VIEW ALL
              </PremiumGlassButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherJobs.slice(0, 3).map((oj) => (
                <div
                  key={oj.id}
                  onClick={() => {
                    if (setSelectedJob) setSelectedJob(oj);
                    const targetUrl = `/career-detail.html?id=${oj.id}`;
                    window.history.pushState({ page: 'career-detail', id: oj.id }, '', targetUrl);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-red/50 transition-all duration-300 backdrop-blur-xl shadow-xl cursor-pointer group hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-mono text-brand-red font-semibold">{oj.department}</span>
                    <h4 className="text-lg font-semibold font-display text-white group-hover:text-brand-red transition-colors">
                      {oj.title}
                    </h4>
                    <p className="text-xs text-brand-body line-clamp-2 font-sans">
                      {oj.description}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs font-mono text-neutral-400 border-t border-white/5 mt-4">
                    <span>{oj.location}</span>
                    <span className="text-white font-bold group-hover:text-brand-red transition-colors">VIEW ROLE →</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}

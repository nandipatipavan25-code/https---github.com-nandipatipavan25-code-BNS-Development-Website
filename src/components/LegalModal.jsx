import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield } from 'lucide-react';

export default function LegalModal({ type, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-black/90 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl bg-brand-graphite border border-brand-border rounded-2xl p-6 sm:p-8 z-10 text-brand-steel space-y-4 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex items-center justify-between pb-4 border-b border-brand-border text-brand-heading">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-red" />
              <h3 className="font-display font-semibold text-xl tracking-tight text-brand-heading">
                {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-brand-red text-brand-heading transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="text-xs font-mono text-brand-red">
            LAST REVISED: SEPTEMBER - 2026 // BNS DEVELOPMENT LLC
          </div>

          {isPrivacy ? (
            <div className="space-y-4 text-sm font-sans leading-relaxed text-brand-body">
              <p>
                BNS Development LLC respects your privacy. This policy outlines how information is gathered through project inquiries, subcontractor prequalification forms, and career applications.
              </p>
              <h4 className="text-brand-subheading font-semibold font-display">1. Information Collection</h4>
              <p>
                We only collect information voluntarily submitted by developers, clients, trade partners, and applicants (such as name, email address, corporate entity, project specifications, and bidding documentation).
              </p>
              <h4 className="text-brand-subheading font-semibold font-display">2. Use of Information</h4>
              <p>
                Data submitted via our website is strictly utilized to evaluate construction feasibility, respond to RFPs, establish trade subcontract agreements, and process employment opportunities. We never sell or license your information to third-party marketing entities.
              </p>
              <h4 className="text-brand-subheading font-semibold font-display">3. Security</h4>
              <p>
                All data transmission is encrypted via SSL/TLS protocol conforming to commercial enterprise standards.
              </p>
            </div>
          ) : (
            <div className="space-y-4 text-sm font-sans leading-relaxed text-brand-body">
              <p>
                Welcome to the BNS Development digital portal. By accessing or using this website, you agree to comply with and be bound by the following terms.
              </p>
              <h4 className="text-brand-subheading font-semibold font-display">1. Professional Licensure & Scope</h4>
              <p>
                General contracting services are executed under Florida Certified General Contractor License No. CGC 1505391 and corresponding municipal Texas contractor registrations.
              </p>
              <h4 className="text-brand-subheading font-semibold font-display">2. Intellectual Property</h4>
              <p>
                All architectural renderings, brand logos, custom photography, project data, and website source designs are the proprietary assets of BNS Development LLC.
              </p>
              <h4 className="text-brand-subheading font-semibold font-display">3. Project Estimates & Disclaimer</h4>
              <p>
                Information provided on this website represents past performance and capabilities. Official construction pricing and contract parameters are exclusively established through executed Guaranteed Maximum Price (GMP) or lump-sum contracts.
              </p>
            </div>
          )}

          <div className="pt-4 border-t border-brand-border flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full bg-brand-black hover:bg-brand-red text-white text-xs font-mono uppercase tracking-wider transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

/**
 * BNS DEVELOPMENT — GLOBAL CORE SCRIPT
 * Handles header scrolling, mobile drawer, scroll reveals, modal dialogs, and smooth interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initScrollReveals();
  initBackToTop();
  initLegalModals();
});

/* ── 1. Header Scroll Dynamics ── */
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  const logo = document.getElementById('header-logo');
  if (!header) return;

  const onScroll = () => {
    const isScrolled = window.scrollY > 30;
    if (isScrolled) {
      header.classList.add('bg-white/95', 'backdrop-blur-md', 'border-b', 'border-black/10', 'shadow-sm', 'py-2', 'sm:py-2.5');
      header.classList.remove('bg-gradient-to-b', 'from-[#FAFAF8]/95', 'via-[#FAFAF8]/80', 'to-transparent', 'py-3', 'sm:py-3.5');
      if (logo) {
        logo.classList.remove('h-[76px]', 'md:h-[96px]');
        logo.classList.add('h-[64px]', 'md:h-[76px]');
      }
    } else {
      header.classList.remove('bg-white/95', 'backdrop-blur-md', 'border-b', 'border-black/10', 'shadow-sm', 'py-2', 'sm:py-2.5');
      header.classList.add('bg-gradient-to-b', 'from-[#FAFAF8]/95', 'via-[#FAFAF8]/80', 'to-transparent', 'py-3', 'sm:py-3.5');
      if (logo) {
        logo.classList.remove('h-[64px]', 'md:h-[76px]');
        logo.classList.add('h-[76px]', 'md:h-[96px]');
      }
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── 2. Mobile Menu Drawer ── */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-menu-drawer');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');
  if (!toggleBtn || !drawer) return;

  let isOpen = false;

  const toggle = (force) => {
    isOpen = typeof force === 'boolean' ? force : !isOpen;
    if (isOpen) {
      drawer.classList.remove('hidden');
      requestAnimationFrame(() => {
        drawer.classList.remove('opacity-0', '-translate-y-4');
        drawer.classList.add('opacity-100', 'translate-y-0');
      });
      if (iconOpen) iconOpen.classList.add('hidden');
      if (iconClose) iconClose.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      drawer.classList.remove('opacity-100', 'translate-y-0');
      drawer.classList.add('opacity-0', '-translate-y-4');
      setTimeout(() => {
        drawer.classList.add('hidden');
      }, 250);
      if (iconOpen) iconOpen.classList.remove('hidden');
      if (iconClose) iconClose.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  toggleBtn.addEventListener('click', () => toggle());
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggle(false));
  });
}

/* ── 3. High-Performance IntersectionObserver Scroll Reveals ── */
function initScrollReveals() {
  const elements = document.querySelectorAll('.reveal-init');
  if (!elements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.12
    });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add('revealed'));
  }
}

/* ── 4. Back To Top ── */
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ── 5. Legal Modals (Privacy Policy & Terms) ── */
function initLegalModals() {
  const modal = document.getElementById('legal-modal');
  const modalTitle = document.getElementById('legal-modal-title');
  const modalBody = document.getElementById('legal-modal-body');
  const closeBtn = document.getElementById('legal-modal-close');
  if (!modal || !modalTitle || !modalBody) return;

  const content = {
    privacy: {
      title: "PRIVACY POLICY // BNS DEVELOPMENT LLC",
      body: `
        <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-2 font-mono">1. Information Collection &amp; Scope</h4>
        <p class="text-xs text-neutral-400 mb-4 leading-relaxed font-sans">
          BNS Development LLC collects project specifications, commercial procurement details, and corporate contact records submitted through our digital inquiry channels. Data submitted is strictly utilized to evaluate construction feasibility, respond to commercial RFPs, establish trade subcontract agreements, and process qualified partnerships.
        </p>
        <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-2 font-mono">2. Protection of Proprietary Data</h4>
        <p class="text-xs text-neutral-400 mb-4 leading-relaxed font-sans">
          We maintain institutional data governance across all digital and field operations. BNS Development does not sell, license, or distribute client or subcontractor information to third-party marketing entities.
        </p>
        <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-2 font-mono">3. Regulatory Compliance</h4>
        <p class="text-xs text-neutral-400 leading-relaxed font-sans">
          Our policies align with Florida and Texas commercial data governance frameworks. Direct all data privacy inquiries to legal@achillesgc.com.
        </p>
      `
    },
    terms: {
      title: "TERMS &amp; CONDITIONS // COMMERCIAL DISCLOSURES",
      body: `
        <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-2 font-mono">1. Licensure &amp; Contracting Authority</h4>
        <p class="text-xs text-neutral-400 mb-4 leading-relaxed font-sans">
          All general contracting, design-build, and construction management operations in Florida are executed under Florida Certified General Contractor License No. CGC 1505391. Texas operations are executed in compliance with municipal and state corporate statutes.
        </p>
        <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-2 font-mono">2. Estimates &amp; Preliminary Deliverables</h4>
        <p class="text-xs text-neutral-400 mb-4 leading-relaxed font-sans">
          All preliminary budgets, parametric models, and conceptual schedules provided prior to a formal Guaranteed Maximum Price (GMP) or lump-sum contract agreement are non-binding estimates subject to final architectural review and engineering verification.
        </p>
        <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-2 font-mono">3. Subcontractor Pre-Qualification</h4>
        <p class="text-xs text-neutral-400 leading-relaxed font-sans">
          Trade partners must execute standard master subcontract agreements, furnish valid certificates of insurance (COI) naming BNS Development as additional insured, and demonstrate verified OSHA compliance before entering active project sites.
        </p>
      `
    }
  };

  const openModal = (type) => {
    const data = content[type];
    if (!data) return;
    modalTitle.innerHTML = data.title;
    modalBody.innerHTML = data.body;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-open-modal]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(trigger.getAttribute('data-open-modal'));
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

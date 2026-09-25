/**
 * BNS DEVELOPMENT — ABOUT US SCRIPT
 * Handles executive person tab switching with instant DOM profile updates.
 */

const PROFILES = {
  bradford: {
    name: "Bradford Smith",
    tag: "// EXECUTIVE LEADERSHIP",
    title: "Florida Certified General Contractor (CGC 1505391)",
    image: "/assets/team/brad-smith.jpg",
    location: "AUSTIN, TX &amp; SOUTH FLORIDA",
    position: "President, BNS Development",
    credentialTag: "Florida Certified General Contractor",
    experience: "35+ Years Industry Experience",
    bio1: "With more than 35 years in the construction industry, Brad Smith brings veteran leadership in general contracting, large-scale construction management, operations, and owner's representation to BNS Development. Throughout his distinguished career, Brad has overseen a diverse portfolio spanning institutional, commercial, industrial, and residential projects across Florida and Texas.",
    bio2: "Known for his hands-on approach, commitment to quality, and ability to deliver complex projects on time and on budget, Brad provides the strategic direction and operational discipline that drive BNS Development's continued growth.",
    email: "bradford@bnsdevelopment.com",
    phone: "(786) 368-3009",
    certs: [
      {
        icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
        title: "Florida Certified General Contractor License",
        sub: "CGC 1505391"
      },
      {
        icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
        title: "OSHA 30-Hour Construction Safety &amp; Health",
        sub: "Workplace Safety"
      },
      {
        icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
        title: "Environmental Compliance Training",
        sub: "Construction &amp; Development"
      },
      {
        icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
        title: "Leadership &amp; Project Management",
        sub: "Industry Best Practices"
      }
    ]
  },
  aravind: {
    name: "Aravind Vangala",
    tag: "// CAPITAL PARTNERS &amp; INVESTMENTS",
    title: "Co-Founder &amp; Strategic Capital Partner",
    image: "/assets/team/aravind-vangala.jpg",
    location: "DALLAS / AUSTIN, TX",
    position: "Managing Partner &amp; Capital Strategist",
    credentialTag: "Executive Real Estate Capital Allocation",
    experience: "20+ Years Enterprise Leadership",
    bio1: "Aravind Vangala is an accomplished entrepreneur, investor, and business visionary with a proven track record of scaling multi-million dollar enterprises across real estate, engineering, and technology.",
    bio2: "As Managing Partner at BNS Development and CEO of PhiDimensions Inc., Aravind guides strategic capital deployment, joint-venture partnerships, and organizational modernization with a disciplined institutional approach.",
    email: "aravind@rphidimensions.com",
    phone: "(945) 444-0083",
    certs: [
      {
        icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
        title: "Enterprise Capital Allocation",
        sub: "$200M+ Asset Portfolio"
      },
      {
        icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
        title: "Joint-Venture Structuring",
        sub: "Institutional Governance"
      },
      {
        icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
        title: "Subdivision Land Development",
        sub: "Master-Planned Communities"
      },
      {
        icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
        title: "Global Enterprise Operations",
        sub: "US, UAE, Latin America"
      }
    ]
  },
  kylee: {
    name: "Kylee Nunnery",
    tag: "// CLIENT &amp; PARTNER ADVISORY",
    title: "Head of Client Relations &amp; Strategic Partner Alignment",
    image: "/assets/team/kylee-nunnery.jpg",
    location: "AUSTIN, TX &amp; CENTRAL TEXAS",
    position: "Client Experience &amp; Partner Advisory",
    credentialTag: "Stakeholder Relations &amp; Onboarding",
    experience: "100% Client Satisfaction Focus",
    bio1: "Kylee Nunnery spearheads Client Relations at BNS Development, ensuring every project experience is grounded in transparent communication, responsiveness, and genuine partnership.",
    bio2: "Serving as direct conduit between developers, architects, and field teams, Kylee ensures our standard of 'Your Success Is Part of the Scope' is delivered from preconstruction kickoff to final occupancy.",
    email: "kylee@bnsdevelopment.com",
    phone: "(786) 368-3009",
    certs: [
      {
        icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
        title: "Strategic Owner Communication",
        sub: "Stakeholder Alignment"
      },
      {
        icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
        title: "Preconstruction Onboarding",
        sub: "Milestone Reporting &amp; QA"
      },
      {
        icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
        title: "Trade Partner Coordination",
        sub: "Commercial Operations"
      },
      {
        icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
        title: "Community &amp; Client Relations",
        sub: "High-Satisfaction Delivery"
      }
    ]
  },
  manizha: {
    name: "Manizha Buribekova",
    tag: "// BUSINESS AFFILIATES &amp; EXPANSION",
    title: "Business Development Manager (MBA)",
    image: "/assets/team/manizha-buribekova.jpg",
    location: "SOUTH FLORIDA &amp; CENTRAL TEXAS",
    position: "Business Development Manager",
    credentialTag: "Master of Business Administration (MBA)",
    experience: "Commercial Real Estate &amp; Market Growth",
    bio1: "Manizha Buribekova drives market expansion across South Florida and Central Texas. Having co-founded Roepnack Corporation alongside Bradford Smith in 2018, she helped build a landmark commercial portfolio.",
    bio2: "With strategic brand acumen backed by her MBA, Manizha bridges institutional investors, trade subcontractors, and property owners to scale high-impact commercial and residential builds.",
    email: "manizha@bnsdevelopment.com",
    phone: "(786) 368-3009",
    certs: [
      {
        icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
        title: "Master of Business Administration (MBA)",
        sub: "Strategic Real Estate Marketing"
      },
      {
        icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
        title: "Landmark Portfolio Track Record",
        sub: "South Florida &amp; Central Texas"
      },
      {
        icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
        title: "Cross-Market Development",
        sub: "Commercial &amp; Hospitality"
      },
      {
        icon: `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
        title: "Trade Network Expansion",
        sub: "Strategic Partnerships"
      }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initBioTabs();
});

function initBioTabs() {
  const tabButtons = document.querySelectorAll('[data-person-tab]');
  const profileContainer = document.getElementById('bio-profile-card');
  if (!tabButtons.length || !profileContainer) return;

  const updateProfile = (key) => {
    const data = PROFILES[key];
    if (!data) return;

    // Update active tab styles
    tabButtons.forEach(btn => {
      const isCurrent = btn.getAttribute('data-person-tab') === key;
      const label = btn.querySelector('.tab-label');
      const dot = btn.querySelector('.tab-dot');

      if (isCurrent) {
        btn.className = "relative px-5 sm:px-6 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-colors duration-300 whitespace-nowrap bg-brand-red text-white font-bold shadow-md shadow-brand-red/30 flex items-center gap-2";
        if (dot) dot.classList.remove('hidden');
      } else {
        btn.className = "relative px-5 sm:px-6 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-colors duration-300 whitespace-nowrap text-neutral-500 hover:text-neutral-900 flex items-center gap-2";
        if (dot) dot.classList.add('hidden');
      }
    });

    // Animate profile card content update
    profileContainer.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => {
      // Photo
      const img = document.getElementById('bio-image');
      if (img) {
        img.src = data.image;
        img.alt = data.name;
      }

      // Specs
      const loc = document.getElementById('bio-location');
      if (loc) loc.innerHTML = data.location;
      const pos = document.getElementById('bio-position');
      if (pos) pos.innerHTML = data.position;
      const cred = document.getElementById('bio-credential');
      if (cred) cred.innerHTML = data.credentialTag;
      const exp = document.getElementById('bio-experience');
      if (exp) exp.innerHTML = data.experience;

      // Text
      const tag = document.getElementById('bio-tag');
      if (tag) tag.innerHTML = data.tag;
      const name = document.getElementById('bio-name');
      if (name) name.innerHTML = data.name;
      const title = document.getElementById('bio-title');
      if (title) title.innerHTML = data.title;
      const p1 = document.getElementById('bio-p1');
      if (p1) p1.innerHTML = data.bio1;
      const p2 = document.getElementById('bio-p2');
      if (p2) p2.innerHTML = data.bio2;

      // Certs Grid
      const certsContainer = document.getElementById('bio-certs-grid');
      if (certsContainer) {
        certsContainer.innerHTML = data.certs.map(c => `
          <div class="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50/80 border border-neutral-100">
            <div class="p-1.5 rounded-lg bg-brand-red/10 text-brand-red shrink-0 mt-0.5">
              ${c.icon}
            </div>
            <div>
              <h4 class="text-xs font-semibold text-neutral-900 leading-tight">
                ${c.title}
              </h4>
              <p class="text-[11px] text-neutral-500 mt-0.5 font-sans">
                ${c.sub}
              </p>
            </div>
          </div>
        `).join('');
      }

      // Contact Info
      const email = document.getElementById('bio-email');
      if (email) {
        email.href = `mailto:${data.email}`;
        email.querySelector('span').innerText = data.email;
      }
      const phone = document.getElementById('bio-phone');
      if (phone) {
        phone.href = `tel:${data.phone.replace(/[^0-9]/g, '')}`;
        phone.querySelector('span').innerText = data.phone;
      }

      profileContainer.classList.remove('opacity-0', 'translate-y-2');
    }, 180);
  };

  tabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.getAttribute('data-person-tab');
      updateProfile(key);
    });
  });
}

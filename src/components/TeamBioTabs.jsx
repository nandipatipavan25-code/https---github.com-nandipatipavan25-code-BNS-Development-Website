import React from 'react';
import { MapPin, Briefcase, Building2, Users, FileText, Shield, Landmark, Mail, Phone } from 'lucide-react';
import { ConstructionScaleSVG } from './SectionHeading';

const TEAM_MEMBERS = [
  { id: 'Bradford Smith', label: 'BRADFORD' },
  { id: 'Aravind Vangala', label: 'ARAVIND' },
  { id: 'Kylee Nunnery', label: 'KYLEE' },
  { id: 'Manizha Buribekova', label: 'MANIZHA' }
];

const PROFILE_DATA = {
  'Bradford Smith': {
    name: "Bradford Smith",
    tag: "EXECUTIVE LEADERSHIP",
    title: "Florida Certified General Contractor (CGC 1505391)",
    image: "/team/brad-smith.jpg",
    location: "AUSTIN, TX & SOUTH FLORIDA",
    position: "Managing Partner",
    credentialTag: "Florida Certified General Contractor",
    experience: "35+ Years Industry Experience",
    bioP1: "With more than 35 years in construction, Brad Smith brings extensive experience in general contracting, construction management, operations and owner's representation to BNS Development.",
    bioP2: "Throughout his career, Brad has overseen ground-up developments, building shells, renovations, multifamily, hospitality, mixed-use, condominium and commercial projects. His hands-on experience includes scheduling, contract administration, change-order evaluation, construction management and problem resolution.",
    email: "brad@bns-development.com",
    phone: "(786) 368-3009",
    certs: [
      {
        icon: FileText,
        title: "Florida Certified General Contractor License",
        subtitle: "CGC 1505391"
      },
      {
        icon: Shield,
        title: "OSHA 30-Hour Construction Safety & Health",
        subtitle: "Workplace Safety"
      },
      {
        icon: Landmark,
        title: "Environmental Compliance Training",
        subtitle: "Construction & Development"
      },
      {
        icon: Users,
        title: "Leadership & Project Management",
        subtitle: "Industry Best Practices"
      }
    ]
  },
  'Aravind Vangala': {
    name: "Aravind Vangala",
    tag: "CAPITAL PARTNERS & INVESTMENTS",
    title: "Co-Founder & Strategic Capital Partner",
    image: "/team/aravind-vangala.jpg",
    location: "DALLAS / AUSTIN, TX",
    position: "Managing Partner",
    credentialTag: "Executive Strategic Perspective",
    experience: "Enterprise Leadership & Innovation",
    bioP1: "Aravind Vangala is an entrepreneur, investor, and business visionary with extensive experience building and scaling organizations across technology, engineering, real estate and capital investment.",
    bioP2: "As Managing Partner at BNS Development and CEO of PhiDimensions Inc., Aravind guides strategic capital deployment, joint-venture partnerships, and organizational modernization across Florida and Texas.",
    email: "aravind@bns-development.com",
    phone: "(945) 444-0083",
    certs: [
      {
        icon: FileText,
        title: "Enterprise Capital Allocation",
        subtitle: "$200M+ Asset Portfolio"
      },
      {
        icon: Shield,
        title: "Joint-Venture Structuring",
        subtitle: "Institutional Governance"
      },
      {
        icon: Landmark,
        title: "Subdivision Land Development",
        subtitle: "Master-Planned Communities"
      },
      {
        icon: Users,
        title: "Global Enterprise Operations",
        subtitle: "US, UAE, Latin America"
      }
    ]
  },
  'Kylee Nunnery': {
    name: "Kylee Nunnery",
    tag: "CLIENT & PARTNER ADVISORY",
    title: "Head of Client Relations & Strategic Partner Alignment",
    image: "/team/kylee-nunnery.jpg",
    location: "AUSTIN, TX & CENTRAL TEXAS",
    position: "Client Experience & Partner Advisory",
    credentialTag: "Stakeholder Relations & Project Onboarding",
    experience: "100% Client Satisfaction Focus",
    bioP1: "Kylee Nunnery spearheads Client Relations at BNS Development, ensuring every project experience is grounded in transparent communication, responsiveness, and genuine partnership.",
    bioP2: "Serving as direct conduit between developers, architects, and field teams, Kylee ensures our standard of 'Your Success Is Part of the Scope' is delivered from preconstruction kickoff to final occupancy.",
    email: "knunnery@bns-development.com",
    phone: "(214) 537-3932",
    certs: [
      {
        icon: FileText,
        title: "Strategic Owner Communication",
        subtitle: "Stakeholder Alignment"
      },
      {
        icon: Shield,
        title: "Preconstruction Onboarding",
        subtitle: "Milestone Reporting & QA"
      },
      {
        icon: Landmark,
        title: "Trade Partner Coordination",
        subtitle: "Commercial Operations"
      },
      {
        icon: Users,
        title: "Community & Client Relations",
        subtitle: "High-Satisfaction Delivery"
      }
    ]
  },
  'Manizha Buribekova': {
    name: "Manizha Buribekova",
    tag: "BUSINESS AFFILIATES & EXPANSION",
    title: "Business Development Manager (MBA)",
    image: "/team/manizha-buribekova.jpg",
    location: "SOUTH FLORIDA & CENTRAL TEXAS",
    position: "Business Development",
    credentialTag: "Master of Business Administration (MBA)",
    experience: "Commercial Real Estate & Growth",
    bioP1: "Manizha brings experience across commercial real estate, hospitality, land development and general contracting. Her experience includes helping build and market Roepnack Corporation and contributing to the establishment and growth of BNS Development.",
    bioP2: "Her background in business development and marketing adds another perspective to how BNS approaches relationships, growth and project opportunities.",
    email: "manizha@bns-development.com",
    phone: "(202) 427-2005",
    certs: [
      {
        icon: FileText,
        title: "Master of Business Administration (MBA)",
        subtitle: "Strategic Real Estate Marketing"
      },
      {
        icon: Shield,
        title: "Landmark Portfolio Track Record",
        subtitle: "South Florida & Central Texas"
      },
      {
        icon: Landmark,
        title: "Cross-Market Development",
        subtitle: "Commercial & Hospitality"
      },
      {
        icon: Users,
        title: "Trade Network Expansion",
        subtitle: "Strategic Partnerships"
      }
    ]
  }
};

export default function TeamBioTabs({ onContactClick }) {
  return (
    <div className="w-full space-y-8 lg:space-y-10">
      {TEAM_MEMBERS.map((member, index) => {
        const profile = PROFILE_DATA[member.id];
        if (!profile) return null;

        return (
          <div
            key={member.id}
            id={member.id.toLowerCase().replace(/\s+/g, '-')}
            className="bg-white/[0.03] rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-xl hover:border-brand-red/40 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Portrait Photo & Specification Box */}
              <div className="lg:col-span-4 space-y-4">
                <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/10 bg-black/50 shadow-xl">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-full h-full object-cover object-top select-none"
                    style={{ objectPosition: 'top center' }}
                    loading="lazy"
                  />
                </div>

                {/* Spec list box */}
                <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] space-y-2.5 text-xs font-sans">
                  <div className="flex items-center gap-2.5 text-neutral-300">
                    <MapPin className="w-4 h-4 text-brand-red shrink-0" />
                    <span className="font-mono uppercase tracking-wide text-[11px]">{profile.location}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-neutral-300">
                    <Briefcase className="w-4 h-4 text-brand-red shrink-0" />
                    <span className="font-medium text-[11px]">{profile.position}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-neutral-300">
                    <Building2 className="w-4 h-4 text-brand-red shrink-0" />
                    <span className="font-medium text-[11px]">{profile.credentialTag}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-neutral-300">
                    <Users className="w-4 h-4 text-brand-red shrink-0" />
                    <span className="font-medium text-[11px]">{profile.experience}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Bio Narrative, Certifications & Direct Contact */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-black/60 border border-brand-red/50 text-[10px] font-mono text-brand-red uppercase tracking-wider mb-2">
                    <ConstructionScaleSVG color="red" />
                    <span>{profile.tag}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-display text-brand-heading tracking-tight mt-1">
                    {profile.name}
                  </h3>

                  <p className="text-sm font-sans text-brand-subtext mt-1">
                    {profile.title}
                  </p>

                  {/* Red divider rule */}
                  <div className="w-12 h-[2px] bg-brand-red my-4" />

                  {/* Bio text paragraphs */}
                  <div className="space-y-3 text-sm text-brand-body leading-relaxed font-sans">
                    <p>{profile.bioP1}</p>
                    <p>{profile.bioP2}</p>
                  </div>

                  {/* Direct Contact Bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5 pt-4 border-t border-white/10">
                    <a
                      href={`tel:${profile.phone.replace(/[^0-9]/g, '')}`}
                      className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 flex items-center gap-2.5 text-xs font-mono text-brand-body hover:text-brand-heading transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
                      <span>{profile.phone}</span>
                    </a>
                    <a
                      href={`mailto:${profile.email}`}
                      className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 flex items-center gap-2.5 text-xs font-mono text-brand-body hover:text-brand-heading transition-colors truncate"
                    >
                      <Mail className="w-3.5 h-3.5 text-brand-red shrink-0" />
                      <span className="truncate">{profile.email}</span>
                    </a>
                  </div>
                </div>

                {/* Verified Credentials 2x2 Grid */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block mb-3 font-semibold">
                    VERIFIED CREDENTIALS &amp; GOVERNANCE
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {profile.certs.map((c, idx) => {
                      const IconComp = c.icon;
                      return (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-3 hover:border-brand-red/30 transition-colors"
                        >
                          <div className="p-2 rounded-lg bg-brand-red/10 text-brand-red shrink-0">
                            <IconComp className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-semibold text-white leading-tight font-display truncate">
                              {c.title}
                            </div>
                            <div className="text-[11px] text-neutral-400 font-mono mt-0.5">
                              {c.subtitle}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BreathingNavbar from './components/BreathingNavbar';
import Footer from './components/Footer';
import ConstructionBackground from './components/ConstructionBackground';
import ServiceDetailModal from './components/ServiceDetailModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import WorkDetailPage from './pages/WorkDetailPage';
import CareersPage from './pages/CareersPage';
import SubcontractorsPage from './pages/SubcontractorsPage';
import ContactPage from './pages/ContactPage';
import CareerDetailPage from './pages/CareerDetailPage';
import DesignBuildPage from './pages/DesignBuildPage';
import PreconstructionPage from './pages/PreconstructionPage';
import ResidentialPage from './pages/ResidentialPage';

export default function App() {
  const getInitialPage = () => {
    if (typeof window === 'undefined') return 'home';
    const hash = window.location.hash.toLowerCase().replace('#', '');
    if (hash) {
      if (hash.includes('residential')) return 'residential';
      if (hash.includes('design-build')) return 'design-build';
      if (hash.includes('predevelopment') || hash.includes('preconstruction')) {
        if (hash.includes('preconstruction') && typeof window !== 'undefined') {
          window.history.replaceState({ page: 'predevelopment' }, '', '#predevelopment');
        }
        return 'predevelopment';
      }
      if (hash.includes('about-1')) return 'about-1';
      if (hash.includes('about-2')) return 'about-2';
      if (hash.includes('about-3')) return 'about-3';
      if (hash.includes('about')) return 'about-1';
      if (hash.includes('contact')) return 'contact';
      if (hash.includes('services')) return 'services';
      if (hash.includes('work-detail')) return 'work-detail';
      if (hash.includes('work')) return 'work';
      if (hash.includes('career-detail')) return 'career-detail';
      if (hash.includes('careers')) return 'careers';
      if (hash.includes('subcontractors')) return 'subcontractors';
      if (hash.includes('home')) return 'home';
    }
    const path = window.location.pathname.toLowerCase();
    if (path.includes('residential')) return 'residential';
    if (path.includes('design-build')) return 'design-build';
    if (path.includes('predevelopment') || path.includes('preconstruction')) return 'predevelopment';
    if (path.includes('about-1')) return 'about-1';
    if (path.includes('about-2')) return 'about-2';
    if (path.includes('about-3')) return 'about-3';
    if (path.includes('about')) return 'about-1';
    if (path.includes('contact')) return 'contact';
    if (path.includes('services-portfolio') || path.includes('services')) return 'services';
    if (path.includes('work-detail')) return 'work-detail';
    if (path.includes('work')) return 'work';
    if (path.includes('career-detail')) return 'career-detail';
    if (path.includes('careers')) return 'careers';
    if (path.includes('subcontractors')) return 'subcontractors';
    return 'home';
  };

  const [activePage, setActivePage] = useState(getInitialPage);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  // Sync window scroll and browser history on page change
  const handlePageChange = (page, extraQuery = '') => {
    const canonicalPage = page === 'preconstruction' ? 'predevelopment' : page;
    setActivePage(canonicalPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const isSinglePage =
      window.location.protocol === 'file:' ||
      window.location.pathname.endsWith('index.html') ||
      window.location.pathname === '/' ||
      !window.location.pathname.includes('.html') ||
      canonicalPage.startsWith('about') ||
      canonicalPage === 'design-build' ||
      canonicalPage === 'predevelopment' ||
      canonicalPage === 'residential';

    const targetUrl = isSinglePage
      ? `#${canonicalPage}${extraQuery ? `?${extraQuery}` : ''}`
      : `/${canonicalPage}.html${extraQuery ? `?${extraQuery}` : ''}`;

    if (window.location.hash !== targetUrl && window.location.pathname !== targetUrl) {
      window.history.pushState({ page: canonicalPage }, '', targetUrl);
    }
  };

  // Sync initial URL to #home if opened at root without hash
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const isSinglePage =
        window.location.protocol === 'file:' ||
        window.location.pathname.endsWith('index.html') ||
        window.location.pathname === '/' ||
        !window.location.pathname.includes('.html');

      if (isSinglePage && (!window.location.hash || window.location.hash === '#' || window.location.hash === '#/')) {
        window.history.replaceState({ page: 'home' }, '', '#home');
      }
    }
  }, []);

  // Handle browser Back / Forward buttons and Hash changes
  React.useEffect(() => {
    const handleNavigation = () => {
      setActivePage(getInitialPage());
    };
    window.addEventListener('popstate', handleNavigation);
    window.addEventListener('hashchange', handleNavigation);
    return () => {
      window.removeEventListener('popstate', handleNavigation);
      window.removeEventListener('hashchange', handleNavigation);
    };
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'about':
      case 'about-1':
        return <AboutPage setActivePage={handlePageChange} fontPreset={1} />;
      case 'about-2':
        return <AboutPage setActivePage={handlePageChange} fontPreset={2} />;
      case 'about-3':
        return <AboutPage setActivePage={handlePageChange} fontPreset={3} />;
      case 'design-build':
      case 'service-design-build':
        return <DesignBuildPage setActivePage={handlePageChange} />;
      case 'preconstruction':
      case 'predevelopment':
      case 'service-preconstruction':
        return <PreconstructionPage setActivePage={handlePageChange} />;
      case 'residential':
      case 'service-residential':
      case 'residential-services':
        return <ResidentialPage setActivePage={handlePageChange} />;
      case 'services':
        return (
          <ServicesPage
            setActivePage={handlePageChange}
            setSelectedService={setSelectedService}
          />
        );
      case 'work':
        return (
          <WorkPage
            setActivePage={handlePageChange}
            setSelectedProject={setSelectedProject}
          />
        );
      case 'work-detail':
        return (
          <WorkDetailPage
            project={selectedProject}
            setActivePage={handlePageChange}
            setSelectedProject={setSelectedProject}
          />
        );
      case 'careers':
        return (
          <CareersPage
            setActivePage={handlePageChange}
            setSelectedJob={setSelectedJob}
          />
        );
      case 'career-detail':
        return (
          <CareerDetailPage
            job={selectedJob}
            setActivePage={handlePageChange}
            setSelectedJob={setSelectedJob}
          />
        );
      case 'subcontractors':
        return <SubcontractorsPage setActivePage={handlePageChange} />;
      case 'contact':
        return <ContactPage />;
      case 'home':
      default:
        return (
          <HomePage
            setActivePage={handlePageChange}
            setSelectedProject={setSelectedProject}
            setSelectedService={setSelectedService}
          />
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#07080A] text-white selection:bg-brand-red selection:text-white flex flex-col justify-between overflow-x-hidden">
      {/* Interactive Architectural Canvas + Video Background (Bg video.mp4 throughout website) */}
      <ConstructionBackground
        showVideo={true}
        videoSrc={activePage === 'contact' ? '/videos/contact-bg-video.mp4' : '/videos/bg-video.mp4'}
        videoOpacity={activePage === 'contact' ? 0.20 : 0.75}
      />

      {/* Breathing Header / Navbar */}
      <BreathingNavbar
        activePage={activePage}
        setActivePage={handlePageChange}
      />

      {/* Animated Main Content Container */}
      <main className="relative z-10 flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderActivePage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Deep-Dive Service Specification Modal (if clicked) */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onContactClick={() => {
            setSelectedService(null);
            handlePageChange('contact');
          }}
        />
      )}

      {/* Architectural Footer */}
      <Footer setActivePage={handlePageChange} />
    </div>
  );
}

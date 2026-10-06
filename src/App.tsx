import React, { useEffect } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/AdminPanel';

export default function App() {
  // Set professional title dynamically
  useEffect(() => {
    document.title = "jean claude -- ingénieur logiciel & cybersécurité";
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PortfolioProvider>
      <div className="bg-black min-h-screen text-white overflow-x-clip select-none font-sans">
        
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Marquee Section */}
        <MarqueeSection />

        {/* 3. About Section */}
        <AboutSection />

        {/* 4. Education Section */}
        <EducationSection />

        {/* 5. Skills Section */}
        <SkillsSection />

        {/* 6. Projects Section */}
        <ProjectsSection />

        {/* 7. Contact Section */}
        <ContactSection />

        {/* 8. Premium colored contact Footer */}
        <Footer onScrollToTop={handleScrollToTop} />

        {/* Espace Privé: Secure Admin Dashboard */}
        <AdminPanel />

      </div>
    </PortfolioProvider>
  );
}

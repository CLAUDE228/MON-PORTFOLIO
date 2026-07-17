import React, { useState, useEffect } from 'react';
import { FadeIn } from './FadeIn';
import { usePortfolio } from '../context/PortfolioContext';
import { Shield } from 'lucide-react';

import profileWhiteShirt from '../assets/images/profile_white_shirt_1784311851948.jpg';
import profileBlueSuit from '../assets/images/profile_blue_suit_1784311865475.jpg';
import profileThoughtfulWatch from '../assets/images/profile_thoughtful_watch_1784311876964.jpg';

const slideImages = [
  profileWhiteShirt,
  profileBlueSuit,
  profileThoughtfulWatch
];

export const HeroSection: React.FC = () => {
  const { aboutMe, setAdminPanelOpen } = usePortfolio();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black select-none flex flex-col justify-between">
      
      {/* Background Slideshow (Diaporama) with smooth fade transitions */}
      <div className="absolute inset-0 z-0">
        {slideImages.map((imgUrl, index) => (
          <div
            key={imgUrl}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeSlide ? 'opacity-35' : 'opacity-0'
            }`}
          >
            <img
              src={imgUrl}
              alt={`Diaporama ${index + 1}`}
              className="w-full h-full object-cover object-center md:object-[right_35%_center]"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
        
        {/* Dynamic high-contrast gradients for readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80 md:hidden" />
      </div>

      {/* Subtle tech blueprint grid overlaid on top of slideshow */}
      <div 
        className="absolute inset-0 opacity-[0.08] z-0 pointer-events-none" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #4a4a4a 1px, transparent 1px),
            linear-gradient(to bottom, #4a4a4a 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Floating Pill-shaped Navbar */}
      <nav className="absolute z-20 px-6 md:px-10 pt-6 top-0 left-0 right-0 flex items-center justify-between gap-4">
        {/* Left Pill: interactive Admin trigger */}
        <button
          onClick={() => setAdminPanelOpen(true)}
          className="flex items-center gap-2 bg-neutral-900/95 hover:bg-neutral-800/95 backdrop-blur-md rounded-full pl-4 pr-6 py-3 border border-white/10 hover:border-white/20 transition-all shadow-lg cursor-pointer focus:outline-none group"
          title="Ouvrir l'espace privé"
        >
          <Shield size={14} className="text-white/40 group-hover:text-yellow-500 transition-colors" />
          <span className="text-white text-sm font-normal tracking-tight lowercase">
            jean claude
          </span>
        </button>

        {/* Center Pill (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-1 bg-neutral-900/95 backdrop-blur-md rounded-full px-3 py-2 border border-white/5 shadow-lg">
          <button
            onClick={() => handleScrollTo('about')}
            className="text-neutral-300 hover:text-white transition-colors text-xs px-4 py-2 rounded-full cursor-pointer focus:outline-none uppercase tracking-wider font-medium"
          >
            à propos
          </button>
          <button
            onClick={() => handleScrollTo('education')}
            className="text-neutral-300 hover:text-white transition-colors text-xs px-4 py-2 rounded-full cursor-pointer focus:outline-none uppercase tracking-wider font-medium"
          >
            parcours
          </button>
          <button
            onClick={() => handleScrollTo('skills')}
            className="text-neutral-300 hover:text-white transition-colors text-xs px-4 py-2 rounded-full cursor-pointer focus:outline-none uppercase tracking-wider font-medium"
          >
            compétences
          </button>
          <button
            onClick={() => handleScrollTo('projects')}
            className="text-neutral-300 hover:text-white transition-colors text-xs px-4 py-2 rounded-full cursor-pointer focus:outline-none uppercase tracking-wider font-medium"
          >
            projets
          </button>
        </div>

        {/* Right Button */}
        <button
          onClick={() => handleScrollTo('contact')}
          className="bg-white hover:bg-yellow-500 text-black text-xs font-semibold uppercase tracking-wider rounded-full px-6 py-3 transition-all cursor-pointer focus:outline-none shadow-md"
        >
          contact
        </button>
      </nav>

      {/* Main Stage Container - Centered typography layout with right-reveal background */}
      <div className="relative flex-1 z-10 flex items-center justify-start px-6 md:px-16 lg:px-24 pt-28 pb-16">
        <div className="max-w-3xl w-full text-left space-y-8">
          
          <FadeIn delay={0.1} z={10} y={30}>
            {/* Grand Display Title matching the luxury brand aesthetic */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[105px] font-extrabold tracking-tight text-white leading-[0.9] select-none uppercase">
              Port<span className="text-yellow-500">Folio</span>
            </h1>
          </FadeIn>

          {/* Bottom row: Name & bounded status tag */}
          <FadeIn delay={0.25} y={20} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-2">
            <span className="text-2xl sm:text-3xl font-semibold text-white tracking-wide uppercase">
              {aboutMe.fullname ? aboutMe.fullname.toUpperCase() : 'DOGBE KOMLA JEAN CLAUDE'}
            </span>
            
            {/* Outer bordered tag with gold text */}
            <div className="border border-white/10 hover:border-white/20 bg-neutral-950/40 px-5 py-2 rounded-lg transition-all duration-300 self-start sm:self-auto">
              <span className="text-xs sm:text-sm font-semibold text-yellow-500 tracking-wider uppercase">
                {aboutMe.title ? aboutMe.title.toUpperCase() : 'INFORMATICIEN - PROGRAMMEUR'}
              </span>
            </div>
          </FadeIn>

          {/* Third row: Small state / context */}
          <FadeIn delay={0.35} y={15} className="flex flex-col gap-1.5 border-l-2 border-yellow-500/40 pl-4">
            <span className="text-xs sm:text-sm text-yellow-500/80 font-mono tracking-widest uppercase">
              # IAI-TOGO (LICENCE PROFESSIONNELLE)
            </span>
            <span className="text-[10px] sm:text-xs text-white/40 font-mono uppercase tracking-widest">
              RÉSIDE À LOMÉ AU TOGO PRÉSENTEMENT
            </span>
          </FadeIn>

          {/* Little Floating indicator for slideshow */}
          <FadeIn delay={0.45} y={10} className="pt-4 flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">
              diaporama actif
            </span>
            <div className="flex gap-1">
              {slideImages.map((_, idx) => (
                <div 
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                    idx === activeSlide ? 'bg-yellow-500 scale-125' : 'bg-white/10'
                  }`}
                />
              ))}
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black z-10" />
    </section>
  );
};

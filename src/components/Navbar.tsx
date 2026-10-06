import React, { useState, useEffect } from 'react';
import { Menu, X, Clock, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lomeTime, setLomeTime] = useState('');

  // Live UTC/Lomé clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Lome',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setLomeTime(new Intl.DateTimeFormat('fr-TG', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Accueil', id: 'hero' },
    { label: 'Projets', id: 'projects' },
    { label: 'Compétences', id: 'skills' },
    { label: 'Parcours', id: 'education' },
    { label: 'À Propos', id: 'about' },
  ];

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1440px] mx-auto">
          {/* Bold Typography Pill-shaped Dark/Glass Navbar */}
          <nav className="bg-black/90 backdrop-blur-lg rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.5)] border border-white/10 px-4 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300">
            
            {/* LEFT: Logo & Nav Links */}
            <div className="flex items-center gap-2 sm:gap-6">
              {/* Premium Logo */}
              <button 
                onClick={() => onNavClick('hero')} 
                className="flex items-center gap-2 group cursor-pointer focus:outline-none"
                aria-label="Claude Studio Accueil"
              >
                <div className="w-10 h-10 rounded-full bg-[#F26522] flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-md">
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 256 256" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-500 group-hover:rotate-12"
                  >
                    <path 
                      fill="#FFFFFF" 
                      d="M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm font-black text-white leading-none tracking-tighter">CLAUDE</span>
                  <span className="text-[10px] text-white/50 font-mono tracking-widest leading-none mt-0.5">STUDIO</span>
                </div>
              </button>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-6 ml-4">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => onNavClick(link.id)}
                    className={`text-[13px] font-bold tracking-wide uppercase transition-all duration-300 cursor-pointer focus:outline-none relative py-1 ${
                      activeSection === link.id 
                        ? 'text-[#F26522]' 
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#F26522] rounded-full" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: Clock & Live Info & CTA Button */}
            <div className="flex items-center gap-3 sm:gap-6">
              {/* Live Lomé Clock with Pulse */}
              <div className="hidden sm:flex items-center gap-2 text-[12px] font-mono text-white bg-white/5 px-4 py-2 rounded-full border border-white/5">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="tracking-widest opacity-90">LOMÉ {lomeTime || '07:28'} GMT</span>
              </div>

              {/* CTA Button matching GET IN TOUCH design style */}
              <button
                onClick={() => onNavClick('contact')}
                className="hidden md:flex items-center bg-white text-black hover:bg-[#F26522] hover:text-white px-6 py-2.5 rounded-full text-[13px] font-black tracking-wide uppercase transition-all duration-300 shadow-md cursor-pointer focus:outline-none"
              >
                GET IN TOUCH
              </button>

              {/* MOBILE: Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden flex items-center justify-center w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full focus:outline-none cursor-pointer shadow-md"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>

          </nav>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 flex flex-col justify-end bg-black/80 backdrop-blur-sm md:hidden transition-opacity duration-300">
          {/* Bottom Sheet */}
          <div className="bg-[#111111] rounded-t-3xl mx-3 mb-3 p-6 shadow-2xl border border-white/10 flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#F26522] flex items-center justify-center">
                  <span className="text-white text-xs font-black font-mono">JD</span>
                </div>
                <span className="text-sm font-bold text-white">Jean Claude Dogbe</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-white bg-white/5 px-3 py-1 rounded-full border border-white/5">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>{lomeTime || '07:28'} GMT</span>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-4 py-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavClick(link.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-2xl font-black uppercase text-white hover:text-[#F26522] text-left transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Start Project Mobile CTA */}
            <button
              onClick={() => {
                onNavClick('contact');
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-[#F26522] hover:bg-[#e05a1a] text-white font-black uppercase py-3.5 px-4 rounded-xl flex items-center justify-between transition-colors shadow-lg cursor-pointer text-sm tracking-wide"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

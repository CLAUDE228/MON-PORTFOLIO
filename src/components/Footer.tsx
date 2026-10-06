import React from 'react';
import { ArrowUp, Mail, Phone, Linkedin, Github } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  const currentYear = new Date().getFullYear();

  const footerContacts = [
    {
      label: 'LinkedIn',
      value: 'komla-jean-claude-dogbe-929292300',
      icon: <Linkedin size={15} className="text-[#0077B5]" />,
      href: 'https://www.linkedin.com/in/komla-jean-claude-dogbe-929292300/',
    },
    {
      label: 'GitHub',
      value: 'CLAUDE228',
      icon: <Github size={15} className="text-white" />,
      href: 'https://github.com/CLAUDE228',
    },
    {
      label: 'Email',
      value: 'komlajeanclaudedogbe@gmail.com',
      icon: <Mail size={15} className="text-[#EA4335]" />,
      href: 'mailto:komlajeanclaudedogbe@gmail.com',
    },
    {
      label: 'Téléphone',
      value: '+228 91 20 27 26',
      icon: <Phone size={15} className="text-[#25D366]" />,
      href: 'tel:+22891202726',
    },
  ];

  return (
    <footer className="bg-black text-neutral-400 py-16 border-t border-neutral-900 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Contact info grid in Footer with colored logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12 pb-12 border-b border-neutral-900">
          {footerContacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-neutral-950 hover:bg-neutral-900 border border-white/5 hover:border-white/10 px-4 py-3.5 rounded-2xl transition-all duration-300 group"
            >
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                {contact.icon}
              </div>
              <div className="min-w-0">
                <span className="text-[9px] font-mono uppercase tracking-widest text-white/30 block">
                  {contact.label}
                </span>
                <span className="text-xs text-white/70 block truncate font-light lowercase mt-0.5">
                  {contact.value}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom row with branding and scroll to top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* LEFT: Branding */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white font-mono text-[10px] font-semibold">
              DK
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-semibold text-white tracking-widest uppercase leading-none">JEAN CLAUDE</span>
              <span className="text-[9px] text-white/40 font-mono tracking-widest mt-1.5 uppercase">PORTFOLIO</span>
            </div>
          </div>

          {/* CENTER: Copyrights */}
          <div className="text-center md:text-left text-xs space-y-1">
            <p className="text-white/60 font-medium tracking-wider">
              &copy; {currentYear} <span className="uppercase font-semibold text-white/80">DOGBE KOMLA JEAN CLAUDE</span>. tous droits réservés.
            </p>
            <p className="text-white/30 font-mono text-[9px] uppercase tracking-widest">
              Conçu par DOGBE KOMLA JEAN CLAUDE &bull; {currentYear}
            </p>
          </div>

          {/* RIGHT: Back to Top Button */}
          <button
            onClick={onScrollToTop}
            className="flex items-center gap-2 bg-neutral-900 hover:bg-white text-white hover:text-black border border-white/10 hover:border-white/20 text-[10px] font-medium tracking-wider uppercase py-3 px-5 rounded-full transition-all duration-300 group cursor-pointer focus:outline-none"
            aria-label="Retourner en haut de page"
          >
            <span>RETOURNER EN HAUT</span>
            <div className="w-5 h-5 rounded-full bg-white/5 group-hover:bg-black/5 flex items-center justify-center shrink-0 group-hover:-translate-y-0.5 transition-transform">
              <ArrowUp size={11} />
            </div>
          </button>

        </div>
      </div>
    </footer>
  );
};

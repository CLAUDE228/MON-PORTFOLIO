import React from 'react';

const technologies = [
  "laravel", "spring boot", "react", "vue.js 3", "typescript", 
  "cybersécurité", "cryptographie", "réseaux cisco", "mysql", 
  "sqlite", "docker", "git & github", "tailwind css", "bootstrap", "maven"
];

export const MarqueeSection: React.FC = () => {
  return (
    <div className="bg-black py-10 border-y border-neutral-900 overflow-hidden select-none relative z-10">
      <div className="flex overflow-hidden w-full">
        {/* Row of moving tech labels */}
        <div className="flex gap-16 animate-marquee shrink-0">
          {[...technologies, ...technologies, ...technologies].map((tech, i) => (
            <div key={i} className="flex items-center gap-4 shrink-0">
              <span className="text-white/20 text-xs tracking-widest font-mono uppercase">●</span>
              <span className="text-white/60 font-medium tracking-tight text-lg lowercase hover:text-white transition-colors duration-200">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </div>
  );
};

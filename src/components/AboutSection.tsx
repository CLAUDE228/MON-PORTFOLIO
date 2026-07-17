import React from 'react';
import { FadeIn } from './FadeIn';
import { usePortfolio } from '../context/PortfolioContext';
import { personalQualities } from '../data';
import { Languages, Heart, Sparkles } from 'lucide-react';
import { Scroll3D } from './Scroll3D';

export const AboutSection: React.FC = () => {
  const { aboutMe } = usePortfolio();

  return (
    <Scroll3D 
      id="about"
      className="relative min-h-screen flex flex-col justify-center bg-black px-6 sm:px-10 py-24 border-t border-neutral-900 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <span className="text-xs font-medium tracking-widest text-white/40 uppercase block mb-3">
            01 / présentation
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white lowercase">
            à propos de moi
          </h2>
        </div>

        {/* Main Layout - Beautifully Distributed Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-white/90">
          
          {/* Left Column (Biography & Atouts Majeurs) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Biography text block */}
            <div className="space-y-6">
              <FadeIn delay={0.2} y={20}>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white leading-relaxed">
                  {aboutMe.description1}
                </h3>
              </FadeIn>

              <FadeIn delay={0.25} y={20}>
                <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed font-light">
                  {aboutMe.description2}
                </p>
              </FadeIn>
            </div>

            {/* Qualities / Atouts */}
            <FadeIn delay={0.45} y={20} className="border-t border-white/5 pt-6">
              <h4 className="text-[10px] font-mono tracking-widest text-white/40 uppercase mb-4">
                atouts majeurs
              </h4>
              <div className="flex flex-wrap gap-2">
                {personalQualities.map((qual, idx) => (
                  <span 
                    key={idx}
                    className="text-[11px] px-3.5 py-1.5 rounded-xl bg-neutral-900/60 border border-white/5 text-white/70 lowercase font-light hover:border-white/20 hover:text-white transition-all cursor-default"
                  >
                    {qual}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right Column (Objectif Professionnel, Langues, Loisirs) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Objectif professionnel card */}
            <FadeIn delay={0.3} y={20} className="bg-neutral-900/40 border border-white/5 p-6 sm:p-8 rounded-3xl backdrop-blur">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={14} className="text-white/50" />
                <h4 className="text-xs font-semibold tracking-widest text-white/40 uppercase">
                  objectif professionnel & vision
                </h4>
              </div>
              <p className="text-sm sm:text-base text-white/95 font-light leading-relaxed lowercase">
                {aboutMe.objective}
              </p>
            </FadeIn>

            {/* Minor details grid (Languages & Hobbies) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              
              {/* Langues */}
              <FadeIn delay={0.35} y={20} className="bg-neutral-900/20 border border-white/5 p-6 rounded-3xl">
                <div className="flex items-center gap-2 mb-3">
                  <Languages size={14} className="text-white/50" />
                  <h4 className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
                    connaissances linguistiques
                  </h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-white/80 font-light lowercase">français</span>
                    <span className="text-white/40 lowercase">couramment parlé</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-white/80 font-light lowercase">anglais</span>
                    <span className="text-white/40 lowercase">quelques notions</span>
                  </div>
                </div>
              </FadeIn>

              {/* Loisirs */}
              <FadeIn delay={0.4} y={20} className="bg-neutral-900/20 border border-white/5 p-6 rounded-3xl">
                <div className="flex items-center gap-2 mb-3">
                  <Heart size={14} className="text-white/50" />
                  <h4 className="text-[10px] font-mono tracking-widest text-white/40 uppercase">
                    loisirs & intérêts
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-white/80 lowercase">
                    ⚽ football
                  </span>
                  <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-white/80 lowercase">
                    🏀 basket-ball
                  </span>
                  <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-white/80 lowercase">
                    📚 lecture
                  </span>
                </div>
              </FadeIn>
            </div>

          </div>

        </div>

      </div>

      {/* Decorative subtle background gradient blur */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
    </Scroll3D>
  );
};

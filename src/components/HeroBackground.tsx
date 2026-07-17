import React from 'react';
import MountainVistaParallax from '@/components/ui/mountain-vista-bg';

export const HeroBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden select-none pointer-events-none">
      <div className="w-full h-full opacity-100 transition-opacity duration-700">
        <MountainVistaParallax />
        {/* Subtle color grading overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#eaebee]/40 via-transparent to-[#eaebee]/10" />
      </div>
    </div>
  );
};


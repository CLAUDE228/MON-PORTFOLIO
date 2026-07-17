import React from 'react';

interface LiveProjectButtonProps {
  label?: string;
  href?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ 
  label = 'Live Project', 
  href = '#' 
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-all duration-300 hover:bg-[#D7E2EA]/10 active:scale-95 select-none"
    >
      <span>{label}</span>
    </a>
  );
};

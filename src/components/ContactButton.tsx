import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
}

export const ContactButton: React.FC<ContactButtonProps> = ({ onClick }) => {
  const handleScrollToContact = () => {
    if (onClick) {
      onClick();
      return;
    }
    // Default fallback to scroll to About or Contact section
    const target = document.getElementById('about');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleScrollToContact}
      className="rounded-full font-medium uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none cursor-pointer select-none"
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px',
        padding: '12px 32px', // default px-8 py-3
      }}
    >
      <span className="text-xs sm:text-sm md:text-base font-semibold">Contact Me</span>
    </button>
  );
};

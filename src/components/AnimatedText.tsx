import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  // Track the scroll progress of the paragraph element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"]
  });

  const chars = text.split("");

  return (
    <p
      ref={containerRef}
      className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] mx-auto select-none"
      style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
    >
      {chars.map((char, index) => {
        // Calculate the progressive delay/interval for this specific character
        // We stretch the reveal sequence over the first 80% of scroll progress
        // so that the entire text is fully revealed before the element ends
        const start = (index / chars.length) * 0.7;
        const end = start + 0.3; // 30% transition window for each character
        
        // Map the scroll timeline to this character's opacity
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

        return (
          <span key={index} className="relative inline-block">
            {/* Invisible placeholder to preserve layout and spacing */}
            <span className="opacity-0">{char === " " ? "\u00A0" : char}</span>
            {/* Absolute animated character */}
            <motion.span
              style={{ opacity }}
              className="absolute inset-0 select-none pointer-events-none"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
};

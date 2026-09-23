import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface Scroll3DProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  as?: 'div' | 'section';
}

export const Scroll3D: React.FC<Scroll3DProps> = ({ children, id, className = "", as = "section" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size on mount and resize for safe animations
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track scroll position of this container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create subtle, ultra-smooth 3D scroll physics
  // Start: tilted slightly backward, slightly scaled down, translated down
  // Center: fully flat (0 rotation), scaled to 1.0, translated to 0
  // Exit: tilted slightly forward, slightly scaled down, translated up
  const rotateXRaw = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [12, 0, 0, -12]);
  const scaleRaw = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.93, 1, 1, 0.93]);
  const opacityRaw = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);
  const yRaw = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [60, 0, 0, -60]);

  // Spring settings to deliver that "extraordinaire" organic feel
  const springConfig = { stiffness: 90, damping: 25, mass: 0.6 };

  const rotateX = useSpring(rotateXRaw, springConfig);
  const scale = useSpring(scaleRaw, springConfig);
  const opacity = useSpring(opacityRaw, springConfig);
  const y = useSpring(yRaw, springConfig);

  // If mobile, keep it clean and performant by disabling 3D rotation, just use soft opacity/Y fade
  const mobileOpacityRaw = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.7, 1, 1, 0.7]);
  const mobileYRaw = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [20, 0, 0, -20]);
  
  const mobileOpacity = useSpring(mobileOpacityRaw, springConfig);
  const mobileY = useSpring(mobileYRaw, springConfig);

  const Component = as;

  return (
    <Component
      ref={containerRef}
      id={id}
      className={`w-full overflow-visible relative ${className}`}
      style={{ perspective: isMobile ? "none" : "1200px" }}
    >
      <motion.div
        style={{
          rotateX: isMobile ? 0 : rotateX,
          scale: isMobile ? 1 : scale,
          opacity: isMobile ? mobileOpacity : opacity,
          y: isMobile ? mobileY : y,
          transformStyle: "preserve-3d"
        }}
        className="w-full origin-center"
      >
        {children}
      </motion.div>
    </Component>
  );
};

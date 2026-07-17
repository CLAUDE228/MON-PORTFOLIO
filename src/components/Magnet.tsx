import React, { useState, useRef, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Mouse distance from element center
      const diffX = e.clientX - centerX;
      const diffY = e.clientY - centerY;
      
      // Bounding box distance or absolute distance
      const distance = Math.sqrt(diffX * diffX + diffY * diffY);

      // Activates when cursor is within padding distance of element edge
      if (distance < padding) {
        setIsActive(true);
        // Apply translate3d transform divided by strength factor
        const targetX = diffX / strength;
        const targetY = diffY / strength;
        setPosition({ x: targetX, y: targetY });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength]);

  const currentTransition = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={elementRef}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: currentTransition,
        willChange: 'transform',
      }}
      className="inline-block"
    >
      {children}
    </div>
  );
};

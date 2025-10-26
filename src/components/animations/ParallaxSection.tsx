import React from 'react';
import { useParallax } from '../../hooks/useScrollAnimation';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

/**
 * Parallax scrolling section component
 * Creates 3D-like depth effect with different scroll speeds
 */
export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  speed = 0.5,
  className = '' 
}) => {
  const { elementRef, offset } = useParallax(speed);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
      }}
    >
      {children}
    </div>
  );
};

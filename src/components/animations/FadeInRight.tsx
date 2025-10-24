import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FadeInRightProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * Fade in from right animation component
 * Useful for images and complementary content
 */
export const FadeInRight: React.FC<FadeInRightProps> = ({ 
  children, 
  delay = 0, 
  duration = 600,
  className = '' 
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ triggerOnce: true });

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-${duration} ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'translateX(0)' 
          : 'translateX(30px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

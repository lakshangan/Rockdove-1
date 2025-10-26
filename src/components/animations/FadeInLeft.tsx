import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FadeInLeftProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * Fade in from left animation component
 * Useful for text content and cards
 */
export const FadeInLeft: React.FC<FadeInLeftProps> = ({ 
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
          : 'translateX(-30px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

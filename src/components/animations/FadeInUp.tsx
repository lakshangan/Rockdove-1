import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * Fade in from bottom animation component
 * Triggers when element comes into viewport
 */
export const FadeInUp: React.FC<FadeInUpProps> = ({ 
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
          ? 'translateY(0)' 
          : 'translateY(30px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

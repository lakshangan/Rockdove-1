import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  scale?: number;
}

/**
 * Scale in animation component
 * Useful for cards, buttons, and interactive elements
 */
export const ScaleIn: React.FC<ScaleInProps> = ({ 
  children, 
  delay = 0, 
  duration = 600,
  className = '',
  scale = 0.8
}) => {
  const { elementRef, isVisible } = useScrollAnimation({ triggerOnce: true });

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-${duration} ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible 
          ? 'scale(1)' 
          : `scale(${scale})`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

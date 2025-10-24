import React from 'react';
import { useStaggeredAnimation } from '../../hooks/useScrollAnimation';

interface StaggeredContainerProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Container for staggered animations
 * Animates children in sequence with specified delay
 */
export const StaggeredContainer: React.FC<StaggeredContainerProps> = ({ 
  children, 
  delay = 100,
  className = '' 
}) => {
  const { containerRef, visibleItems } = useStaggeredAnimation(delay);

  return (
    <div ref={containerRef} className={className}>
      {React.Children.map(children, (child, index) => {
        const isVisible = visibleItems.includes(index);
        
        return (
          <div
            className="transition-all duration-600 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible 
                ? 'translateY(0)' 
                : 'translateY(30px)',
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

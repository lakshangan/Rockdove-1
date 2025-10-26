import React from 'react';
import { 
  FadeInUp, 
  FadeInLeft, 
  FadeInRight, 
  ScaleIn, 
  StaggeredContainer,
  ParallaxSection 
} from './index';

interface AnimatedPageProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Higher-order component that provides common animation patterns for pages
 * Automatically applies animations to common page elements
 */
export const AnimatedPage: React.FC<AnimatedPageProps> = ({ children, className = '' }) => {
  return (
    <div className={`animated-page ${className}`}>
      {children}
    </div>
  );
};

/**
 * Animated section wrapper with common patterns
 */
export const AnimatedSection: React.FC<{
  children: React.ReactNode;
  title?: string;
  className?: string;
  parallaxSpeed?: number;
  staggerDelay?: number;
}> = ({ 
  children, 
  title, 
  className = '', 
  parallaxSpeed = 0.2,
  staggerDelay = 150 
}) => {
  const content = (
    <div className={`py-20 px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <FadeInUp delay={200}>
            <h2 className="text-4xl font-bold text-center mb-16">{title}</h2>
          </FadeInUp>
        )}
        <StaggeredContainer delay={staggerDelay}>
          {children}
        </StaggeredContainer>
      </div>
    </div>
  );

  return parallaxSpeed > 0 ? (
    <ParallaxSection speed={parallaxSpeed}>
      {content}
    </ParallaxSection>
  ) : content;
};

/**
 * Animated hero section with common patterns
 */
export const AnimatedHero: React.FC<{
  children: React.ReactNode;
  className?: string;
  parallaxSpeed?: number;
}> = ({ children, className = '', parallaxSpeed = 0.3 }) => {
  return (
    <ParallaxSection speed={parallaxSpeed} className={`relative pt-32 pb-20 px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </ParallaxSection>
  );
};

/**
 * Animated card grid with staggered animations
 */
export const AnimatedCardGrid: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className = 'grid md:grid-cols-2 gap-12', staggerDelay = 150 }) => {
  return (
    <StaggeredContainer delay={staggerDelay}>
      <div className={className}>
        {React.Children.map(children, (child, index) => (
          <ScaleIn key={index} delay={index * 100} scale={0.9}>
            {child}
          </ScaleIn>
        ))}
      </div>
    </StaggeredContainer>
  );
};

/**
 * Animated contact section with alternating animations
 */
export const AnimatedContactSection: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <section className={`py-20 px-8 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        {React.Children.map(children, (child, index) => {
          if (index === 0) {
            // Title
            return <FadeInUp delay={200}>{child}</FadeInUp>;
          } else if (index === 1) {
            // Description
            return <FadeInUp delay={400}>{child}</FadeInUp>;
          } else if (index === 2) {
            // Contact cards with alternating animations
            return (
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {React.Children.map(child, (card, cardIndex) => {
                  const AnimationComponent = cardIndex % 2 === 0 ? FadeInLeft : FadeInRight;
                  return (
                    <AnimationComponent key={cardIndex} delay={600}>
                      {card}
                    </AnimationComponent>
                  );
                })}
              </div>
            );
          } else {
            // Buttons
            return <FadeInUp delay={800}>{child}</FadeInUp>;
          }
        })}
      </div>
    </section>
  );
};

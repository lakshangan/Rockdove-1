# Animation System Guide

## Overview
This animation system provides professional, minimal, and interactive animations for the RockDove Aviation website. It's designed to be clean, maintainable, and enhance user experience without being distracting.

## Core Components

### 1. Basic Animation Components

#### FadeInUp
- **Purpose**: Elements fade in from bottom
- **Usage**: Titles, descriptions, main content
- **Props**: `delay`, `duration`, `className`

```tsx
<FadeInUp delay={200}>
  <h1>Your Title</h1>
</FadeInUp>
```

#### FadeInLeft / FadeInRight
- **Purpose**: Elements slide in from left/right
- **Usage**: Cards, images, complementary content
- **Props**: `delay`, `duration`, `className`

```tsx
<FadeInLeft delay={300}>
  <div>Content from left</div>
</FadeInLeft>
```

#### ScaleIn
- **Purpose**: Elements scale in from smaller size
- **Usage**: Cards, buttons, interactive elements
- **Props**: `delay`, `duration`, `scale`, `className`

```tsx
<ScaleIn delay={400} scale={0.8}>
  <div>Scaled content</div>
</ScaleIn>
```

### 2. Container Components

#### StaggeredContainer
- **Purpose**: Animates children in sequence
- **Usage**: Grids, lists, card collections
- **Props**: `delay` (delay between children)

```tsx
<StaggeredContainer delay={150}>
  {items.map(item => <div key={item.id}>{item.content}</div>)}
</StaggeredContainer>
```

#### ParallaxSection
- **Purpose**: Creates 3D-like depth with parallax scrolling
- **Usage**: Hero sections, background elements
- **Props**: `speed` (0.1-0.5 recommended)

```tsx
<ParallaxSection speed={0.3}>
  <div>Parallax content</div>
</ParallaxSection>
```

### 3. High-Level Components

#### AnimatedHero
- **Purpose**: Pre-configured hero section with parallax
- **Usage**: Page headers, main sections
- **Props**: `parallaxSpeed`, `className`

```tsx
<AnimatedHero parallaxSpeed={0.3}>
  <FadeInUp delay={200}>
    <h1>Hero Title</h1>
  </FadeInUp>
</AnimatedHero>
```

#### AnimatedSection
- **Purpose**: Standard section with title and staggered content
- **Usage**: Content sections, feature lists
- **Props**: `title`, `parallaxSpeed`, `staggerDelay`

```tsx
<AnimatedSection title="Our Services" parallaxSpeed={0.2}>
  {serviceCards}
</AnimatedSection>
```

#### AnimatedCardGrid
- **Purpose**: Grid of cards with staggered animations
- **Usage**: Service cards, feature grids
- **Props**: `className`, `staggerDelay`

```tsx
<AnimatedCardGrid className="grid md:grid-cols-3 gap-8">
  {cards.map(card => <Card key={card.id} {...card} />)}
</AnimatedCardGrid>
```

#### AnimatedContactSection
- **Purpose**: Contact section with alternating animations
- **Usage**: Contact forms, call-to-action sections
- **Props**: `className`

```tsx
<AnimatedContactSection>
  <h2>Contact Us</h2>
  <p>Get in touch</p>
  <div>Contact cards</div>
  <div>Buttons</div>
</AnimatedContactSection>
```

## Animation Patterns

### 1. Hero Section Pattern
```tsx
<AnimatedHero parallaxSpeed={0.3}>
  <FadeInUp delay={200}>
    <h1>Main Title</h1>
  </FadeInUp>
  <FadeInUp delay={400}>
    <p>Description</p>
  </FadeInUp>
  <FadeInUp delay={600}>
    <div>Call to action</div>
  </FadeInUp>
</AnimatedHero>
```

### 2. Feature Grid Pattern
```tsx
<AnimatedSection title="Features" parallaxSpeed={0.2}>
  <AnimatedCardGrid className="grid md:grid-cols-2 gap-8">
    {features.map((feature, index) => (
      <div key={index} className="feature-card">
        {feature.content}
      </div>
    ))}
  </AnimatedCardGrid>
</AnimatedSection>
```

### 3. Alternating Content Pattern
```tsx
<div className="grid md:grid-cols-2 gap-8">
  {items.map((item, index) => {
    const AnimationComponent = index % 2 === 0 ? FadeInLeft : FadeInRight;
    return (
      <AnimationComponent key={index} delay={index * 150}>
        <div>{item.content}</div>
      </AnimationComponent>
    );
  })}
</div>
```

### 4. Contact Section Pattern
```tsx
<AnimatedContactSection>
  <h2>Ready to Get Started?</h2>
  <p>Contact description</p>
  <div>
    <div>Contact card 1</div>
    <div>Contact card 2</div>
  </div>
  <div>Action buttons</div>
</AnimatedContactSection>
```

## Best Practices

### 1. Timing
- **Hero sections**: 200ms, 400ms, 600ms delays
- **Content sections**: 200ms for titles, 150ms stagger for cards
- **Contact sections**: 200ms, 400ms, 600ms, 800ms progression

### 2. Performance
- Use `triggerOnce: true` for one-time animations
- Keep parallax speeds between 0.1-0.5
- Avoid too many simultaneous animations

### 3. Accessibility
- Respect `prefers-reduced-motion` (handled by CSS)
- Ensure animations don't interfere with functionality
- Keep animations subtle and professional

### 4. Mobile Considerations
- Reduce animation complexity on mobile
- Use shorter delays for mobile users
- Test on various devices

## Customization

### Custom Delays
```tsx
// Staggered delays
{items.map((item, index) => (
  <FadeInUp key={index} delay={index * 100}>
    {item}
  </FadeInUp>
))}
```

### Custom Scales
```tsx
<ScaleIn scale={0.8} delay={200}>
  <div>Smaller scale animation</div>
</ScaleIn>
```

### Custom Parallax Speeds
```tsx
<ParallaxSection speed={0.1}>  {/* Slow parallax */}
<ParallaxSection speed={0.5}>  {/* Fast parallax */}
```

## File Structure
```
src/
├── hooks/
│   └── useScrollAnimation.ts     # Core animation hooks
├── components/
│   └── animations/
│       ├── index.ts              # Export all components
│       ├── FadeInUp.tsx          # Basic animations
│       ├── FadeInLeft.tsx
│       ├── FadeInRight.tsx
│       ├── ScaleIn.tsx
│       ├── StaggeredContainer.tsx
│       ├── ParallaxSection.tsx
│       └── AnimatedPage.tsx      # High-level components
└── pages/
    └── [PageName].tsx            # Pages using animations
```

## Usage Examples

### Simple Page Animation
```tsx
import { FadeInUp, AnimatedHero } from '../components/animations';

const MyPage = () => (
  <PageLayout>
    <AnimatedHero>
      <FadeInUp delay={200}>
        <h1>Page Title</h1>
      </FadeInUp>
    </AnimatedHero>
  </PageLayout>
);
```

### Complex Page with Multiple Sections
```tsx
import { 
  FadeInUp, 
  AnimatedHero, 
  AnimatedSection, 
  AnimatedCardGrid,
  AnimatedContactSection 
} from '../components/animations';

const ComplexPage = () => (
  <PageLayout>
    <AnimatedHero parallaxSpeed={0.3}>
      <FadeInUp delay={200}>
        <h1>Hero Title</h1>
      </FadeInUp>
    </AnimatedHero>
    
    <AnimatedSection title="Features" parallaxSpeed={0.2}>
      <AnimatedCardGrid>
        {features.map(feature => <FeatureCard key={feature.id} {...feature} />)}
      </AnimatedCardGrid>
    </AnimatedSection>
    
    <AnimatedContactSection>
      <h2>Contact Us</h2>
      <p>Get in touch</p>
      <div>Contact content</div>
      <div>Buttons</div>
    </AnimatedContactSection>
  </PageLayout>
);
```

This animation system provides a clean, professional, and maintainable way to add engaging animations to your website while keeping the code organized and easy to understand.

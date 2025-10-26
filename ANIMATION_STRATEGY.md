# Strategic Animation Plan

## Animation Philosophy
- **Subtle & Professional**: Enhance UX without being distracting
- **Performance-First**: Smooth 60fps animations
- **Accessibility**: Respect user preferences
- **Consistent**: Same patterns across all pages

## Animation Hierarchy (Most to Least Important)

### 1. **Hero Sections** (Essential)
- **Purpose**: First impression, page entry
- **Animation**: FadeInUp with staggered delays
- **Timing**: 200ms, 400ms, 600ms
- **Pages**: ALL pages

### 2. **Content Reveals** (Important)
- **Purpose**: Guide user attention as they scroll
- **Animation**: FadeInUp for titles, StaggeredContainer for grids
- **Timing**: 200ms for titles, 150ms stagger for content
- **Pages**: Key sections only

### 3. **Interactive Elements** (Enhancement)
- **Purpose**: Provide feedback and engagement
- **Animation**: Hover effects, scale transforms
- **Timing**: 300ms transitions
- **Pages**: Cards, buttons, forms

### 4. **Parallax Effects** (Atmosphere)
- **Purpose**: Add depth and sophistication
- **Animation**: Subtle parallax scrolling
- **Timing**: 0.2-0.3 speed
- **Pages**: Hero sections only

## Page-by-Page Strategy

### **MRO Page** ✅ (Complete)
- Hero: Parallax + FadeInUp
- Services: Staggered cards
- Capabilities: Parallax + staggered
- Certifications: Alternating left/right
- Contact: Full animation sequence

### **AOGSupport Page** 🔄 (Partial - needs completion)
- Hero: ✅ Parallax + FadeInUp + pulsing emergency
- Features: ✅ Staggered cards
- Emergency Services: ❌ Needs animation
- Response Time: ❌ Needs animation
- Contact: ❌ Needs animation

### **TheStory Page** 🔄 (Minimal - needs completion)
- Hero: ✅ AnimatedHero
- Mission: ❌ Needs animation
- Timeline: ❌ Needs staggered animation
- Values: ❌ Needs animation
- Leadership: ❌ Needs animation
- Contact: ❌ Needs animation

### **RFQ Page** ❌ (No animations)
- Hero: ❌ Needs FadeInUp
- Form: ❌ Needs subtle reveals
- Benefits: ❌ Needs staggered cards

### **AssetManagement Page** ❌ (No animations)
- Hero: ❌ Needs FadeInUp
- Features: ❌ Needs staggered cards
- Benefits: ❌ Needs animation
- Stats: ❌ Needs animation
- Contact: ❌ Needs animation

### **RepairManagement Page** ❌ (No animations)
- Hero: ❌ Needs FadeInUp
- Features: ❌ Needs staggered cards
- Services: ❌ Needs animation
- Contact: ❌ Needs animation

### **Careers Page** ❌ (No animations)
- Hero: ❌ Needs FadeInUp
- Positions: ❌ Needs staggered cards
- Benefits: ❌ Needs animation
- Contact: ❌ Needs animation

### **FAQs Page** ❌ (No animations)
- Hero: ❌ Needs FadeInUp
- FAQ Items: ❌ Needs staggered reveals
- Contact: ❌ Needs animation

## Implementation Priority

### **Phase 1: Essential Animations** (High Impact, Low Effort)
1. Add hero animations to all pages
2. Add content reveal animations to key sections
3. Add hover effects to interactive elements

### **Phase 2: Content Animations** (Medium Impact, Medium Effort)
1. Complete AOGSupport page animations
2. Complete TheStory page animations
3. Add staggered animations to card grids

### **Phase 3: Polish** (Low Impact, High Effort)
1. Add subtle parallax effects
2. Fine-tune timing and easing
3. Add micro-interactions

## Animation Patterns by Section Type

### **Hero Pattern** (All pages)
```tsx
<FadeInUp delay={200}>
  <h1>Page Title</h1>
</FadeInUp>
<FadeInUp delay={400}>
  <p>Description</p>
</FadeInUp>
```

### **Content Section Pattern** (Key sections)
```tsx
<FadeInUp delay={200}>
  <h2>Section Title</h2>
</FadeInUp>
<StaggeredContainer delay={150}>
  {content}
</StaggeredContainer>
```

### **Card Grid Pattern** (Feature lists)
```tsx
<StaggeredContainer delay={100}>
  {cards.map((card, index) => (
    <ScaleIn key={index} delay={index * 80} scale={0.9}>
      <Card {...card} />
    </ScaleIn>
  ))}
</StaggeredContainer>
```

### **Contact Pattern** (All pages)
```tsx
<FadeInUp delay={200}>
  <h2>Contact Title</h2>
</FadeInUp>
<FadeInUp delay={400}>
  <p>Contact description</p>
</FadeInUp>
```

## Performance Guidelines

### **Animation Limits**
- Max 3 simultaneous animations per viewport
- Parallax only on hero sections
- Stagger delays max 200ms between items
- Total animation duration max 600ms

### **Mobile Considerations**
- Reduce parallax speed by 50%
- Increase stagger delays by 50%
- Disable complex animations on low-end devices

## Quality Checklist

### **Before Implementation**
- [ ] Animation serves a purpose
- [ ] Timing feels natural
- [ ] Performance impact minimal
- [ ] Accessibility considered

### **After Implementation**
- [ ] Smooth 60fps performance
- [ ] No layout shifts
- [ ] Works on mobile
- [ ] Respects reduced motion

## Success Metrics
- Page load time < 3 seconds
- Animation performance > 55fps
- User engagement +15%
- Bounce rate -10%

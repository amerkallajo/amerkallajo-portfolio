# Animation & Interaction Plan

## 🌌 Overall Animation Feel

**Vision:** "Stepping into a digital dimension"

The animation language should feel:
- **Otherworldly** — Like entering a sci-fi command center
- **Alive** — Subtle constant motion that breathes life
- **Responsive** — Every interaction acknowledged instantly
- **Smooth** — Buttery 60fps, never janky
- **Purposeful** — Motion guides attention, never distracts

---

## 🎬 Animation Breakdown by Element

### 1. Animated Background

**Concept:** A dark cosmic void with floating elements

**Elements:**
- **Floating Geometric Shapes**
  - Translucent hexagons, triangles, circles
  - Slow drift in random directions
  - Subtle rotation
  - Neon glow with blur (box-shadow or filter)
  
- **Particle Field**
  - Tiny dots of light scattered across viewport
  - Gentle parallax effect on mouse move (optional)
  - Twinkle/pulse at random intervals
  
- **Gradient Pulse**
  - Radial gradient from center
  - Colors shift slowly (dark purple → dark blue → back)
  - Very subtle, almost subliminal

**Animation Properties:**
```
- transform: translate3d(), rotate3d()
- opacity: for fade in/out
- filter: blur() for depth
- Duration: 20-60 seconds for full loops
- Easing: linear for continuous, ease-in-out for pulses
```

---

### 2. Hero Section

**Entry Animation (on page load):**
1. Background fades in (0.5s)
2. Name text slides up + fades in (0.6s, 0.2s delay)
3. Tagline fades in (0.4s, 0.5s delay)
4. Buttons stagger in from bottom (0.4s each, 0.1s stagger)

**Idle State:**
- Text has subtle glow pulse (very slow, 4-6 second cycle)
- Optional: text has very slight floating motion

---

### 3. Navigation Buttons (NavButton)

**Default State:**
- Solid dark background with neon border
- Subtle glow around edges
- Text clearly visible

**Hover State:**
- Border glow intensifies (brightness increase)
- Background lightens slightly
- Scale up 1.02-1.05
- Optional: inner glow appears
- Transition: 0.2s ease-out

**Active/Click State:**
- Quick scale down to 0.98
- Ripple effect from click point
- Color flash (brighter momentarily)
- Transition: 0.1s

**Focus State (keyboard):**
- Visible focus ring matching glow color
- Same glow intensity as hover

**Animation Properties:**
```
- transform: scale()
- box-shadow: for glow effects
- background-color: for state changes
- Will use GPU-accelerated properties only
```

---

### 4. Page Transitions

**Exit Animation (leaving current page):**
- Content fades out (opacity 1 → 0)
- Slight scale down (1 → 0.98)
- Duration: 0.3s
- Easing: ease-in

**Enter Animation (new page appears):**
- Content fades in (opacity 0 → 1)
- Slides up slightly (translateY: 20px → 0)
- Duration: 0.4s
- Easing: ease-out
- Delay: 0.1s (after exit completes)

**Implementation:** Framer Motion's AnimatePresence with mode="wait"

---

### 5. Gallery Items (on sub-pages)

**Entry Animation:**
- Staggered fade-in from bottom
- Each item: opacity 0→1, translateY 30px→0
- Stagger delay: 0.05-0.1s between items
- Duration: 0.4s per item

**Hover State:**
- Scale up 1.03
- Shadow/glow intensifies
- Optional: overlay with project title appears

---

### 6. Back Button

**Default State:**
- Semi-transparent with glow
- Fixed position (corner)

**Hover State:**
- Glow intensifies
- Slight scale up
- Arrow icon may animate (slide left slightly)

---

## ⚡ Performance Strategy

### GPU-Accelerated Only

**DO animate:**
- `transform` (translate, scale, rotate)
- `opacity`
- `filter` (sparingly, on few elements)

**DO NOT animate:**
- `width`, `height`
- `top`, `left`, `right`, `bottom`
- `margin`, `padding`
- `border-width`

### Optimization Techniques

1. **will-change Usage**
   ```css
   .animated-element {
     will-change: transform, opacity;
   }
   ```
   - Apply only to elements that will animate
   - Remove after animation if one-time

2. **Layer Promotion**
   - Use `transform: translateZ(0)` to promote to own layer
   - Limit to ~10-15 promoted elements max

3. **Throttle Background Animations**
   - Use `requestAnimationFrame` for JS animations
   - Consider reducing particles on low-end devices

4. **Pause When Not Visible**
   - Use Intersection Observer to pause offscreen animations
   - Pause all animations when tab is not visible

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

- Background becomes static gradient
- Buttons still have color change on hover (no motion)
- Page transitions become instant fades

---

## 🎨 Animation Tokens (to define in code)

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | 0.15s | Micro-interactions |
| `--duration-normal` | 0.3s | Standard transitions |
| `--duration-slow` | 0.5s | Page transitions |
| `--duration-glacial` | 2-4s | Background loops |
| `--ease-out` | cubic-bezier(0.0, 0.0, 0.2, 1) | Enter animations |
| `--ease-in` | cubic-bezier(0.4, 0.0, 1, 1) | Exit animations |
| `--ease-spring` | cubic-bezier(0.34, 1.56, 0.64, 1) | Bouncy effects |

---

## 📱 Mobile Considerations

- Reduce particle count by 50%
- Simplify background (fewer floating shapes)
- Ensure touch targets are 44px minimum
- Tap feedback should be instant (no hover delay)


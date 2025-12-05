# Design System

## 🎨 Color Palette

### Background Colors (Dark Base)

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-void` | `#000000` | True black for maximum contrast |
| `--bg-primary` | `#0a0a0f` | Main background |
| `--bg-elevated` | `#12121a` | Cards, elevated surfaces |
| `--bg-subtle` | `#1a1a24` | Subtle differentiation |

### Neon Accent Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--neon-cyan` | `#00f0ff` | Primary accent, links, highlights |
| `--neon-purple` | `#bf00ff` | Secondary accent, gradients |
| `--neon-magenta` | `#ff00aa` | Tertiary, special highlights |
| `--neon-blue` | `#4d4dff` | Depth, backgrounds |

### Glow Colors (with opacity)

| Token | Value | Usage |
|-------|-------|-------|
| `--glow-cyan` | `rgba(0, 240, 255, 0.5)` | Button glow, text glow |
| `--glow-purple` | `rgba(191, 0, 255, 0.4)` | Background shapes |
| `--glow-soft` | `rgba(0, 240, 255, 0.15)` | Subtle ambient glow |

### Text Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--text-primary` | `#ffffff` | Headings, important text |
| `--text-secondary` | `#b0b0c0` | Body text, descriptions |
| `--text-muted` | `#606070` | Captions, hints |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--success` | `#00ff88` | Success states |
| `--error` | `#ff4466` | Error states |
| `--warning` | `#ffaa00` | Warning states |

---

## 🔤 Typography

### Font Stack

**Primary (Headings):**
```css
font-family: 'Space Grotesk', 'Inter', -apple-system, sans-serif;
```
- Modern, geometric, slightly futuristic
- Weights: 500 (medium), 700 (bold)

**Secondary (Body/UI):**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```
- Clean, highly readable
- Weights: 400 (regular), 500 (medium)

### Type Scale

| Level | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `--text-hero` | 3.5rem (56px) | 700 | 1.1 | Main hero name |
| `--text-h1` | 2.5rem (40px) | 700 | 1.2 | Page titles |
| `--text-h2` | 1.75rem (28px) | 600 | 1.3 | Section headers |
| `--text-h3` | 1.25rem (20px) | 600 | 1.4 | Subsection headers |
| `--text-body` | 1rem (16px) | 400 | 1.6 | Body text |
| `--text-small` | 0.875rem (14px) | 400 | 1.5 | Captions, labels |
| `--text-button` | 1rem (16px) | 500 | 1 | Button text |

### Mobile Adjustments

| Level | Desktop | Mobile |
|-------|---------|--------|
| Hero | 3.5rem | 2.5rem |
| H1 | 2.5rem | 2rem |
| H2 | 1.75rem | 1.5rem |

---

## 📐 Spacing System

### Base Unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight gaps |
| `--space-2` | 8px | Icon gaps, inline spacing |
| `--space-3` | 12px | Small component padding |
| `--space-4` | 16px | Standard padding |
| `--space-5` | 24px | Component gaps |
| `--space-6` | 32px | Section spacing |
| `--space-8` | 48px | Large section gaps |
| `--space-10` | 64px | Major section dividers |
| `--space-12` | 80px | Page-level spacing |

---

## 🔘 Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | 4px | Small elements, tags |
| `--radius-md` | 8px | Buttons, inputs |
| `--radius-lg` | 12px | Cards, panels |
| `--radius-xl` | 20px | Large cards, modals |
| `--radius-full` | 9999px | Pills, circular buttons |

---

## ✨ Shadows & Glows

### Elevation Shadows

| Token | Value |
|-------|-------|
| `--shadow-sm` | `0 2px 8px rgba(0,0,0,0.3)` |
| `--shadow-md` | `0 4px 16px rgba(0,0,0,0.4)` |
| `--shadow-lg` | `0 8px 32px rgba(0,0,0,0.5)` |

### Neon Glow Effects

| Token | Value |
|-------|-------|
| `--glow-button` | `0 0 20px var(--glow-cyan), 0 0 40px var(--glow-soft)` |
| `--glow-button-hover` | `0 0 30px var(--glow-cyan), 0 0 60px var(--glow-cyan)` |
| `--glow-text` | `0 0 10px var(--glow-cyan)` |

---

## 📏 Consistency Rules

### Buttons
- Min height: 48px (touch-friendly)
- Horizontal padding: 24-32px
- Border: 1px solid with neon color
- Always have glow on hover

### Cards/Panels
- Background: `--bg-elevated`
- Border: 1px solid `rgba(255,255,255,0.1)`
- Radius: `--radius-lg`
- Padding: `--space-5` or `--space-6`

### Icons
- Size: 20px (small), 24px (standard), 32px (large)
- Color: inherit from text or accent color
- Stroke width: 1.5-2px for line icons

### Focus States
- Always visible
- Use neon glow as focus ring
- 2px offset from element


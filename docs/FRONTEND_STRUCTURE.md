# Frontend Structure

## 📁 Complete Folder Structure

```
amerkallajo-portfolio/
├── public/
│   ├── favicon.ico                 # Site favicon
│   ├── og-image.png               # Open Graph image for social sharing
│   └── assets/
│       └── images/                # Static images (logo, backgrounds)
│
├── src/
│   ├── main.jsx                   # React entry point
│   ├── App.jsx                    # Root component with router
│   ├── index.css                  # Global CSS reset and base styles
│   │
│   ├── pages/
│   │   ├── HomePage/
│   │   │   ├── HomePage.jsx       # Main hero hub page
│   │   │   └── HomePage.module.css
│   │   ├── ProductPage/
│   │   │   ├── ProductPage.jsx    # Product Photography gallery
│   │   │   └── ProductPage.module.css
│   │   ├── GraphicPage/
│   │   │   ├── GraphicPage.jsx    # Graphic Design gallery
│   │   │   └── GraphicPage.module.css
│   │   ├── WebPage/
│   │   │   ├── WebPage.jsx        # Web Design showcase
│   │   │   └── WebPage.module.css
│   │   └── ContactPage/
│   │       ├── ContactPage.jsx    # Contact & Socials
│   │       └── ContactPage.module.css
│   │
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Layout.jsx         # Shared layout wrapper
│   │   │   └── Layout.module.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx           # Main hero section
│   │   │   └── Hero.module.css
│   │   ├── NavButton/
│   │   │   ├── NavButton.jsx      # Glowing navigation button
│   │   │   └── NavButton.module.css
│   │   ├── AnimatedBackground/
│   │   │   ├── AnimatedBackground.jsx  # Particle/shape background
│   │   │   └── AnimatedBackground.module.css
│   │   ├── GalleryGrid/
│   │   │   ├── GalleryGrid.jsx    # Reusable gallery layout
│   │   │   └── GalleryGrid.module.css
│   │   ├── BackButton/
│   │   │   ├── BackButton.jsx     # Return to hub button
│   │   │   └── BackButton.module.css
│   │   └── PageTransition/
│   │       ├── PageTransition.jsx # Animated page wrapper
│   │       └── PageTransition.module.css
│   │
│   ├── styles/
│   │   ├── variables.css          # CSS custom properties (colors, spacing)
│   │   ├── animations.css         # Keyframe definitions
│   │   ├── typography.css         # Font imports and text styles
│   │   └── utilities.css          # Helper classes
│   │
│   └── utils/
│       ├── constants.js           # App-wide constants
│       ├── motion.js              # Framer Motion variants/presets
│       └── helpers.js             # Utility functions
│
├── docs/                          # Planning documentation
│   ├── PROJECT_BRIEF.md
│   ├── TECH_STACK.md
│   ├── FRONTEND_STRUCTURE.md
│   ├── ANIMATION_PLAN.md
│   ├── DESIGN_SYSTEM.md
│   ├── CONTENT_PLAN.md
│   ├── ROUTING_PLAN.md
│   ├── PROGRESS_LOG.md
│   └── TODO.md
│
├── index.html                     # Vite HTML entry
├── package.json                   # Dependencies and scripts
├── vite.config.js                 # Vite configuration
└── README.md                      # Project overview
```

---

## 📄 Pages Overview

| Page | Route | Purpose |
|------|-------|---------|
| **HomePage** | `/` | One-screen hero hub with animated background and 4 nav buttons |
| **ProductPage** | `/product` | Product Photography gallery/showcase |
| **GraphicPage** | `/graphic` | Graphic Design portfolio |
| **WebPage** | `/web` | Web Design projects showcase |
| **ContactPage** | `/contact` | Contact info, WhatsApp link, social links |

---

## 🧩 Components Overview

### Layout Components

| Component | Responsibility |
|-----------|----------------|
| **Layout** | Wraps all pages, provides consistent structure, handles page transitions |
| **PageTransition** | Animates enter/exit of page content using Framer Motion |

### Hero Components

| Component | Responsibility |
|-----------|----------------|
| **Hero** | Central branding area with name, tagline, and navigation buttons |
| **NavButton** | Glowing, animated button that links to sub-pages |
| **AnimatedBackground** | Full-viewport animated background (particles, shapes, gradients) |

### Gallery Components

| Component | Responsibility |
|-----------|----------------|
| **GalleryGrid** | Responsive grid for displaying portfolio items |
| **BackButton** | Floating button to return to main hub |

---

## 🔗 Component Relationships

```
App.jsx
└── Layout
    └── PageTransition
        ├── HomePage
        │   ├── AnimatedBackground
        │   └── Hero
        │       └── NavButton (×4)
        │
        ├── ProductPage
        │   ├── BackButton
        │   └── GalleryGrid
        │
        ├── GraphicPage
        │   ├── BackButton
        │   └── GalleryGrid
        │
        ├── WebPage
        │   ├── BackButton
        │   └── GalleryGrid
        │
        └── ContactPage
            └── BackButton
```

---

## 🎯 Component Responsibilities (Detailed)

### AnimatedBackground
- Renders behind all content (fixed position, z-index: -1)
- Contains floating geometric shapes, particles, or gradient animations
- Must be GPU-optimized (transform/opacity only)
- Respects prefers-reduced-motion

### Hero
- Centers name and tagline vertically
- Displays 4 NavButtons in a clean arrangement
- Manages button layout (grid or flex)

### NavButton
- Receives: label, destination route, optional icon
- Hover: glow intensifies, subtle scale/transform
- Click: ripple or pulse effect
- Uses React Router's Link component

### GalleryGrid
- Receives: array of items (image, title, description)
- Responsive: 1 col mobile → 2-3 cols desktop
- Items animate in on page load (staggered)

### PageTransition
- Wraps page content
- Animates opacity and transform on route change
- Uses AnimatePresence from Framer Motion


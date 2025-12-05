# Tech Stack & Architecture

## 🛠️ Chosen Stack

### Framework: **React + Vite**

**Why React + Vite:**
- ⚡ **Blazing fast development:** Vite's HMR is instant
- 📦 **Optimized production builds:** Tree-shaking, code-splitting out of the box
- 🎨 **Component-based:** Perfect for reusable animated components
- 🌐 **Static export:** Can generate pure static files for any hosting
- 🔧 **Rich ecosystem:** Access to animation libraries (Framer Motion, GSAP, Three.js)
- 📱 **SPA navigation:** Smooth page transitions without full reloads

### Styling: **CSS Modules + CSS Variables**

**Why this approach:**
- 🎯 **Scoped styles:** No class name collisions
- 🎨 **CSS Variables:** Easy theming and dynamic values for animations
- 🚀 **Zero runtime:** No styled-components overhead
- 💪 **Full CSS power:** Keyframes, custom properties, modern selectors

### Animation Libraries

| Library | Purpose |
|---------|---------|
| **Framer Motion** | Page transitions, component animations, gestures |
| **CSS Keyframes** | Background effects, glows, pulses |
| *Optional: Three.js/React Three Fiber* | If 3D background elements are desired |

### Additional Tools

- **React Router DOM** — Client-side routing for SPA navigation
- **Vite Plugin for SVG** — Inline SVG support for icons
- **Web Vitals** — Performance monitoring

---

## 🚀 Deployment Strategy

### Primary: **Static Hosting**

The site will be built as static files and deployed to:

**Recommended:** Vercel or Netlify
- Free tier is sufficient
- Automatic deployments from Git
- Global CDN for fast loading
- Easy custom domain setup

**Alternative:** GitHub Pages, Cloudflare Pages

### Build Output
```
npm run build → /dist folder → Deploy static files
```

### Domain
- Custom domain to be configured
- SSL/HTTPS automatic with modern hosts

---

## ⚡ Performance Strategy

### Goal: Lighthouse Score 90+

### Loading Performance

1. **Code Splitting**
   - Each page lazy-loaded via React.lazy()
   - Only load animation libraries when needed
   
2. **Asset Optimization**
   - WebP/AVIF for images
   - SVG for icons and simple graphics
   - Preload critical assets

3. **Font Strategy**
   - Limited font weights (2-3 max)
   - `font-display: swap` for no blocking
   - Subset fonts if using custom typeface

### Animation Performance

1. **GPU-Accelerated Properties Only**
   - `transform` and `opacity` for all animations
   - Avoid animating `width`, `height`, `top`, `left`
   
2. **Will-Change Hints**
   - Strategic use of `will-change` for heavy animations
   - Remove after animation completes

3. **Reduced Motion Support**
   - Respect `prefers-reduced-motion` media query
   - Provide static fallbacks

4. **Frame Rate Monitoring**
   - Target 60fps consistently
   - Throttle/pause offscreen animations

### Bundle Size Targets

| Asset Type | Target Size |
|------------|-------------|
| Initial JS | < 100KB gzipped |
| Initial CSS | < 30KB gzipped |
| Total page weight | < 500KB (excluding images) |

---

## 📁 Development Workflow

### Local Development
```bash
npm install        # Install dependencies
npm run dev        # Start dev server (localhost:5173)
npm run build      # Production build
npm run preview    # Preview production build locally
```

### File Organization Principles
- Feature-based component folders
- Colocated styles (CSS Module per component)
- Shared utilities in `/utils`
- Constants and config in dedicated files

---

## 🔮 Future Considerations

### Potential Enhancements
- **CMS Integration:** Headless CMS for gallery content (Sanity, Contentful)
- **Analytics:** Simple privacy-friendly analytics (Plausible, Fathom)
- **Internationalization:** Multi-language support if needed

### Scalability Path
The current architecture supports:
- Adding more portfolio categories
- Expanding gallery pages with filtering
- Adding a blog or case studies section

---

## ✅ Stack Summary

| Layer | Technology | Reason |
|-------|------------|--------|
| Framework | React 18 | Component model, ecosystem |
| Bundler | Vite | Speed, modern defaults |
| Routing | React Router v6 | SPA navigation |
| Styling | CSS Modules | Scoped, performant |
| Animation | Framer Motion + CSS | Powerful, smooth |
| Hosting | Vercel/Netlify | Free, fast, simple |


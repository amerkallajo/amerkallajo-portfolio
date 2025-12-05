# Routing & Navigation Plan

## 🗺️ URL Structure

### Routes Overview

| Path | Page Component | Description |
|------|----------------|-------------|
| `/` | HomePage | Main hub with hero and navigation buttons |
| `/product` | ProductPage | Product Photography gallery |
| `/graphic` | GraphicPage | Graphic Design portfolio |
| `/web` | WebPage | Web Design showcase |
| `/contact` | ContactPage | Contact information and social links |

### URL Design Principles

1. **Clean and memorable** — Short, lowercase, no special characters
2. **SEO-friendly** — Descriptive but concise
3. **No trailing slashes** — Consistent URL format
4. **No file extensions** — Modern SPA URLs

---

## 🔀 Navigation Flow

### Primary Flow (from Hub)

```
                    ┌─────────────────┐
                    │    HomePage     │
                    │       /         │
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
         ▼                   ▼                   ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ ProductPage │     │ GraphicPage │     │   WebPage   │
│  /product   │     │  /graphic   │     │    /web     │
└─────────────┘     └─────────────┘     └─────────────┘
         │                   │                   │
         └───────────────────┼───────────────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  ContactPage    │
                    │    /contact     │
                    └─────────────────┘
```

### Navigation Actions

| From | To | Trigger | Behavior |
|------|----|---------|----------|
| Hub | Any page | Click NavButton | Animated transition, same tab |
| Any page | Hub | Click BackButton | Animated transition, same tab |
| Any page | Any page | Direct URL | Full page load (if direct visit) |

---

## 🎬 Transition Behavior

### Page Transition Sequence

1. **User clicks navigation element**
2. **Exit animation begins** (current page fades/slides out)
3. **Route changes** (URL updates in browser)
4. **Enter animation begins** (new page fades/slides in)
5. **Scroll position resets** to top

### Transition Timing

| Phase | Duration | Easing |
|-------|----------|--------|
| Exit | 300ms | ease-in |
| Gap | 100ms | — |
| Enter | 400ms | ease-out |
| Total | ~800ms | — |

### Implementation Notes

```jsx
// Using Framer Motion's AnimatePresence
<AnimatePresence mode="wait">
  <Routes location={location} key={location.pathname}>
    {/* route definitions */}
  </Routes>
</AnimatePresence>
```

---

## 📱 Navigation Behavior

### Link Opening

- **All internal links:** Same tab (SPA navigation)
- **External links (socials):** New tab (`target="_blank"`)
- **WhatsApp link:** Opens WhatsApp app/web
- **Phone link:** Opens phone dialer

### Browser Back/Forward

- Fully supported via React Router
- Triggers same page transitions
- History maintained correctly

### Direct URL Access

- Any page can be accessed directly via URL
- No redirect to homepage first
- Page renders with enter animation

---

## ⌨️ Keyboard Navigation

### Focus Management

1. On page transition, focus moves to main content area
2. Skip link available to jump to main content
3. All interactive elements keyboard accessible

### Tab Order

1. Skip to content link (hidden until focused)
2. Logo/home link (if present)
3. Navigation buttons (in visual order)
4. Page content
5. Footer links (if present)

---

## 🔄 State Management

### No Global State Needed

- Each page is self-contained
- No data passed between routes
- Gallery data can be static imports or fetched per-page

### URL as State

- Current page state = current URL
- No query parameters needed initially
- Future: could add `/product?filter=lifestyle` etc.

---

## 📍 Scroll Behavior

### On Navigation

```jsx
// Reset scroll to top on route change
useEffect(() => {
  window.scrollTo(0, 0);
}, [location.pathname]);
```

### Within Pages

- Hub: No scroll (one viewport)
- Gallery pages: Normal scroll behavior
- Contact: Likely one viewport, no scroll

---

## 🔧 Router Configuration

### React Router Setup

```jsx
// Simplified structure
<BrowserRouter>
  <Layout>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/graphic" element={<GraphicPage />} />
        <Route path="/web" element={<WebPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  </Layout>
</BrowserRouter>
```

### 404 Handling

- Unknown routes redirect to homepage
- Could add custom 404 page later if needed

---

## 🌐 Deployment Routing

### Static Hosting Configuration

For SPA routing to work on static hosts, configure:

**Vercel:** Automatic with `vite.config.js`

**Netlify:** Add `_redirects` file:
```
/*    /index.html   200
```

**GitHub Pages:** May need HashRouter or custom configuration


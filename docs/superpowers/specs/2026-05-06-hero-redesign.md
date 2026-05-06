# Hero Section Redesign — Design Spec

## Goal

Redesign the hero section and "We Build With" tech strip into a single unified hero that feels alive and uncluttered. Merge the tech strip into the hero, add subtle ambient motion, and introduce a background SVG accent.

## What Changes

### Current state (3 separate blocks)
1. `.hero-section` — centered text with eyebrow, title, subtitle, CTAs
2. `.tech-strip` — horizontal bar with "WE BUILD WITH" label + 8 tech items with icons and text labels
3. `.gradient-transition.white-to-sage` — 48px gradient div

### New state (1 unified hero)
1. Single `.hero-section` containing all content
2. Tech strip absorbed as icon-only row below CTAs
3. No gradient transition div — hero flows directly into the next section

## Layout

Centered text layout (unchanged). Content stack top-to-bottom:

1. **Eyebrow** — `fa-microchip` icon + `AI ENGINEERING STUDIO` in JetBrains Mono 11px, letter-spacing 2.5px, teal color
2. **Title** — Plus Jakarta Sans 800, 56px
   - Line 1: "Your AI." in navy
   - Line 2: Rotating teal keyword (cycles: "Architected." → "Deployed." → "Scaled.")
   - Line 3: "Shipped. Scaled." in navy
3. **Subtitle** — Inter 17px, `--text-secondary`, max-width 500px, same copy as current
4. **CTAs** — Same two buttons (Start a Project + Explore Services), same styles
5. **Tech icons** — 8 Font Awesome icons in a horizontal row, no text labels, no "WE BUILD WITH" label, no borders

### Tech icons spec
- Icons: `fa-python`, `fa-angular`, `fa-react`, `fa-aws`, `fa-docker`, `fa-brain` (LangChain), `fa-database` (PostgreSQL), `fa-node-js`
- Size: 18px
- Color: `var(--text-muted)` at 50% opacity
- Gap: 20px between icons
- Margin-top: 48px from CTAs
- Centered, inline-flex

## Background SVG Accent

An abstract SVG element rendered behind the hero text content. Represents the "quantum" concept — concentric orbital rings with small node dots.

### SVG spec
- Dimensions: viewBox `0 0 500 500`, rendered at ~450px width/height
- Position: absolute, centered horizontally and vertically within `.hero-section`
- Opacity: 0.04 (4%)
- Color: `var(--accent-primary)` (#0D9488)
- Content: 3 concentric elliptical rings (orbital paths) at different tilts + 3-4 small circle nodes on the paths
- Stroke-only (no fills on rings), stroke-width 1.5-2px
- CSS animation: `rotate` 360deg over 35s, linear, infinite
- z-index: 0 (behind `.hero-inner` which has z-index: 1)

### SVG structure (inline in component template)
```svg
<svg class="hero-orbital" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
  <!-- Orbital ring 1 — wide horizontal -->
  <ellipse cx="250" cy="250" rx="220" ry="80" fill="none" stroke="currentColor" stroke-width="1.5" transform="rotate(-15 250 250)"/>
  <!-- Orbital ring 2 — tilted -->
  <ellipse cx="250" cy="250" rx="180" ry="120" fill="none" stroke="currentColor" stroke-width="1.5" transform="rotate(35 250 250)"/>
  <!-- Orbital ring 3 — steep -->
  <ellipse cx="250" cy="250" rx="160" ry="200" fill="none" stroke="currentColor" stroke-width="1.5" transform="rotate(-60 250 250)"/>
  <!-- Electron nodes -->
  <circle cx="470" cy="230" r="4" fill="currentColor"/>
  <circle cx="120" cy="340" r="3" fill="currentColor"/>
  <circle cx="300" cy="60" r="3.5" fill="currentColor"/>
</svg>
```

## Animations

### Entrance animations (on page load)

| Element | Transform | Duration | Delay | Easing |
|---------|-----------|----------|-------|--------|
| Eyebrow | `translateY(20px)` → `0`, opacity `0` → `1` | 600ms | 0ms | ease-out |
| Title | `translateY(20px)` → `0`, opacity `0` → `1` | 600ms | 150ms | ease-out |
| Subtitle | `translateY(20px)` → `0`, opacity `0` → `1` | 600ms | 300ms | ease-out |
| CTAs | `translateY(20px)` → `0`, opacity `0` → `1` | 600ms | 450ms | ease-out |
| Tech icons | opacity `0` → `1` | 400ms | 600ms | ease-out |

Implementation: CSS `@keyframes fadeUp` applied via animation classes. Elements start with `opacity: 0; transform: translateY(20px)` and use `animation-fill-mode: forwards`.

### Ambient background glow

A pulsing radial gradient behind the title area:
- CSS `@keyframes pulseGlow` — opacity oscillates between 0.03 and 0.06
- Duration: 8s, ease-in-out, infinite
- Applied via `::before` pseudo-element on `.hero-section`
- Radial gradient: `radial-gradient(circle at 50% 40%, rgba(13,148,136,0.06) 0%, transparent 50%)`
- Size: 600px x 600px, centered

### Teal keyword rotation

The teal `<span>` in the title cycles through 3 words:
- Words: "Architected.", "Deployed.", "Scaled."
- Cycle: 3s per word (9s total loop)
- Transition: crossfade (opacity 1 → 0, swap text, opacity 0 → 1), 400ms fade duration
- Implementation: Angular component with `setInterval` in `ngOnInit`, updating a `currentWord` property. CSS transition on opacity.

### Background SVG rotation

- `@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`
- Duration: 35s, linear, infinite
- Applied to `.hero-orbital` SVG element

## Accessibility

All animations respect `prefers-reduced-motion: reduce`:
- Entrance animations: elements render at final position immediately (no motion)
- Background glow: static at 0.04 opacity (no pulse)
- SVG rotation: stopped
- Keyword rotation: disabled, shows "Architected." statically

```css
@media (prefers-reduced-motion: reduce) {
  .hero-orbital,
  .hero-section::before,
  .hero-eyebrow,
  .hero-title,
  .hero-subtitle,
  .hero-ctas,
  .hero-tech-icons {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

## Responsive Behavior

### Tablet (< 1024px)
- Hero padding: 100px 32px 80px
- Title: 48px
- SVG background: scale to 350px

### Mobile (< 768px)
- Hero padding: 80px 24px 60px
- Title: 36px
- Subtitle: 15px
- SVG background: hidden (`display: none`)
- Keyword rotation: disabled, static "Architected."
- Tech icons: wrap to 2 rows of 4
- Entrance animations: duration shortened to 300ms, delays halved

### Small mobile (< 480px)
- Title: 30px
- Tech icons: hidden (`display: none`)
- CTAs: stack vertically, full width

## CSS Changes

### Remove
- `.tech-strip`, `.tech-strip-inner`, `.tech-label`, `.tech-logos`, `.tech-item`, `.tech-item i` — all styles
- `.hero-section::before` and `.hero-section::after` pseudo-elements (replaced by animated glow)
- `.gradient-transition.white-to-sage` usage (the class itself stays for other transitions)
- Responsive overrides for `.tech-strip`, `.tech-strip-inner`, `.tech-label`, `.tech-logos` at all breakpoints

### Add
- `.hero-orbital` — absolute positioned, centered, rotating SVG
- `.hero-tech-icons` — icon row styles
- `@keyframes fadeUp` — entrance animation
- `@keyframes pulseGlow` — ambient background glow
- `@keyframes spin` — SVG rotation
- `.hero-animate-*` classes — staggered animation delays
- `prefers-reduced-motion` overrides

### Modify
- `.hero-section` — remove `overflow: hidden` (or keep if SVG clips), adjust padding
- `.hero-section::before` — repurpose for animated glow (new gradient, animation)
- Remove `.hero-section::after` entirely

## Component Changes

### `hero.component.ts`
- Add `currentWord` property and rotation logic in `ngOnInit` / `ngOnDestroy`
- Replace template: unified hero with inline SVG, animated classes, tech icon row
- Remove tech strip HTML and gradient transition div

## Files Affected
- `src/app/hero/hero.component.ts` — template and component logic rewrite
- `src/global_styles.css` — remove tech strip styles, add animation keyframes and new hero styles, update responsive breakpoints

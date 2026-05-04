# Quantum Flare Landing Page — Full Rebuild Design Spec

## Overview

Complete rebuild of the Quantum Flare Technologies landing page. Transform from a generic blue-gradient tech site to a psychology-driven, AI-focused professional landing page. Angular 20 + Bootstrap 5.3 stack remains unchanged.

## Design System

### Color Palette

Every color justified by behavioral science and color psychology research.

| Token | Hex | Role | Psychology |
|-------|-----|------|-----------|
| `--bg-primary` | `#FAFAF7` | Hero, about backgrounds | Warm ivory reduces cognitive strain vs pure white. Premium perception — NN/g: whitespace increases perceived quality by 50% |
| `--bg-secondary` | `#F3F4F0` | Services, contact backgrounds | Sage tone creates visual rhythm between sections via gradient transitions |
| `--text-primary` | `#1A1A2E` | Headings, navbar, footer bg | Deep navy = authority + mental clarity. 74% associate blue family with trust (ACS Creative). Softer than pure black |
| `--text-secondary` | `#64748B` | Body text, descriptions | Slate gray provides comfortable reading contrast without harshness |
| `--text-muted` | `#94A3B8` | Labels, metadata | Light slate for tertiary information hierarchy |
| `--accent-primary` | `#0D9488` | Icons, eyebrows, teal accents | Blue intellect + green growth = innovation + calm trust. Avoids purple/blue AI cliché |
| `--accent-cta` | `#D4623C` | CTA buttons only | Von Restorff isolation effect — the only warm element. Terracotta = urgency without red's aggression |
| `--surface-card` | `#FFFFFF` | Cards on sage backgrounds | Clean white cards on sage create clear elevation hierarchy |
| `--border` | `rgba(0,0,0,0.05-0.08)` | Card borders, dividers | Subtle borders maintain structure without visual noise |
| `--destructive` | `#DC2626` | Error states | Standard error red |

**Section gradient transitions:**
- Hero (#FAFAF7) → Tech Strip (white) → gradient → Services (#F3F4F0)
- Services (#F3F4F0) → gradient → About (#FAFAF7)
- About (#FAFAF7) → gradient → Contact (#F3F4F0)
- Contact (#F3F4F0) → Footer (#1A1A2E)

### Typography

Three-tier system. Each font justified by psychology research.

| Font | Weight | Role | Psychology |
|------|--------|------|-----------|
| Plus Jakarta Sans | 800 | Hero h1 (56px), section h2 (40px) | Geometric sans-serif scores highest for perceived innovation (Monotype research). ExtraBold = authority. Tight tracking (-0.03em) = modern/premium |
| Plus Jakarta Sans | 700 | Card titles (17-20px), commitment headings | Bold maintains hierarchy within sections |
| Inter | 400 | Body text (15-17px) | #7 Google Font. Designed for screens. Humanist proportions = trust + readability |
| Inter | 500-600 | Nav links, labels, button text | Medium/SemiBold for interactive elements |
| JetBrains Mono | 400-500 | Eyebrows (11px), tech strip label | Monospace = "tool of the expert" schema. Signals engineering precision. Used sparingly |

**Type scale:** 11px (mono labels) → 12px (small/outcome text) → 13px (card body/nav) → 14-15px (body) → 17px (subtitle) → 40px (section h2) → 56px (hero h1)

**Line heights:** 1.06-1.1 for headings, 1.5-1.7 for body text

**Letter spacing:** -0.03em for hero h1, -0.025em for section h2, 2.5px for mono eyebrows

### Icons

Font Awesome 6 (solid variant). Loaded via CDN. Replaces Bootstrap Icons throughout.

Key icon mappings:
- Brand: `fa-bolt`
- Hero eyebrow: `fa-microchip`
- AI Systems: `fa-brain`
- RAG: `fa-magnifying-glass-chart`
- Web/Mobile: `fa-code`
- End-to-End: `fa-cubes`
- Cloud: `fa-server`
- Commitments: `fa-bolt`, `fa-scale-balanced`, `fa-handshake`, `fa-lock`
- Contact promises: `fa-shield-halved`, `fa-clock`, `fa-handshake-simple`
- Social: `fa-linkedin-in`, `fa-x-twitter`, `fa-github`

## Layout Architecture

### Container System

All content sections share a single `max-width: 1080px; margin: 0 auto` container. This fixes the alignment inconsistency in the original design.

| Section | Container | Alignment | Notes |
|---------|-----------|-----------|-------|
| Nav | Full-width, padding 48px | Flex space-between | Brand left, links right |
| Hero | Inner max-width 680px centered | Center | Statement piece — intentionally different |
| Tech Strip | 1080px container | Left flex | "WE BUILD WITH" + tech logos |
| Services | 1080px container | Left-aligned header | Bento grid fills container width |
| About | 1080px container | Left-aligned header | Text + 4-col commitment grid below |
| Contact | 1080px container | Left-right split | Left: headline + promises. Right: form (480px) |
| Footer | 1080px container | 4-column grid | Brand, Services, Company, Contact |

### Section padding

Consistent vertical rhythm: 80px top/bottom for all content sections. 48px horizontal padding on all full-width wrappers.

## Page Sections

### 1. Navbar

- Fixed top, warm ivory (#FAFAF7) background
- Brand: bolt icon + "Quantum Flare" in Plus Jakarta Sans 800
- Links: Home (active), Services, About, Contact
- CTA: "Start a Project" dark navy button
- Bottom border: 1px solid rgba(0,0,0,0.06)

### 2. Hero

- Centered layout, no right-side cards
- Subtle radial gradient orbs (teal top-right, terracotta bottom-left) at very low opacity
- Content (5 elements per Miller's Law):
  1. Eyebrow: "AI ENGINEERING STUDIO" in JetBrains Mono
  2. Headline: "Your AI. / Architected. / Shipped. Scaled." — customer outcome first (StoryBrand)
  3. Subtitle: "End-to-end AI engineering for teams that need production systems — not another proof of concept." — loss framing ("not another PoC")
  4. Primary CTA: "Start a Project" terracotta button
  5. Secondary CTA: "Explore Services" ghost button (anchor scroll)

### 3. Tech Strip

- White background, full-width
- "WE BUILD WITH" label in JetBrains Mono (authority signal per Cialdini)
- Tech logos: Python, Angular, React, AWS, Docker, LangChain, PostgreSQL, Node.js

### 4. Services (Bento Grid)

- Sage background (#F3F4F0)
- Header: "CAPABILITIES" eyebrow + "What changes when you work with us" (customer-centric, StoryBrand)
- Subtitle: "Every capability built around one question: does this get you to production faster?"
- 5 cards in bento layout (3-column grid):
  - Row 1: AI Systems Development (span 2, featured) + RAG Applications
  - Row 2: Web & Mobile Apps + End-to-End Products + Cloud Infrastructure (span 2, featured)
- Each card has: teal icon, title, benefit-focused description, teal outcome line
- Outcome lines use "not X" framing: "Production ML, not PowerPoint ML" (loss aversion)

### 5. About

- Warm ivory background (#FAFAF7)
- Header: "WHY QUANTUM FLARE" eyebrow
- Headline: "You bring the vision. / We bring the engineering." (customer as hero)
- Body uses PAS framework:
  - Problem: "Too many AI projects die in proof-of-concept limbo."
  - Agitate: "Brilliant ideas — stuck in month-long vendor evaluations and demos that never reach a real user."
  - Solve: "We move fast, build for production from sprint one, and tell you honestly when AI isn't the right tool."
- 4-column commitment grid below text:
  - We move fast (bolt icon)
  - We're honest (scale icon)
  - We're partners (handshake icon)
  - Your IP, always (lock icon)

### 6. Contact

- Sage background (#F3F4F0)
- Left-right split within 1080px container:
  - Left: "GET STARTED" eyebrow + "Tell us what you're building." headline + subtitle + 3 trust promises with icons
  - Right: Form card (480px) with 3 fields only (Hick's Law):
    1. Name + Work Email (side by side)
    2. "What are you building?" textarea
    3. Terracotta submit button: "Start Your Project"
- Trust promises (Cialdini reciprocity + risk reversal):
  - "No NDA needed to start"
  - "Response within 24 hours"
  - "No obligation, no pressure"

### 7. Footer

- Deep navy background (#1A1A2E)
- 4-column grid: Brand + tagline + social icons | Services links | Company links | Contact info
- Copyright line at bottom

## Psychology Principles Applied

| Principle | Researcher | Application |
|-----------|-----------|-------------|
| Von Restorff Effect | Hedwig von Restorff, 1933 | Terracotta CTA isolated against teal/navy palette |
| Hick's Law | Hick & Hyman, 1952 | Max 2 CTAs in hero. 3 form fields only |
| Miller's Law | George Miller, 1956 | Hero = 5 elements maximum |
| Z-Pattern Scanning | Nielsen Norman Group | Hero layout guides eye to CTA |
| Whitespace Premium | NN/g + Wiley/Iseki 2025 | Generous padding (120px/100px hero, 80px sections) |
| Cialdini: Authority | Robert Cialdini | Tech strip, monospace labels, precise language |
| Cialdini: Reciprocity | Robert Cialdini | Free assessment, no NDA, no obligation |
| StoryBrand | Donald Miller | Customer = hero, company = guide. All headlines about customer outcomes |
| PAS Framework | Dan Kennedy | About section: Problem → Agitate → Solve |
| Loss Aversion | Kahneman & Tversky | "Not another proof of concept", "not PowerPoint ML" |

## Anti-Patterns Avoided

- No purple/blue gradients (documented "AI slop")
- No fake statistics (company is early-stage)
- No serif headings (signals tradition, not innovation)
- No feature-first copy (benefit headlines convert +95%)
- No video CTAs (company has no video content)
- No emoji icons (Font Awesome SVG only — UI/UX Pro Max rule)

## Technical Notes

- Stack: Angular 20 standalone components + Bootstrap 5.3
- Fonts: Google Fonts CDN (Plus Jakarta Sans, Inter, JetBrains Mono)
- Icons: Font Awesome 6 CDN (replaces Bootstrap Icons)
- All styling in `src/global_styles.css` (current approach maintained)
- Components to modify: navbar, hero, services, about, contact, footer
- Font Awesome CDN link added to `src/index.html`

## Files to Modify

| File | Change |
|------|--------|
| `src/index.html` | Add Font Awesome CDN, update Google Fonts links |
| `src/global_styles.css` | Complete rewrite — new color system, typography, layout |
| `src/app/navbar/navbar.component.ts` | New markup, Font Awesome icons, updated styling |
| `src/app/hero/hero.component.ts` | Complete rebuild — centered layout, new copy |
| `src/app/services/services.component.ts` | Bento grid layout, Font Awesome icons, new copy |
| `src/app/about/about.component.ts` | New layout with commitment grid, PAS copy |
| `src/app/contact/contact.component.ts` | Left-right split, simplified form, trust badges |
| `src/app/footer/footer.component.ts` | Font Awesome icons, updated color scheme |

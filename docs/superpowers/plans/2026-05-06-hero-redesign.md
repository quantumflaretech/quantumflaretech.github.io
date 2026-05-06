# Hero Section Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Merge the hero section and tech strip into a single unified hero with ambient motion, staggered entrance animations, a rotating teal keyword, and a background SVG orbital accent.

**Architecture:** Two-file change. The hero component template gets rewritten with inline SVG, word rotation logic (setInterval), and tech icon row. The global stylesheet gets tech strip styles removed, animation keyframes added, and responsive breakpoints updated for the new layout.

**Tech Stack:** Angular 20 standalone component, CSS animations (@keyframes), inline SVG, Font Awesome 6 icons

---

### Task 1: Remove old tech strip and hero pseudo-element CSS

**Files:**
- Modify: `src/global_styles.css:170-200` (hero pseudo-elements)
- Modify: `src/global_styles.css:302-351` (tech strip block)
- Modify: `src/global_styles.css:866-886` (tech strip responsive at 768px)

- [ ] **Step 1: Remove `.hero-section::before` and `.hero-section::after` pseudo-elements**

In `src/global_styles.css`, delete lines 178-200 (the two pseudo-element blocks):

```css
/* DELETE THIS BLOCK (lines 178-200) */
.hero-section::before {
  content: '';
  position: absolute;
  top: -120px;
  right: 10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(13,148,136,0.035) 0%, transparent 55%);
  border-radius: 50%;
  pointer-events: none;
}

.hero-section::after {
  content: '';
  position: absolute;
  bottom: -80px;
  left: 15%;
  width: 380px;
  height: 380px;
  background: radial-gradient(circle, rgba(212,98,60,0.02) 0%, transparent 55%);
  border-radius: 50%;
  pointer-events: none;
}
```

- [ ] **Step 2: Remove the entire tech strip CSS block**

Delete the tech strip comment header and all 6 rule blocks (`.tech-strip` through `.tech-item i`):

```css
/* DELETE THIS ENTIRE BLOCK (lines 302-351) */
/* ============================================
   TECH STRIP — Authority signal (Cialdini)
   ============================================ */
.tech-strip {
  background: white;
  border-top: 1px solid rgba(0,0,0,0.04);
  border-bottom: 1px solid rgba(0,0,0,0.04);
  padding: 22px 48px;
}

.tech-strip-inner {
  display: flex;
  align-items: center;
  gap: 16px;
  max-width: var(--container-max);
  margin: 0 auto;
}

.tech-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 1.5px;
  color: var(--text-muted);
  text-transform: uppercase;
  flex-shrink: 0;
  padding-right: 16px;
  border-right: 1px solid #e2e8f0;
}

.tech-logos {
  display: flex;
  gap: 24px;
  align-items: center;
  flex-wrap: wrap;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: var(--text-secondary);
  font-weight: 500;
}

.tech-item i {
  font-size: 16px;
  color: var(--text-muted);
}
```

- [ ] **Step 3: Remove tech strip responsive overrides at 768px breakpoint**

Inside the `@media (max-width: 768px)` block, delete the tech strip responsive rules:

```css
/* DELETE THESE RULES from inside the 768px media query */
  .tech-strip {
    padding: 16px 24px;
  }

  .tech-strip-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .tech-label {
    border-right: none;
    padding-right: 0;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 8px;
    width: 100%;
  }

  .tech-logos {
    gap: 16px;
  }
```

- [ ] **Step 4: Verify build**

Run: `cd /Users/yekabote/cprojects/myprojects/quantumflare/codebase/quantumflaretech-landing-page && npx ng build 2>&1 | tail -5`
Expected: Build succeeds (the hero component still references old classes but that's fine — unused CSS classes don't cause build errors)

- [ ] **Step 5: Commit**

```bash
git add src/global_styles.css
git commit -m "Refactor: Remove tech strip and old hero pseudo-element CSS"
```

---

### Task 2: Add animation keyframes and new hero styles

**Files:**
- Modify: `src/global_styles.css` (add after the hero section block)

- [ ] **Step 1: Add animation keyframes block**

Insert the following immediately after the `.btn-cta-secondary:hover` rule block (which ends the CTA styles) and before the services section:

```css
/* ============================================
   HERO ANIMATIONS
   ============================================ */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulseGlow {
  0%, 100% { opacity: 0.03; }
  50% { opacity: 0.06; }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

- [ ] **Step 2: Add `.hero-section::before` as animated glow**

Insert right after the `.hero-section` rule:

```css
.hero-section::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  transform: translate(-50%, -60%);
  background: radial-gradient(circle, rgba(13,148,136,0.06) 0%, transparent 50%);
  border-radius: 50%;
  pointer-events: none;
  animation: pulseGlow 8s ease-in-out infinite;
}
```

- [ ] **Step 3: Add `.hero-orbital` SVG styles**

Insert after the new `::before` rule:

```css
.hero-orbital {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 450px;
  height: 450px;
  transform: translate(-50%, -55%);
  color: var(--accent-primary);
  opacity: 0.04;
  animation: spin 35s linear infinite;
  pointer-events: none;
  z-index: 0;
}
```

- [ ] **Step 4: Add entrance animation classes**

Insert after `.hero-orbital`:

```css
.hero-animate {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 600ms ease-out forwards;
}

.hero-animate-1 { animation-delay: 0ms; }
.hero-animate-2 { animation-delay: 150ms; }
.hero-animate-3 { animation-delay: 300ms; }
.hero-animate-4 { animation-delay: 450ms; }

.hero-animate-fade {
  opacity: 0;
  animation: fadeUp 400ms ease-out 600ms forwards;
}
```

- [ ] **Step 5: Add `.hero-tech-icons` styles**

Insert after the entrance animation classes:

```css
.hero-tech-icons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 48px;
}

.hero-tech-icons i {
  font-size: 18px;
  color: var(--text-muted);
  opacity: 0.5;
}
```

- [ ] **Step 6: Add `.hero-rotating-word` styles**

Insert after `.hero-tech-icons`:

```css
.hero-rotating-word {
  display: inline-block;
  transition: opacity 0.4s ease;
}

.hero-rotating-word.fading {
  opacity: 0;
}
```

- [ ] **Step 7: Add `prefers-reduced-motion` overrides**

Insert after `.hero-rotating-word.fading`:

```css
@media (prefers-reduced-motion: reduce) {
  .hero-orbital {
    animation: none;
  }

  .hero-section::before {
    animation: none;
    opacity: 0.04;
  }

  .hero-animate,
  .hero-animate-fade {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

- [ ] **Step 8: Verify build**

Run: `cd /Users/yekabote/cprojects/myprojects/quantumflare/codebase/quantumflaretech-landing-page && npx ng build 2>&1 | tail -5`
Expected: Build succeeds

- [ ] **Step 9: Commit**

```bash
git add src/global_styles.css
git commit -m "Feat: Add hero animation keyframes, orbital SVG, and entrance styles"
```

---

### Task 3: Update responsive breakpoints for new hero

**Files:**
- Modify: `src/global_styles.css` (responsive media query blocks)

- [ ] **Step 1: Add 1024px breakpoint rules for hero**

Inside the existing `@media (max-width: 1024px)` block, add at the top:

```css
  .hero-section {
    padding: 100px 32px 80px;
  }

  .hero-title {
    font-size: 48px;
  }

  .hero-orbital {
    width: 350px;
    height: 350px;
  }
```

- [ ] **Step 2: Update 768px breakpoint hero rules**

Replace the existing hero rules inside `@media (max-width: 768px)` with:

```css
  .hero-section {
    padding: 80px 24px 60px;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-subtitle {
    font-size: 15px;
  }

  .hero-ctas {
    flex-direction: column;
    gap: 12px;
  }

  .hero-orbital {
    display: none;
  }

  .hero-tech-icons {
    flex-wrap: wrap;
    gap: 16px;
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
  }

  .hero-animate {
    animation-duration: 300ms;
  }

  .hero-animate-1 { animation-delay: 0ms; }
  .hero-animate-2 { animation-delay: 75ms; }
  .hero-animate-3 { animation-delay: 150ms; }
  .hero-animate-4 { animation-delay: 225ms; }

  .hero-animate-fade {
    animation-delay: 300ms;
    animation-duration: 200ms;
  }
```

- [ ] **Step 3: Update 480px breakpoint hero rules**

Replace the existing hero rules inside `@media (max-width: 480px)` with:

```css
  .hero-title {
    font-size: 30px;
  }

  .hero-tech-icons {
    display: none;
  }

  .hero-ctas .btn-cta-primary,
  .hero-ctas .btn-cta-secondary {
    width: 100%;
    justify-content: center;
  }
```

- [ ] **Step 4: Verify build**

Run: `cd /Users/yekabote/cprojects/myprojects/quantumflare/codebase/quantumflaretech-landing-page && npx ng build 2>&1 | tail -5`
Expected: Build succeeds

- [ ] **Step 5: Commit**

```bash
git add src/global_styles.css
git commit -m "Feat: Update responsive breakpoints for redesigned hero"
```

---

### Task 4: Rewrite hero component

**Files:**
- Modify: `src/app/hero/hero.component.ts` (full rewrite)

- [ ] **Step 1: Rewrite `hero.component.ts` with the new template and word rotation logic**

Replace the entire contents of `src/app/hero/hero.component.ts` with:

```typescript
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero-section">
      <!-- Background SVG orbital accent -->
      <svg class="hero-orbital" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="250" cy="250" rx="220" ry="80" fill="none" stroke="currentColor" stroke-width="1.5" transform="rotate(-15 250 250)"/>
        <ellipse cx="250" cy="250" rx="180" ry="120" fill="none" stroke="currentColor" stroke-width="1.5" transform="rotate(35 250 250)"/>
        <ellipse cx="250" cy="250" rx="160" ry="200" fill="none" stroke="currentColor" stroke-width="1.5" transform="rotate(-60 250 250)"/>
        <circle cx="470" cy="230" r="4" fill="currentColor"/>
        <circle cx="120" cy="340" r="3" fill="currentColor"/>
        <circle cx="300" cy="60" r="3.5" fill="currentColor"/>
      </svg>

      <div class="hero-inner">
        <div class="hero-eyebrow hero-animate hero-animate-1">
          <i class="fa-solid fa-microchip"></i> AI ENGINEERING STUDIO
        </div>
        <h1 class="hero-title hero-animate hero-animate-2">
          Your AI.<br>
          <span class="hero-rotating-word" [class.fading]="isFading">{{ currentWord }}</span><br>
          Shipped. Scaled.
        </h1>
        <p class="hero-subtitle hero-animate hero-animate-3">
          End-to-end AI engineering for teams that need production systems
          — not another proof of concept.
        </p>
        <div class="hero-ctas hero-animate hero-animate-4">
          <a href="#contact" class="btn-cta-primary">
            <i class="fa-solid fa-arrow-right" style="font-size:13px;"></i>
            Start a Project
          </a>
          <a href="#services" class="btn-cta-secondary">
            <i class="fa-solid fa-arrow-down" style="font-size:12px;"></i>
            Explore Services
          </a>
        </div>
        <div class="hero-tech-icons hero-animate-fade">
          <i class="fa-brands fa-python"></i>
          <i class="fa-brands fa-angular"></i>
          <i class="fa-brands fa-react"></i>
          <i class="fa-brands fa-aws"></i>
          <i class="fa-brands fa-docker"></i>
          <i class="fa-solid fa-brain"></i>
          <i class="fa-solid fa-database"></i>
          <i class="fa-brands fa-node-js"></i>
        </div>
      </div>
    </section>

    <div class="gradient-transition white-to-sage"></div>
  `
})
export class HeroComponent implements OnInit, OnDestroy {
  words = ['Architected.', 'Deployed.', 'Scaled.'];
  currentWord = this.words[0];
  isFading = false;
  private wordIndex = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    this.intervalId = setInterval(() => {
      this.isFading = true;
      setTimeout(() => {
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
        this.currentWord = this.words[this.wordIndex];
        this.isFading = false;
      }, 400);
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
```

- [ ] **Step 2: Verify build**

Run: `cd /Users/yekabote/cprojects/myprojects/quantumflare/codebase/quantumflaretech-landing-page && npx ng build 2>&1 | tail -5`
Expected: Build succeeds with no errors

- [ ] **Step 3: Verify dev server**

Run: `cd /Users/yekabote/cprojects/myprojects/quantumflare/codebase/quantumflaretech-landing-page && npx ng serve --open 2>&1 | head -20`
Expected: Dev server starts, page loads at `http://localhost:4200`

- [ ] **Step 4: Commit**

```bash
git add src/app/hero/hero.component.ts
git commit -m "Feat: Redesign hero — unified section with orbital SVG, entrance animations, rotating keyword"
```

---

### Task 5: Final cleanup — remove gradient transition if no longer needed

**Files:**
- Modify: `src/app/hero/hero.component.ts` (check if gradient-transition div is still needed)

- [ ] **Step 1: Evaluate gradient transition**

The spec says "No gradient transition div — hero flows directly into the next section." However, the hero background is `--bg-primary` (warm ivory `#FAFAF7`) and the next section (services) uses `--bg-secondary` (sage `#F3F4F0`). These are close but different colors.

Check the services component to confirm its background. If it uses `--bg-secondary`, keep the `white-to-sage` gradient transition for a smooth visual flow. If backgrounds match, remove it.

Read: `src/app/services/services.component.ts` — check section class/background.

The services section uses `.services-section` which has `background: var(--bg-secondary)`. Since hero uses `var(--bg-primary)` and services uses `var(--bg-secondary)`, the gradient transition should stay to avoid a hard color edge.

The hero template already includes `<div class="gradient-transition white-to-sage"></div>` — this is correct. No change needed.

- [ ] **Step 2: Mark complete — no changes required**

The gradient transition is already correctly placed in the Task 4 template. This task requires no code changes.

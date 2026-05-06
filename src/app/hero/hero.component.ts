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
        <circle cx="440" cy="210" r="4" fill="currentColor"/>
        <circle cx="80" cy="320" r="3" fill="currentColor"/>
        <circle cx="280" cy="70" r="3.5" fill="currentColor"/>
      </svg>

      <div class="hero-split">
        <!-- Left: Text content -->
        <div class="hero-left">
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

        <!-- Right: Animated terminal -->
        <div class="hero-right hero-animate hero-animate-3">
          <div class="hero-terminal">
            <div class="terminal-header">
              <div class="terminal-dots">
                <span class="dot dot-red"></span>
                <span class="dot dot-yellow"></span>
                <span class="dot dot-green"></span>
              </div>
              <span class="terminal-title">quantum-flare</span>
            </div>
            <div class="terminal-body">
              <div class="terminal-line line-1">
                <span class="terminal-prompt">$</span>
                <span class="terminal-cmd">qf init</span>
                <span class="terminal-flag">--stack</span>
                <span class="terminal-arg">ml-pipeline</span>
              </div>
              <div class="terminal-line line-2">
                <span class="terminal-muted">&#x25B8; Scaffolding project...</span>
              </div>
              <div class="terminal-line line-3">
                <span class="terminal-muted">&#x25B8; Configuring RAG pipeline...</span>
              </div>
              <div class="terminal-line line-4">
                <span class="terminal-muted">&#x25B8; Provisioning AWS infra...</span>
              </div>
              <div class="terminal-line line-5">
                <span class="terminal-success">&#x2714; Pipeline deployed to production</span>
              </div>
              <div class="terminal-line line-6">
                <span class="terminal-prompt">$</span>
                <span class="terminal-cmd">qf status</span>
              </div>
              <div class="terminal-line line-7">
                <span class="terminal-accent">&#x25CF; API</span>
                <span class="terminal-success">healthy</span>
                <span class="terminal-muted terminal-sep">|</span>
                <span class="terminal-accent">&#x25CF; Model</span>
                <span class="terminal-success">serving</span>
                <span class="terminal-muted terminal-sep">|</span>
                <span class="terminal-accent">&#x25CF; Latency</span>
                <span class="terminal-success">42ms</span>
              </div>
              <div class="terminal-line line-8">
                <span class="terminal-prompt">$</span>
                <span class="terminal-cursor"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="gradient-transition white-to-sage"></div>
  `
})
export class HeroComponent implements OnInit, OnDestroy {
  words = ['Architected.', 'Deployed.', 'Optimized.'];
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

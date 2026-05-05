import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero-section">
      <div class="hero-inner">
        <div class="hero-eyebrow">
          <i class="fa-solid fa-microchip"></i> AI ENGINEERING STUDIO
        </div>
        <h1 class="hero-title">
          Your AI.<br>
          <span>Architected.</span><br>
          Shipped. Scaled.
        </h1>
        <p class="hero-subtitle">
          End-to-end AI engineering for teams that need production systems
          — not another proof of concept.
        </p>
        <div class="hero-ctas">
          <a href="#contact" class="btn-cta-primary">
            <i class="fa-solid fa-arrow-right" style="font-size:13px;"></i>
            Start a Project
          </a>
          <a href="#services" class="btn-cta-secondary">
            <i class="fa-solid fa-arrow-down" style="font-size:12px;"></i>
            Explore Services
          </a>
        </div>
      </div>
    </section>

    <!-- Tech Strip — Authority signal (Cialdini) -->
    <div class="tech-strip">
      <div class="tech-strip-inner">
        <div class="tech-label">WE BUILD WITH</div>
        <div class="tech-logos">
          <div class="tech-item"><i class="fa-brands fa-python"></i> Python</div>
          <div class="tech-item"><i class="fa-brands fa-angular"></i> Angular</div>
          <div class="tech-item"><i class="fa-brands fa-react"></i> React</div>
          <div class="tech-item"><i class="fa-brands fa-aws"></i> AWS</div>
          <div class="tech-item"><i class="fa-brands fa-docker"></i> Docker</div>
          <div class="tech-item"><i class="fa-solid fa-brain"></i> LangChain</div>
          <div class="tech-item"><i class="fa-solid fa-database"></i> PostgreSQL</div>
          <div class="tech-item"><i class="fa-brands fa-node-js"></i> Node.js</div>
        </div>
      </div>
    </div>

    <div class="gradient-transition white-to-sage"></div>
  `
})
export class HeroComponent {}

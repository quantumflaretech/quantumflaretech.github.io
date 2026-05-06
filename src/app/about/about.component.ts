import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-section">
      <div class="qf-container">
        <div class="section-eyebrow">WHY QUANTUM FLARE</div>
        <div class="about-text">
          <h2>You bring the <span>vision</span>.<br>We bring the engineering.</h2>
          <p>
            Too many AI projects die in proof-of-concept limbo. We built Quantum Flare
            to be different — production from sprint one, honest about what AI can and can't do.
          </p>
        </div>

        <div class="commitments-grid">
          <div class="commitment-card">
            <div class="commitment-title">
              <i class="fa-solid fa-bolt"></i>
              <h5>We move fast</h5>
            </div>
            <p>Production-first from sprint one. No 90-day "discovery" phases.</p>
          </div>
          <div class="commitment-card">
            <div class="commitment-title">
              <i class="fa-solid fa-scale-balanced"></i>
              <h5>We're honest</h5>
            </div>
            <p>If AI isn't right for your problem, we'll say so before you spend anything.</p>
          </div>
          <div class="commitment-card">
            <div class="commitment-title">
              <i class="fa-solid fa-handshake"></i>
              <h5>We're partners</h5>
            </div>
            <p>Not a vendor you manage. A team that cares about your outcome.</p>
          </div>
          <div class="commitment-card">
            <div class="commitment-title">
              <i class="fa-solid fa-lock"></i>
              <h5>Your IP, always</h5>
            </div>
            <p>Everything we build is yours. Full code ownership, no lock-in.</p>
          </div>
        </div>
      </div>
    </section>
    <div class="gradient-transition ivory-to-sage"></div>
  `
})
export class AboutComponent {}

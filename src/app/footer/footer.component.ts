import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="qf-container">
        <div class="footer-grid">
          <div>
            <div class="footer-brand">
              <img src="assets/logo-mark.svg" alt="" class="footer-logo">
              <div class="footer-brand-text">
                <span class="footer-brand-name">Quantum <span class="brand-accent">Flare</span></span>
                <span class="footer-brand-sub">TECHNOLOGIES</span>
              </div>
            </div>
            <p>AI engineering for teams that ship.</p>
          </div>
          <div>
            <h6>Services</h6>
            <ul>
              <li><a href="#services">AI Systems</a></li>
              <li><a href="#services">RAG Applications</a></li>
              <li><a href="#services">Web & Mobile</a></li>
              <li><a href="#services">Cloud Infrastructure</a></li>
            </ul>
          </div>
          <div>
            <h6>Company</h6>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h6>Contact</h6>
            <p>
              <a href="mailto:info@quantumflaretechnologies.com" style="color: var(--text-muted); text-decoration: none;">
                <i class="fa-solid fa-envelope" style="color: var(--accent-primary); margin-right: 6px; font-size: 11px;"></i>
                info&#64;quantumflaretechnologies.com
              </a>
            </p>
            <p style="margin-top: 8px;">
              <i class="fa-solid fa-location-dot" style="color: var(--accent-primary); margin-right: 6px; font-size: 11px;"></i>
               #323, 1st F Main Road, Koramangala 8th Block, Banglore, India - 560034
            </p>
          </div>
        </div>
        <div class="footer-line"></div>
        <div class="footer-copy">&copy; 2026 Quantum Flare Technologies. All rights reserved.</div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
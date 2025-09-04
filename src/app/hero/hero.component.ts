import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 hero-content slide-in-left">
            <h1 class="hero-title">
              Welcome to <span class="accent-text">Quantum Flare</span> Technologies
            </h1>
            <p class="hero-subtitle">
              Empowering businesses with next-generation technology solutions
            </p>
            <p class="hero-description">
              From AI systems to end-to-end product development, we transform your ideas into cutting-edge digital experiences that drive innovation and growth.
            </p>
            <div class="hero-buttons">
              <a href="#contact" class="btn btn-primary-hero">
                Let's Build Together
              </a>
              <a href="#services" class="btn btn-outline-hero">
                Explore Services
              </a>
            </div>
          </div>
          <div class="col-lg-6 hero-image slide-in-right">
            <img 
              src="/assets/images/hero-banner.jpeg" 
              alt="Modern office workspace with technology setup"
              class="img-fluid">
          </div>
        </div>
      </div>
    </section>
    <div class="fade-transition"></div>
  `
})
export class HeroComponent {}
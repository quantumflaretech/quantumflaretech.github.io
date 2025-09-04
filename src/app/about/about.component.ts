import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 about-content slide-in-left" [class.visible]="isVisible">
            <div class="mb-3">
              <span class="tag blue">About Quantum Flare</span>
            </div>
            <h2 class="about-title">Driving Innovation Through Technology</h2>
            <p class="about-description">
              At Quantum Flare Technologies, we believe in the transformative power of technology. Our team of experts combines deep technical knowledge with innovative thinking to deliver solutions that don't just meet today's needs, but anticipate tomorrow's challenges.
            </p>
            <p class="about-description">
              From AI-powered applications to comprehensive data engineering, we're committed to pushing the boundaries of what's possible and helping businesses thrive in the digital age.
            </p>
            <div class="about-tags">
              <span class="tag blue">AI & Machine Learning</span>
              <span class="tag green">Cloud Solutions</span>
              <span class="tag blue">Digital Transformation</span>
            </div>
          </div>
          <div class="col-lg-6 ms-4 ps-4 slide-in-right" [class.visible]="isVisible">
            <div class="value-props">
              <div class="value-prop">
                <div class="value-prop-icon">
                  <i class="bi bi-lightning-charge"></i>
                </div>
                <h6 class="value-prop-title">Innovation</h6>
                <p class="value-prop-description">Pioneering next-generation solutions</p>
              </div>
              <div class="value-prop">
                <div class="value-prop-icon">
                  <i class="bi bi-bullseye"></i>
                </div>
                <h6 class="value-prop-title">Precision</h6>
                <p class="value-prop-description">Delivering exactly what you need</p>
              </div>
              <div class="value-prop">
                <div class="value-prop-icon">
                  <i class="bi bi-people"></i>
                </div>
                <h6 class="value-prop-title">Partnership</h6>
                <p class="value-prop-description">Your success is our mission</p>
              </div>
              <div class="value-prop">
                <div class="value-prop-icon">
                  <i class="bi bi-lightbulb"></i>
                </div>
                <h6 class="value-prop-title">Vision</h6>
                <p class="value-prop-description">Transforming ideas into reality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent implements OnInit {
  isVisible = false;

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
    }, 300);
  }
}
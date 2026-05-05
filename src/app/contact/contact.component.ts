import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact-section">
      <div class="qf-container">
        <div class="contact-layout">
          <div class="contact-text">
            <div class="section-eyebrow">GET STARTED</div>
            <h2>Tell us what<br>you're building.</h2>
            <p>
              No sales pitch. We'll send an honest assessment of how we can
              help — within 24 hours.
            </p>
            <div class="contact-promises">
              <div class="promise-item">
                <div class="promise-icon"><i class="fa-solid fa-shield-halved"></i></div>
                <span>No NDA needed to start</span>
              </div>
              <div class="promise-item">
                <div class="promise-icon"><i class="fa-solid fa-clock"></i></div>
                <span>Response within 24 hours</span>
              </div>
              <div class="promise-item">
                <div class="promise-icon"><i class="fa-solid fa-handshake-simple"></i></div>
                <span>No obligation, no pressure</span>
              </div>
            </div>
          </div>

          <div class="contact-form-wrap">
            <form class="contact-form-card" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="row mb-3">
                <div class="col-6">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    [(ngModel)]="formData.name"
                    required
                    placeholder="Your full name">
                </div>
                <div class="col-6">
                  <label for="email">Work Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    [(ngModel)]="formData.email"
                    required
                    placeholder="you@company.com">
                </div>
              </div>
              <div class="mb-3">
                <label for="message">What are you building?</label>
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  [(ngModel)]="formData.message"
                  rows="4"
                  required
                  placeholder="Describe your project in a few sentences...">
                </textarea>
              </div>
              <button
                type="submit"
                class="btn-submit"
                [disabled]="!contactForm.form.valid">
                <i class="fa-solid fa-paper-plane"></i>
                Start Your Project
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      console.log('Form submitted:', this.formData);
      alert('Thank you! We\'ll send you an honest assessment within 24 hours.');
      this.formData = { name: '', email: '', message: '' };
    }
  }
}
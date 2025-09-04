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
      <div class="container">
        <div class="text-center mb-5">
          <div class="contact-header-icon">
            <i class="bi bi-chat-dots"></i>
          </div>
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">
            Ready to transform your ideas into reality? Let's discuss your project and explore how we can help you achieve your technology goals.
          </p>
        </div>
        
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="contact-form-wrapper">
              <form class="contact-form fade-in visible" (ngSubmit)="onSubmit()" #contactForm="ngForm">
                <div class="form-header">
                  <h4 class="form-title">Start Your Project</h4>
                  <p class="form-subtitle">Tell us about your vision and we'll bring it to life</p>
                </div>
                
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-group">
                      <label for="name" class="form-label">
                        <i class="bi bi-person me-2"></i>Full Name
                      </label>
                      <input 
                        type="text" 
                        class="form-control" 
                        id="name" 
                        name="name"
                        [(ngModel)]="formData.name"
                        required
                        placeholder="Enter your full name">
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-group">
                      <label for="email" class="form-label">
                        <i class="bi bi-envelope me-2"></i>Email Address
                      </label>
                      <input 
                        type="email" 
                        class="form-control" 
                        id="email" 
                        name="email"
                        [(ngModel)]="formData.email"
                        required
                        placeholder="Enter your email address">
                    </div>
                  </div>
                </div>
                
                <div class="mb-4">
                  <div class="form-group">
                    <label for="message" class="form-label">
                      <i class="bi bi-chat-text me-2"></i>Project Details
                    </label>
                    <textarea 
                      class="form-control" 
                      id="message" 
                      name="message"
                      [(ngModel)]="formData.message"
                      rows="6" 
                      required
                      placeholder="Tell us about your project, goals, and how we can help you achieve them.">
                    </textarea>
                  </div>
                </div>
                
                <div class="text-center">
                  <button 
                    type="submit" 
                    class="btn btn-primary-hero btn-submit"
                    [disabled]="!contactForm.form.valid">
                    <i class="bi bi-send me-2"></i>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            <div class="contact-info-cards">
              <div class="row mt-5 text-center">
                <div class="col-md-12 mb-4">
                  <div class="contact-info-card">
                    <div class="contact-info-icon">
                      <i class="bi bi-envelope"></i>
                    </div>
                    <h6 class="contact-info-title">Email Us</h6>
                    <a class="contact-info-description text-decoration-none" href="mailto:info@quantumflaretechnologies.com">
                        info&#64;quantumflaretechnologies.com
                    </a>
                  </div>
                </div>

              </div>
            </div>
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
      alert('Thank you for your message! We\'ll get back to you within 24 hours.');
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        message: ''
      };
    }
  }
}
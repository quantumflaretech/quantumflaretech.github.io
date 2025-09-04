import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mb-4">
            <h5 class="text-white mb-3">
              <i class="bi bi-lightning-charge-fill me-2"></i>
              Quantum Flare Technologies
            </h5>
            <p class="text-light-emphasis">
              Transforming ideas into innovative technology solutions that drive business success.
            </p>
          </div>
          
          <div class="col-lg-2 mb-4">
            <h6 class="text-white mb-3">Services</h6>
            <ul class="footer-links">
              <li><a href="#services" class="text-light-emphasis">App Development</a></li>
              <li><a href="#services" class="text-light-emphasis">Web Development</a></li>
              <li><a href="#services" class="text-light-emphasis">Data Engineering</a></li>
              <li><a href="#services" class="text-light-emphasis">AI Systems</a></li>
            </ul>
          </div>
          
          <div class="col-lg-2 mb-4">
            <h6 class="text-white mb-3">Company</h6>
            <ul class="footer-links">
              <li><a href="#about" class="text-light-emphasis">About Us</a></li>
              <li><a href="#contact" class="text-light-emphasis">Contact</a></li>
              <li><a href="#" class="text-light-emphasis">Careers</a></li>
              <li><a href="#" class="text-light-emphasis">Blog</a></li>
            </ul>
          </div>
          
          <div class="col-lg-4 mb-4">
            <h6 class="text-white mb-3">Connect</h6>
            <div class="social-links mb-3">
              <a href="#" class="social-link">
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="#" class="social-link">
                <i class="bi bi-twitter"></i>
              </a>
              <a href="#" class="social-link">
                <i class="bi bi-github"></i>
              </a>
            </div>
            <p class="text-light-emphasis">
              <i class="bi bi-envelope me-2"></i>
              info&#64;quantumflaretechnologies.com
            </p>
            <p class="text-light-emphasis">
            <i class="bi bi-geo-alt-fill me-2"></i>
            #323, 1st F Main Road, Koramangala 8th Block, Banglore, India - 560034
          </p>

          </div>
        </div>
        
        <hr class="footer-divider">
        
        <div class="row">
          <div class="col-12 text-center">
            <p class="text-light-emphasis mb-0">
              © 2025 Quantum Flare Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
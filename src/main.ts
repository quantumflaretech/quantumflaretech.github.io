import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HeroComponent } from './app/hero/hero.component';
import { ServicesComponent } from './app/services/services.component';
import { AboutComponent } from './app/about/about.component';
import { ContactComponent } from './app/contact/contact.component';
import { FooterComponent } from './app/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-services></app-services>
    <app-about></app-about>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `
})
export class App {}

// Initialize smooth scrolling and animations after the app loads
document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href') as string);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe elements for animations
  setTimeout(() => {
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
      observer.observe(el);
    });
  }, 100);

  // Navbar scroll visibility
  let lastScrollY = window.scrollY;
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      navbar?.classList.add('visible');
    } else {
      navbar?.classList.remove('visible');
    }
    
    lastScrollY = currentScrollY;
  });
});

bootstrapApplication(App);
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  color: 'blue' | 'green';
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="services-section">
      <div class="container">
        <h2 class="section-title">Our Core Services</h2>
        <p class="section-subtitle">
          We provide comprehensive technology solutions tailored to meet your business needs and drive digital transformation.
        </p>
        
        <div class="services-grid">
          <div *ngFor="let service of services; let i = index" 
               class="service-card fade-in" 
               [class.visible]="isVisible"
               [style.animation-delay]="(i * 0.1) + 's'">
            <div class="service-icon">
              <i [class]="'bi ' + service.icon + ' ' + service.color"></i>
            </div>
            <h5 class="service-title">{{ service.title }}</h5>
            <p class="service-description">{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent implements OnInit {
  isVisible = false;
  
  services: Service[] = [
    {
      icon: 'bi-phone',
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      color: 'blue'
    },
    {
      icon: 'bi-globe',
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      color: 'green'
    },
    // {
    //   icon: 'bi-database',
    //   title: 'Data Engineering',
    //   description: 'Scalable data pipelines and analytics solutions to unlock insights from your data.',
    //   color: 'blue'
    // },
    {
      icon: 'bi-robot',
      title: 'AI Systems Development',
      description: 'Intelligent systems and machine learning solutions that automate and optimize operations.',
      color: 'green'
    },
    {
      icon: 'bi-search',
      title: 'RAG Application Development',
      description: 'Retrieval-Augmented Generation applications for enhanced AI-powered knowledge systems.',
      color: 'blue'
    },
    {
      icon: 'bi-box',
      title: 'End-to-End Product Development',
      description: 'Complete product lifecycle management from concept to deployment and maintenance.',
      color: 'green'
    },
    {
      icon: 'bi-server',
      title: 'Technology Resource Provisioning',
      description: 'Cloud infrastructure and resource management for scalable, reliable systems.',
      color: 'blue'
    }
  ];

  ngOnInit() {
    setTimeout(() => {
      this.isVisible = true;
    }, 200);
  }
}
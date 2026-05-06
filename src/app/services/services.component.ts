import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  icon: string;
  title: string;
  description: string;
  outcome: string;
  featured: boolean;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="services-section">
      <div class="qf-container">
        <div class="services-header">
          <div class="section-eyebrow">CAPABILITIES</div>
          <h2 class="section-heading">What changes when<br>you work with us</h2>
          <p class="section-sub">Every capability built around one question: does this get you to production faster?</p>
        </div>

        <div class="bento-grid">
          <div *ngFor="let service of services"
               class="bento-card"
               [class.featured]="service.featured">
            <div class="bento-icon">
              <i [class]="service.icon"></i>
            </div>
            <div>
              <h4>{{ service.title }}</h4>
              <p>{{ service.description }}</p>
              <div class="bento-outcome">
                <i class="fa-solid fa-arrow-right"></i>
                {{ service.outcome }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="gradient-transition sage-to-ivory"></div>
  `
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'fa-solid fa-brain',
      title: 'AI Systems Development',
      description: 'Custom ML pipelines that learn from your data and compound value over time. We handle the infrastructure and model ops — you own the intelligence.',
      outcome: 'Production ML, not PowerPoint ML',
      featured: true
    },
    {
      icon: 'fa-solid fa-magnifying-glass-chart',
      title: 'RAG Applications',
      description: "Your organization's knowledge, instantly searchable. Verified answers sourced from your actual data.",
      outcome: 'Answers, not search rabbit holes',
      featured: false
    },
    {
      icon: 'fa-solid fa-code',
      title: 'Web & Mobile Apps',
      description: 'Responsive, fast applications your users actually enjoy. Built to scale from day one.',
      outcome: 'Ship features, not firefight bugs',
      featured: false
    },
    {
      icon: 'fa-solid fa-cubes',
      title: 'End-to-End Products',
      description: 'Concept to production, one team. We own the lifecycle so you focus on customers.',
      outcome: 'One team, zero handoff friction',
      featured: false
    },
    {
      icon: 'fa-solid fa-server',
      title: 'Cloud Infrastructure',
      description: 'Scalable architecture designed for growth from day one. No surprise cloud bills, no single points of failure, no late-night firefighting.',
      outcome: 'Infra that grows with you, not against you',
      featured: false
    }
  ];
}

import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { Project } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  roleService = inject(RoleService);
  isWebDev = computed(() => this.roleService.currentRole() === 'web-dev');

  webDevProjects: Project[] = [
    { title: 'E-commerce Platform', description: 'Building high-performance, interactive web-experiences with modern technologies.', tags: ['Angular', 'Tailwind', 'Node.js'], link1: { text: 'View Project', url: '#' } },
    { title: 'Portfolio Website', description: 'Compare the web-performance between different frameworks.', tags: ['Next.js', 'Framer Motion'], link1: { text: 'View Project', url: '#' } },
    { title: 'SaaS Dashboard', description: 'Develops high-performance, interactive user experiences with modern technologies.', tags: ['React', 'D3.js', 'Firebase'], link1: { text: 'View Project', url: '#' } },
  ];

  dataAnalystProjects: Project[] = [
    { title: 'AI-Powered Churn Prediction', description: 'Developed a machine learning model to predict customer churn with 92% accuracy.', tags: ['Python', 'Scikit-learn'], link1: { text: 'View Case Study', url: '#' } },
    { title: 'Market Trend Analysis Dashboard', description: 'Interactive Tableau dashboard analyzing global market trends and forecasting future performance.', tags: ['Tableau', 'SQL'], link1: { text: 'View Dashboard', url: '#' } },
    { title: 'Natural Language Processing Chatbot', description: 'Built an NLP-based customer support chatbot using Python and TensorFlow.', tags: ['Python', 'TensorFlow', 'NLP'], link1: { text: 'View Case Study', url: '#' } },
  ];

  projects = computed(() => this.isWebDev() ? this.webDevProjects : this.dataAnalystProjects);
}

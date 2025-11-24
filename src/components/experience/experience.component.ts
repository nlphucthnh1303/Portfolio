import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { Experience } from '../../models/portfolio.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  roleService = inject(RoleService);
  isWebDev = computed(() => this.roleService.currentRole() === 'web-dev');

  webDevExperience: Experience[] = [
    { period: '2022-Pres', role: 'Senior Frontend Developer', company: 'Innovate Solutions', points: ['Led development of a new design system using Angular and Storybook.', 'Improved web performance metrics by 30% through code splitting and lazy loading.', 'Mentored junior developers and conducted code reviews.'] },
    { period: '2020-2022', role: 'Web Developer', company: 'TechCrafters Inc.', points: ['Developed and maintained client websites using React and Vue.', 'Collaborated with UI/UX designers to implement pixel-perfect interfaces.'] }
  ];

  dataAnalystExperience: Experience[] = [
    { period: '2021-Pres', role: 'Senior Data Analyst', company: 'TechCorp', points: ['Lead a team of 5 data scientists, implemented predictive analytics solutions, and optimized data pipelines.', 'Designed and built machine learning models for forecasting sales.', 'Presented data-driven insights to executive leadership.'] },
    { period: '2019-2021', role: 'Data Scientist', company: 'Innovate Solutions', points: ['Developed machine learning algorithms for recommendation engines.', 'Conducted exploratory data analysis to identify key business trends.'] }
  ];

  experience = computed(() => this.isWebDev() ? this.webDevExperience : this.dataAnalystExperience);
}

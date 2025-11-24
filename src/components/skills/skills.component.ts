import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RoleService } from '../../services/role.service';
import { Skill } from '../../models/portfolio.model';
import { icons } from './skill-icons';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  roleService = inject(RoleService);
  sanitizer = inject(DomSanitizer);
  isWebDev = computed(() => this.roleService.currentRole() === 'web-dev');

  webDevSkills: Skill[] = [
    { name: 'Angular', icon: icons.angular },
    { name: 'React', icon: icons.react },
    { name: 'Node.js', icon: icons.nodejs },
    { name: 'Tailwind CSS', icon: icons.tailwind },
    { name: 'TypeScript', icon: icons.typescript },
    { name: 'Firebase', icon: icons.firebase },
  ];

  dataAnalystSkills: Skill[] = [
    { name: 'Python', icon: icons.python },
    { name: 'SQL', icon: icons.database },
    { name: 'TensorFlow', icon: icons.tensorflow },
    { name: 'Machine Learning', icon: icons.brain },
    { name: 'Data Visualization', icon: icons.chart },
    { name: 'Big Data', icon: icons.cloud },
  ];
  
  skills = computed(() => this.isWebDev() ? this.webDevSkills : this.dataAnalystSkills);

  sanitizeIcon(svgPath: string): SafeHtml {
    const fullSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-[var(--primary-color)]">${svgPath}</svg>`;
    return this.sanitizer.bypassSecurityTrustHtml(fullSvg);
  }
}

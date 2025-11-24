import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RoleService } from './services/role.service';

import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FloatingSwitchComponent } from './components/floating-switch/floating-switch.component';
import { MatrixRainComponent } from './components/matrix-rain/matrix-rain.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ProjectsComponent,
    ExperienceComponent,
    SkillsComponent,
    FloatingSwitchComponent,
    MatrixRainComponent
  ],
  host: {
    '[class.web-dev-theme]': 'isWebDev()',
    '[class.data-analyst-theme]': '!isWebDev()',
    '[class]': 'themeClass()'
  }
})
export class AppComponent {
  roleService = inject(RoleService);
  
  isWebDev = computed(() => this.roleService.currentRole() === 'web-dev');

  themeClass = computed(() => {
    return this.isWebDev() ? 'web-dev-theme' : 'data-analyst-theme';
  });
}

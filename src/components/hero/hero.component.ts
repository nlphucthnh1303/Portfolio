import { ChangeDetectionStrategy, Component, computed, inject, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroComponent {
  roleService = inject(RoleService);
  isWebDev = computed(() => this.roleService.currentRole() === 'web-dev');
}
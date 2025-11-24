import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-floating-switch',
  standalone: true,
  templateUrl: './floating-switch.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingSwitchComponent {
  roleService = inject(RoleService);
  isWebDev = computed(() => this.roleService.currentRole() === 'web-dev');

  toggle() {
    this.roleService.toggleRole();
  }
}

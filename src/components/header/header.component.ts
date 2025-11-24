import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  roleService = inject(RoleService);
  isWebDev = computed(() => this.roleService.currentRole() === 'web-dev');

  navLinks = ['Projects', 'Experience', 'Skills'];
}

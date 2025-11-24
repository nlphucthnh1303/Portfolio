import { Injectable, signal } from '@angular/core';
import { Role } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  currentRole = signal<Role>('data-analyst');

  toggleRole() {
    this.currentRole.update(role => (role === 'web-dev' ? 'data-analyst' : 'web-dev'));
  }
}

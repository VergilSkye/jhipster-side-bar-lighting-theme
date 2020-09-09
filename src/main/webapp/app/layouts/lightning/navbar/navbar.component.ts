import { LightingService } from 'app/layouts/lightning';
import { Component } from '@angular/core';

@Component({
  selector: 'jhi-lighting-navbar',
  templateUrl: './navbar.component.html',
})
export class LightingNavbarComponent {
  isCollapsed = true;
  constructor(private appService: LightingService) {}

  toggleSidebarPin(): void {
    this.appService.toggleSidebarPin();
  }
  toggleSidebar(): void {
    this.appService.toggleSidebar();
  }
}

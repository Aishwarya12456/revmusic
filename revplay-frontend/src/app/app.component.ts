import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { TokenService } from './service/token';
import { PlayerBarComponent } from './player-bar/player-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SidebarComponent,PlayerBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private tokenService: TokenService,
               private router :Router
  ) {}

  get isLoggedIn(): boolean {
    return this.tokenService.isLoggedIn();
  }
  showSidebar(): boolean {
    return !['/login', '/register'].includes(this.router.url);
  }
}
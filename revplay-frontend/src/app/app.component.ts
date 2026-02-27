import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { PlayerBarComponent } from './player-bar/player-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, PlayerBarComponent],
  template: `
    <div class="app-container">
      <app-sidebar></app-sidebar>

      <div class="main-content">
        <router-outlet></router-outlet>
      </div>
    </div>

    <app-player-bar></app-player-bar>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
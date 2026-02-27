import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Welcome to RevPlay Dashboard 🎵</h2>
    <button (click)="logout()">Logout</button>
  `
})
export class DashboardComponent {

  logout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
}

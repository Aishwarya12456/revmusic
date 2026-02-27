
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { TokenService } from '../../service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  userName = 'Music Lover';
  userEmail = 'user@email.com';

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {}

  logout() {
    this.tokenService.clear();
    this.router.navigate(['/login']);
  }

}
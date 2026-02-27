import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name: string = '';
  email: string = '';
  password: string = '';

  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:8081/api/auth/register', userData)
      .subscribe({
        next: () => {
          alert('Registration Successful!');
          this.router.navigate(['/login']);
        },
        error: () => {
          this.errorMessage = 'Registration failed. Try again.';
        }
      });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {

    const loginData = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>('http://localhost:8081/api/auth/login', loginData)
      .subscribe({
        next: (response) => {
          console.log("Login Success", response);

          // Save JWT token
          localStorage.setItem('token', response.token);

          // Redirect to dashboard
          this.router.navigate(['/dashboard']);
        },
        error: (error) => {
          console.log("Login Failed", error);
          this.errorMessage = "Invalid Email or Password";
        }
      });
  }
}

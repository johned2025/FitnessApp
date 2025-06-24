import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = ''; 
  password = ''; 
  errorMessage = '';
  constructor (private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        if (response.success) {
          this.authService.setUser(response.user);
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = response.message || 'Invalid credentials';
        }
      },
      error: (error) => {
        console.error('Login failed:', error);
         this.errorMessage = 'Login failed. Please try again.';
      }
    });
  }
}

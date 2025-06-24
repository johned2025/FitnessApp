import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/API';  
  public isLoggedIn = false;
  public currentUser: any = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login.php`, { email, password },{ withCredentials: true });
  }

  setUser(user: any) {
    this.currentUser = user;
    this.isLoggedIn = true;
    localStorage.setItem('user', JSON.stringify(user)); 
  }

  logout() {
    this.currentUser = null;
    this.isLoggedIn = false;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  loadUserFromStorage() {
    const data = localStorage.getItem('user');
    if (data) {
      this.currentUser = JSON.parse(data);
      this.isLoggedIn = true;
    }
  }
}


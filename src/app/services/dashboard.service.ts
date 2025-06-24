import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://localhost/API/get_dashboard.php';
  constructor(private http:HttpClient) { }
  getDashboardData() {
     return this.http.get<any>(this.apiUrl, { withCredentials: true });
  }
}

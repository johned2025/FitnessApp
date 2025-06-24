import { Component, importProvidersFrom } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dashboardData: any;
  userName: string = ''; 
  constructor(private service:DashboardService) { }
  ngOnInit() {
    //get user stored data
    const userString = localStorage.getItem('user'); 
    if (userString) {
      const user = JSON.parse(userString);
      this.userName = user.name;
    }
    this.service.getDashboardData().subscribe({
    next: (data) => {
      this.dashboardData = data;
    },
    error: (error) => {
      console.error('Error fetching dashboard data', error);
    },
    });
  
  }
}

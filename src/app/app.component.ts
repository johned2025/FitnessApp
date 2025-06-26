import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { NgIf } from '@angular/common'; 
@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, NavbarComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fitnessApp';
  constructor(private router: Router) {}
   hideNavbar(): boolean {
    
    return this.router.url === '/login' || this.router.url === '/signup';
  }
}

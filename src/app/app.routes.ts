import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { MealsComponent } from './pages/meals/meals.component';
import { ProfileComponent } from './pages/profile/profile.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'meals', component: MealsComponent },
      { path: 'activities', component: ActivitiesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: '', redirectTo: '/login', pathMatch: 'full' },
];

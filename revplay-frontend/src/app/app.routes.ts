import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MusicComponent } from './features/music/music.component';
import { PlayerComponent } from './features/player/player.component';
import { ProfileComponent } from './features/profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'dashboard', component: DashboardComponent },
  { path: 'music', component: MusicComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'profile', component: ProfileComponent },

  { path: '**', redirectTo: 'login' }

];
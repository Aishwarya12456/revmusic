import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MusicComponent } from './features/music/music.component';
import { PlayerComponent } from './features/player/player.component';
import { ProfileComponent } from './features/profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HistoryComponent } from './features/history/history.component';
import { authGuard } from './auth.guard';
import { PlaylistComponent } from './features/playlist/playlist.component';
export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'music', component: MusicComponent, canActivate: [authGuard] },
  { path: 'player', component: PlayerComponent },
  { path: 'profile', component: ProfileComponent , canActivate: [authGuard]},
  { path: 'history', component: HistoryComponent },
  { path: 'playlists', component: PlaylistComponent, canActivate: [authGuard] },


  { path: '**', redirectTo: 'login' }

];
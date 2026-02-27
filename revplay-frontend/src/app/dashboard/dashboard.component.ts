import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { PlayerService } from '../service/player.service';
import { SongService, SongResponse } from '../service/song';
import { UserService } from '../service/user';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {

  username = 'Music Lover';

  stats = [
    { title: 'Songs', value: 0 },
    { title: 'Playlists', value: 0 },
    { title: 'Favorites', value: 0 },
    { title: 'Users', value: 0 }
  ];

  recentSongs: SongResponse[] = [];

  constructor(
    private playerService: PlayerService,
    private songService: SongService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData() {

    // Total Songs
    this.songService.getAllSongs().subscribe({
      next: (songs: SongResponse[]) => {
        this.stats[0].value = songs.length;
        this.recentSongs = songs.slice(-4).reverse();
      }
    });

    // Total Users
    this.userService.getAllUsers().subscribe({
      next: (users) => {
        this.stats[3].value = users.length;
      }
    });
  }

  play(song: SongResponse) {
    this.playerService.setPlaylist(this.recentSongs);
    this.playerService.playSong(song);
  }
}
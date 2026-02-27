import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { SongResponse } from '../../service/song';
import { SongService } from '../../service/song';
import { FavoriteService, FavoriteResponse } from '../../service/favorite';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  songs: SongResponse[] = [];
  favorites: number[] = [];
  userId: number = Number(localStorage.getItem('userId'));

  constructor(
    private songService: SongService,
    private favoriteService: FavoriteService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.loadSongs();
    this.loadFavorites();
  }

  // 🔹 Load all songs from backend
  loadSongs(): void {
    this.songService.getAllSongs().subscribe({
      next: (data: SongResponse[]) => {
        this.songs = data;
      },
      error: (err) => {
        console.error('Error loading songs', err);
      }
    });
  }

  // 🔹 Load favorite songs of user
  loadFavorites(): void {
    if (!this.userId) return;

    this.favoriteService.getFavorites(this.userId).subscribe({
      next: (data: FavoriteResponse[]) => {
        this.favorites = data.map(f => f.songId);
      },
      error: (err) => {
        console.error('Error loading favorites', err);
      }
    });
  }

  // 🔹 Check if song is favorite
  isFavorite(songId: number): boolean {
    return this.favorites.includes(songId);
  }

  // 🔹 Toggle favorite
  toggleFavorite(songId: number): void {

    if (this.isFavorite(songId)) {
      // Remove favorite
      this.favoriteService.removeFavorite(this.userId, songId)
        .subscribe(() => {
          this.favorites = this.favorites.filter(id => id !== songId);
        });

    } else {
      // Add favorite
      this.favoriteService.addFavorite(this.userId, songId)
        .subscribe(() => {
          this.favorites.push(songId);
        });
    }
  }

  // 🔹 Play song
  play(song: SongResponse): void {
    this.playerService.setPlaylist(this.songs);
    this.playerService.playSong(song);
  }

}
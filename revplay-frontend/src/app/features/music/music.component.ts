import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongService, Song } from '../../service/song';
import { PlaylistService, Playlist } from '../../service/playlist';
@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  songs: Song[] = [];
  loading = true;
  playlists: Playlist[] = [];
  selectedSongId!: number;
  showModal = false;
  userId!: number;

  constructor(private songService: SongService,
              private playlistService: PlaylistService
  ) {} 

  ngOnInit(): void {
      this.userId = Number(localStorage.getItem('userId'));
    this.loadSongs();
  }

  loadSongs() {
    this.songService.getAllSongs().subscribe({
      next: (data) => {
        this.songs = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  deleteSong(id: number) {
    this.songService.deleteSong(id).subscribe(() => {
      this.loadSongs();
    });
  }
  openModal(songId: number) {
    this.selectedSongId = songId;
    this.showModal = true;

    this.playlistService
      .getUserPlaylists(this.userId)
      .subscribe(data => this.playlists = data);
  }

  closeModal() {
    this.showModal = false;
  }

  addToPlaylist(playlistId: number) {
    this.playlistService
      .addSong(playlistId, this.selectedSongId)
      .subscribe(() => {
        alert("Song added successfully!");
        this.closeModal();
      });
  }
}
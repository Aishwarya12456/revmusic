import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongService, Song } from '../../service/song';
import { PlaylistService, Playlist } from '../../service/playlist';
import { PlayerService } from '../../service/player.service';
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
  playlists: any[] = [];
  selectedSong: any = null;
  showModal = false;
  userId!: number;

  constructor(private songService: SongService,
              private playlistService: PlaylistService,
               private playerService: PlayerService
  ) {} 

  ngOnInit(): void {
      this.userId = Number(localStorage.getItem('userId'));
    this.loadSongs();
    this.loadPlaylists();
    this.songService.getAllSongs().subscribe(data => {
    console.log("SONGS:", data);
    this.songs = data;
  });
  }
  
loadPlaylists() {
  this.playlistService.getUserPlaylists(this.userId)
    .subscribe(data => this.playlists = data);
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
  openPlaylistModal(song: any) {
    this.selectedSong = song;
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
      .addSongToPlaylist(playlistId, this.selectedSong.id)
      .subscribe(() => {
        alert("Song added!");
        this.closeModal();
      });
}
playSong(song: any) {
  this.playerService.play(song);
}
}
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistService, Playlist } from '../../service/playlist';

@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlists: Playlist[] = [];
  userId!: number;

  constructor(private playlistService: PlaylistService) {}

  ngOnInit(): void {
    this.userId = Number(localStorage.getItem('userId'));
    this.loadPlaylists();
  }

  loadPlaylists() {
    this.playlistService.getUserPlaylists(this.userId)
      .subscribe(data => this.playlists = data);
  }

  deletePlaylist(id: number) {
    this.playlistService.deletePlaylist(id)
      .subscribe(() => this.loadPlaylists());
  }
}
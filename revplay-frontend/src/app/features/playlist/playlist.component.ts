import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../../service/playlist';
import { Playlist } from '../../models/playlist';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../../service/player.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-playlist',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  playlists: Playlist[] = [];
  selectedPlaylist!: Playlist;
  newPlaylistName = '';

  constructor(
    private playlistService: PlaylistService,
    private route: ActivatedRoute,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.loadPlaylists();
  }

  loadPlaylists() {
this.playlistService.getUserPlaylists().subscribe((data: any[]) => {
      this.playlists = data;
    });
  }

  createPlaylist() {
    if (!this.newPlaylistName.trim()) return;

    this.playlistService.createPlaylist(this.newPlaylistName)
      .subscribe(() => {
        this.newPlaylistName = '';
        this.loadPlaylists();
      });
  }

  selectPlaylist(id: number) {
   this.playlistService.getUserPlaylists().subscribe((data: any[]) => {
  this.playlists = data;
});
  }

  removeSong(songId: number) {
    this.playlistService.removeSong(this.selectedPlaylist.id, songId)
      .subscribe(() => {
        this.selectPlaylist(this.selectedPlaylist.id);
      });
  }

  deletePlaylist(id: number) {
    this.playlistService.deletePlaylist(id)
      .subscribe(() => {
        this.selectedPlaylist = undefined as any;
        this.loadPlaylists();
      });
  }

  playSong(song: any) {
    this.playerService.playSong(song);
  }
}
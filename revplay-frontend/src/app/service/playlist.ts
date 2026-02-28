import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Playlist {
  id: number;
  name: string;
  songs: any[];
}

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private API = 'http://localhost:8081/api/playlists';

  constructor(private http: HttpClient) {}

  getUserPlaylists(userId: number): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(`${this.API}/${userId}`);
  }

  createPlaylist(userId: number, playlist: any) {
    return this.http.post(`${this.API}/${userId}`, playlist);
  }

  deletePlaylist(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }

  addSong(playlistId: number, songId: number) {
    return this.http.post(`${this.API}/${playlistId}/song/${songId}`, {});
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Playlist } from '../models/playlist';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  private apiUrl = `${environment.apiUrl}/playlists`;

  constructor(private http: HttpClient) {}

  getUserPlaylists(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(`${this.apiUrl}/user`);
  }

  createPlaylist(name: string): Observable<any> {
    return this.http.post(`${this.apiUrl}`, { name });
  }

  getPlaylistById(id: number): Observable<Playlist> {
    return this.http.get<Playlist>(`${this.apiUrl}/${id}`);
  }

  addSongToPlaylist(playlistId: number, songId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${playlistId}/add/${songId}`, {});
  }

  removeSong(playlistId: number, songId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${playlistId}/remove/${songId}`);
  }

  deletePlaylist(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
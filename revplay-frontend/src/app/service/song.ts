import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface SongResponse {
  id: number;
  title: string;
  genre: string;
  url: string;
  artistName: string;
  albumTitle: string;
}
@Injectable({
  providedIn: 'root'
})
export class SongService {

  private API = 'http://localhost:8081/api/songs';

  constructor(private http: HttpClient) {}

  getAllSongs(): Observable<SongResponse[]> {
  return this.http.get<SongResponse[]>('http://localhost:8081/api/songs');
}

  getSongById(id: number): Observable<SongResponse> {
    return this.http.get<SongResponse>(`${this.API}/${id}`);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
   url: string;
}

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private API = 'http://localhost:8081/api/songs';

  constructor(private http: HttpClient) {}

  getAllSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.API);
  }

  deleteSong(id: number) {
    return this.http.delete(`${this.API}/${id}`);
  }
}
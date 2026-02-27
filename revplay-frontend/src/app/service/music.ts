import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Music {
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
export class MusicService {

  private API = 'http://localhost:8081/api/songs';

  constructor(private http: HttpClient) {}   // ✅ THIS LINE IS REQUIRED

  getAll(): Observable<Music[]> {
    return this.http.get<Music[]>(this.API);
  }
}
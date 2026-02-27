import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface FavoriteResponse {
  id: number;
  songId: number;
  title: string;
  artistName: string;
  albumTitle: string;
}

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private baseUrl = 'http://localhost:8081/api/favorites';

  constructor(private http: HttpClient) {}

  addFavorite(userId: number, songId: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${userId}/song/${songId}`, {});
  }

  getFavorites(userId: number): Observable<FavoriteResponse[]> {
    return this.http.get<FavoriteResponse[]>(`${this.baseUrl}/${userId}`);
  }

  removeFavorite(userId: number, songId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${userId}/song/${songId}`);
  }
}
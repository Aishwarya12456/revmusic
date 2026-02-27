import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListeningHistory } from '../models/history';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private apiUrl = `${environment.apiUrl}/history`;

  constructor(private http: HttpClient) {}

  getUserHistory(): Observable<ListeningHistory[]> {
    return this.http.get<ListeningHistory[]>(`${this.apiUrl}/user`);
  }
}
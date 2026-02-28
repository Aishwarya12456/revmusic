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

  getUserHistory(userId: number) {
  return this.http.get<any[]>(`${this.apiUrl}/${userId}`);
}
}
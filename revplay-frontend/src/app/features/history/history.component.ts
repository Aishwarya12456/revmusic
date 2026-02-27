import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../service/history.component';
import { ListeningHistory } from '../../models/history';
import { PlayerService } from '../../service/player.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: ListeningHistory[] = [];
  loading = true;

  constructor(
    private historyService: HistoryService,
    private playerService: PlayerService
  ) {}

  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory() {
    this.historyService.getUserHistory().subscribe({
      next: (data) => {
        this.history = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  playSong(song: any) {
    this.playerService.playSong(song);
  }
}
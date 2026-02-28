import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../service/history';
import { ListeningHistory } from '../../models/history';
import { PlayerService } from '../../service/player.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history: ListeningHistory[] = [];
  loading = true;
  userId!: number;


  constructor(
    private historyService: HistoryService,
    private playerService: PlayerService
  ) {}

 ngOnInit() {
  this.userId = Number(localStorage.getItem('userId'));
  this.loadHistory();
}

  loadHistory() {
    this.historyService.getUserHistory(this.userId).subscribe({
      next: (data) => {
        this.history = data;
        this.loading = false;
      },
     error: (err: any) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  playSong(song: any) {
    this.playerService.play(song);
  }
}
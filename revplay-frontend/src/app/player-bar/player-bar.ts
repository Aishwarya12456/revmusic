import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerService } from '../service/player.service';
import { SongService, Song } from '../service/song';

@Component({
  selector: 'app-player-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-bar.html',
  styleUrls: ['./player-bar.css']
})
export class PlayerBarComponent implements OnInit {

  currentSong: Song | null = null;
  progress = 0;
  duration = 0;

  constructor(public playerService: PlayerService) {}

  ngOnInit(): void {
    this.playerService.currentSong$.subscribe(song => {
      this.currentSong = song;
    });

    setInterval(() => {
      this.progress = this.playerService.getCurrentTime();
      this.duration = this.playerService.getDuration();
    }, 500);
    
  }

  seek(event: Event) {
    const input = event.target as HTMLInputElement;
    this.playerService.seek(Number(input.value));
  }

  changeVolume(event: Event) {
    const input = event.target as HTMLInputElement;
    this.playerService.setVolume(Number(input.value));
  }

}
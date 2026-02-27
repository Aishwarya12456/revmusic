import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SongResponse } from './song';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private audio = new Audio();

  private playlist: SongResponse[] = [];
  private currentSongSubject = new BehaviorSubject<SongResponse | null>(null);
  currentSong$ = this.currentSongSubject.asObservable();

  currentIndex = 0;
  isPlaying = false;

  constructor() {
    // Auto play next when song ends
    this.audio.addEventListener('ended', () => {
      this.next();
    });
  }

  setPlaylist(songs: SongResponse[]) {
    this.playlist = songs;
    this.currentIndex = 0;
  }

  playSong(song: SongResponse) {
    this.currentIndex = this.playlist.findIndex(s => s.id === song.id);

    this.audio.src = song.url;
    this.audio.load();
    this.audio.play();

    this.currentSongSubject.next(song);
    this.isPlaying = true;
  }

  toggle() {
    if (this.audio.paused) {
      this.audio.play();
      this.isPlaying = true;
    } else {
      this.audio.pause();
      this.isPlaying = false;
    }
  }

  previous() {
    if (!this.playlist.length) return;

    this.currentIndex =
      this.currentIndex > 0
        ? this.currentIndex - 1
        : this.playlist.length - 1;

    this.playSong(this.playlist[this.currentIndex]);
  }

  next() {
    if (!this.playlist.length) return;

    this.currentIndex =
      this.currentIndex < this.playlist.length - 1
        ? this.currentIndex + 1
        : 0;

    this.playSong(this.playlist[this.currentIndex]);
  }

  seek(time: number) {
    this.audio.currentTime = time;
  }

  setVolume(volume: number) {
    this.audio.volume = volume;
  }

  getCurrentTime(): number {
    return this.audio.currentTime || 0;
  }

  getDuration(): number {
    return this.audio.duration || 0;
  }
}
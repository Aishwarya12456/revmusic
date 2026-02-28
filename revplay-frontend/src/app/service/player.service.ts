import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SongService, Song } from '../service/song';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private audio = new Audio();
  private currentSongSubject = new BehaviorSubject<any>(null);

  private playlist: Song[] = [];
  currentSong$ = this.currentSongSubject.asObservable();

  currentIndex = 0;
  isPlaying = false;

  constructor() {
    // Auto play next when song ends
    this.audio.addEventListener('ended', () => {
      this.next();
    });
  }

  setPlaylist(songs: Song[]) {
    this.playlist = songs;
    this.currentIndex = 0;
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

    this.play(this.playlist[this.currentIndex]);
  }

  next() {
    if (!this.playlist.length) return;

    this.currentIndex =
      this.currentIndex < this.playlist.length - 1
        ? this.currentIndex + 1
        : 0;

    this.play(this.playlist[this.currentIndex]);
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
  pause() {
    this.audio.pause();
  }
 play(song: any) {
  if (!song?.url) return;

  // If same song, just resume
  if (this.audio.src === song.url) {
    this.resume();
    return;
  }

  this.audio.pause();
  this.audio.currentTime = 0;

  this.audio.src = song.url;

  this.audio.play()
    .then(() => {
      this.currentSongSubject.next(song);
      this.currentSongSubject.next(true);
    })
    .catch(err => {
      console.error("Audio play error:", err);
    });
}
  resume() {
    this.audio.play()
      .then(() => {
        this.currentSongSubject.next(true);
      })
      .catch(err => console.error("Resume error:", err));
  }

  // ⏹ STOP (optional)
  stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.currentSongSubject.next(false);
  }
}
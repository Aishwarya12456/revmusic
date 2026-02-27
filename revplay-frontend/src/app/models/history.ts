export interface ListeningHistory {
  id: number;
  playedAt: string;
  song: {
    id: number;
    title: string;
    artist: string;
    album: string;
    coverUrl: string;
    audioUrl: string;
  };
}

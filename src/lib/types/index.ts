export type Song =
  | {
      isPlaying: true;
      name: string;
      artist: string;
      album: string;
      albumImage: string;
      songUrl: string;
    }
  | {
      isPlaying: false;
    };

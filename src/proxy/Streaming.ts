interface Video {
  play(): void;
}

class RealVideo implements Video {
  constructor(private filename: string) {
    this.loadFromDisk();
  }

  private loadFromDisk(): void {
    console.log(`Carregando vídeo: ${this.filename}`);
  }

  play(): void {
    console.log(`Reproduzindo vídeo: ${this.filename}`);
  }
}

class VideoProxy implements Video {
  private realVideo: RealVideo | null = null;
  constructor(private filename: string) { }

  play(): void {
    if (!this.realVideo) {
      this.realVideo = new RealVideo(this.filename);
    }
    this.realVideo.play();
  }
}

class VideoPlayer {
  playVideo(video: Video): void {
    video.play();
  }
}

// Uso
const proxyVideo = new VideoProxy('video1.mp4');
const player = new VideoPlayer();

player.playVideo(proxyVideo);
player.playVideo(proxyVideo);
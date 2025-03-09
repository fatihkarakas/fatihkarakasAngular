import { Component } from '@angular/core';
import { YoutubeVideoService } from '../../services/youtube-video.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-youtube',
  imports: [CommonModule],
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.css'
})
export class YoutubeComponent {
  videos: any[] = [];
  nextPageToken: string | null = null;
  prevPageToken: string | null = null;

  constructor(private videoService: YoutubeVideoService) {}

  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos(pageToken: string = ''): void {
    this.videoService.getVideos(pageToken).subscribe(data => {
      this.videos = data.videos;
      this.nextPageToken = data.nextPageToken;
      this.prevPageToken = data.prevPageToken;
    });
  }

  nextPage(): void {
    if (this.nextPageToken) {
      this.loadVideos(this.nextPageToken);
    }
  }

  prevPage(): void {
    if (this.prevPageToken) {
      this.loadVideos(this.prevPageToken);
    }
  }
}

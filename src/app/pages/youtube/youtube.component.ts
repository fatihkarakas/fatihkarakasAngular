import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { YoutubeVideoService } from '../../services/youtube-video.service';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  imports: [CommonModule],
  templateUrl: './youtube.component.html',
  styleUrl: './youtube.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class YoutubeComponent {
  videos: any[] = [];
  nextPageToken: string | null = null;
  prevPageToken: string | null = null;

  constructor(private videoService: YoutubeVideoService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos(pageToken: string = ''): void {
    this.videoService.getVideos(pageToken).subscribe(data => {
      this.videos = data.videos;
      console.log(this.videos);
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

  getSafeUrl(videoId: string) {
    if (!videoId) {
      console.error('Video ID Hatalı');
      return null;
    }

    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

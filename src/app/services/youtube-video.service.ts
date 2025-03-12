import { inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { yotubeEnvironment } from '../environments/youtube-enviroment';
import { HttpClient } from '@angular/common/http';
import { YouTubeSearchResponse } from '../models/youtube-models';

@Injectable({
  providedIn: 'root'
})
export class YoutubeVideoService {
  private apiUrl = 'https://www.googleapis.com/youtube/v3/search';
  private videoDetailsUrl = 'https://www.googleapis.com/youtube/v3/videos';
  readonly #http = inject(HttpClient);
  constructor() { }

  getVideos(pageToken: string = ''): Observable<any> {
    const params = {
      key: yotubeEnvironment.YOUTUBE_API_KEY,
      channelId: yotubeEnvironment.YOUTUBE_CHANNEL_ID,
      part: 'snippet',
      order: 'date',
      maxResults: '6',
      pageToken: pageToken
    };

    return this.#http.get<any>(this.apiUrl, { params }).pipe(
      map(response => ({
        videos: response.items.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.medium.url,
          publishedAt: item.snippet.publishedAt
        })),
        nextPageToken: response.nextPageToken || null,
        prevPageToken: response.prevPageToken || null
      }))
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { Observable, tap, map } from 'rxjs';
import { PostItems } from '../models/post-item-models';

@Injectable({
  providedIn: 'root'
})
export class PostIceriklerService {

  private localStorageKey = 'postsDataFatihKarakas';
  private apiUrl = environment.apiUrl + 'post/';
  private getAll = environment.apiUrl + 'post/getall';
  private geyByID = environment.apiUrl + 'post/getbyid/';

  constructor(private http: HttpClient) {}
  postItems = signal<PostItems[]>([]);

  async postIcerikleriniGetir(): Promise<void> {
    const currentTime = new Date().getTime();
    const storedData = localStorage.getItem(this.localStorageKey);
    
    if (storedData) {
      const { posts, timestamp } = JSON.parse(storedData);
      const elapsedTime = currentTime - timestamp;

      if (elapsedTime < 3600000) {
        this.postItems.set(posts); 
        return;
      }
      else {
        localStorage.clear();
      }
    }
    this.http.get<{ posts: PostItems[] }>(this.getAll).pipe(
      tap(data => {
        localStorage.setItem(this.localStorageKey, JSON.stringify({
          posts: data.posts,
          timestamp: currentTime 
        }));
      })
    ).subscribe((data) => {
     this.postItems.set(data.posts); 
    });
  }

  postKategorileriniGetir(kategoriId: number): Observable<PostItems[]> {
    return this.http.get<{ posts: PostItems[] }>(this.getAll).pipe(
      map(response => response.posts.filter(post => post.categoryId == kategoriId))
    );
  }

  postGetirByMakaleId(makaleId: number): Observable<PostItems[]> {
    return this.http.get<{ posts: PostItems[] }>(this.getAll).pipe(
      map(response => response.posts.filter(post => post.id == makaleId))
    );
  }

  postDetayiniGetir(postId: number): Observable<PostItems> {
    this.geyByID = this.geyByID + postId;
    return this.http.get<PostItems>(this.geyByID);
  }
}

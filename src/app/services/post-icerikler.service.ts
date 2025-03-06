import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { map, Observable } from 'rxjs';
import { PostItems } from '../models/post-item-models';

@Injectable({
  providedIn: 'root'
})
export class PostIceriklerService {

  constructor(private http: HttpClient) { } 

  apiUrl = environment.apiUrl + 'post/getall';


postIcerikleriniGetir(): Observable<PostItems[]> {
  return this.http.get<{ posts: PostItems[] }>(this.apiUrl).pipe(
    map(response => response.posts) 
  );
}

}

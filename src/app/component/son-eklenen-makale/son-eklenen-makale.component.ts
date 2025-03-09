import { Component, computed, OnInit } from '@angular/core';
import { PostIceriklerService } from '../../services/post-icerikler.service';
import { PostItems } from '../../models/post-item-models';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-son-eklenen-makale',
  imports: [RouterLink, CommonModule],
  templateUrl: './son-eklenen-makale.component.html',
  styleUrl: './son-eklenen-makale.component.css'
})
export class SonEklenenMakaleComponent implements OnInit {
 
  apiUrl = environment.apiUrl + 'post/getall';
  sonYazilanMakele!: PostItems;
  constructor(private postService : PostIceriklerService) {}

  ngOnInit(): void {
    fetch(this.apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Veri çekme başarısız oldu.');
        }
        return response.json();
      })
      .then(data => {
        if (data.posts && data.posts.length > 0) {
          this.sonYazilanMakele = data.posts.reduce((prev: PostItems, current: PostItems) => 
            prev.id > current.id ? prev : current
          );
        }
      })
      .catch(error => console.error('Hata:', error));
  }
  
  
}

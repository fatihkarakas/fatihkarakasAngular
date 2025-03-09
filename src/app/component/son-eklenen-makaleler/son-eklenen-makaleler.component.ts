import { Component, computed, OnInit } from '@angular/core';
import { PostItems } from '../../models/post-item-models';
import { PostIceriklerService } from '../../services/post-icerikler.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-son-eklenen-makaleler',
  imports: [CommonModule, RouterLink],
  templateUrl: './son-eklenen-makaleler.component.html',
  styleUrl: './son-eklenen-makaleler.component.css'
})
export class SonEklenenMakalelerComponent implements OnInit {
    apiurl = environment.apiUrl + 'post/getall';
    sonYazilanMakeleler!: PostItems[];
    populerMakeleler!: PostItems[];
    constructor() {}

    ngOnInit(): void {
       fetch(this.apiurl).then(response => {
          if(!response.ok){
              throw new Error('Veri çekme başarısız oldu.');
          }
          return response.json();
        }).then(data => {
          this.sonYazilanMakeleler = data.posts.sort((a: PostItems, b: PostItems) => b.id - a.id).slice(0, 3);
          this.populerMakeleler = data.posts.sort((a: PostItems, b: PostItems) => b.viewCount - a.viewCount).slice(0, 3);
        }
        ).catch(error => console.error('Hata:', error));
    }
}

import { Component, computed, inject, linkedSignal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { PostItems } from '../../models/post-item-models';
import { PostIceriklerService } from '../../services/post-icerikler.service';

@Component({
  selector: 'app-post-listesi-ana-sayfa',
  imports: [CommonModule, RouterLink],
  templateUrl: './post-listesi-ana-sayfa.component.html',
  styleUrl: './post-listesi-ana-sayfa.component.css'
})
export class PostListesiAnaSayfaComponent implements OnInit {

#servis = inject(PostIceriklerService);  
apiUrl = environment.apiUrl + 'post/getall';
makaleler : PostItems[] = [];

makaleListesi = linkedSignal(() => this.#servis.postItems());


  constructor() {}

  async ngOnInit() {
   this.makaleListesiGetir();
  }

   makaleListesiGetir() {
      const makaleler = this.#servis.postItems();
    if(makaleler && makaleler.length > 0) {
      this.makaleler = makaleler;
    }
    else {
      fetch(this.apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Veri çekme başarısız oldu.');
          }
          return response.json();
        })
        .then(data => {
          this.makaleler = data.posts;
        })
        .catch(error => console.error('Hata:', error));
    }
    }
}

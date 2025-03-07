import { Component, computed, OnInit } from '@angular/core';
import { PostItems } from '../../models/post-item-models';
import { PostIceriklerService } from '../../services/post-icerikler.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-son-eklenen-makaleler',
  imports: [CommonModule],
  templateUrl: './son-eklenen-makaleler.component.html',
  styleUrl: './son-eklenen-makaleler.component.css'
})
export class SonEklenenMakalelerComponent implements OnInit {
   postItems = computed(() => this.postService.postItems());
    sonYazilanMakeleler!: PostItems[];
    populerMakeleler!: PostItems[];
    constructor(private postService : PostIceriklerService) {}

    ngOnInit(): void {
        const posts = this.postItems();
        if(posts.length > 0){
          this.sonYazilanMakeleler = posts.sort((a, b) => b.id - a.id).slice(0, 3);
          this.populerMakeleler = posts.sort((a, b) => b.viewCount - a.viewCount).slice(0, 3);
    }
  }

}

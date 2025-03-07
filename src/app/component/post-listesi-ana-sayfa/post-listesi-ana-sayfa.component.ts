import { Component, computed, effect, OnInit } from '@angular/core';
import { PostIceriklerService } from '../../services/post-icerikler.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-listesi-ana-sayfa',
  imports: [CommonModule],
  templateUrl: './post-listesi-ana-sayfa.component.html',
  styleUrl: './post-listesi-ana-sayfa.component.css'
})
export class PostListesiAnaSayfaComponent {
  postItems = computed(() => this.postService.postItems());

  constructor(private postService: PostIceriklerService) {}
 
}

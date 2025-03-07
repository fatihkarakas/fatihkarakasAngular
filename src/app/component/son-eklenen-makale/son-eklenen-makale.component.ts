import { Component, computed, OnInit } from '@angular/core';
import { PostIceriklerService } from '../../services/post-icerikler.service';
import { PostItems } from '../../models/post-item-models';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-son-eklenen-makale',
  imports: [RouterLink],
  templateUrl: './son-eklenen-makale.component.html',
  styleUrl: './son-eklenen-makale.component.css'
})
export class SonEklenenMakaleComponent implements OnInit {
  postItems = computed(() => this.postService.postItems());
  sonYazilanMakele!: PostItems;
  constructor(private postService : PostIceriklerService) {}

  ngOnInit(): void {
    const posts = this.postItems();
    if(posts.length > 0){
      this.sonYazilanMakele = posts
      .sort((a, b) => b.id - a.id) // ID'ye göre büyükten küçüğe sıralama
      [0]; 
    }
  }
}

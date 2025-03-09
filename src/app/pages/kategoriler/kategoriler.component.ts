import { Component, computed, OnInit } from '@angular/core';
import { PostIceriklerService } from '../../services/post-icerikler.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostItems } from '../../models/post-item-models';

@Component({
  selector: 'app-kategoriler',
  imports: [CommonModule, RouterLink],
  templateUrl: './kategoriler.component.html',
  styleUrl: './kategoriler.component.css'
})
export class KategorilerComponent implements OnInit {
  kategoriId : number =1;
  postItems: PostItems[] = [];

  constructor(private postService: PostIceriklerService,
    private route: ActivatedRoute
  ) {}
ngOnInit() {
  this.route.params.subscribe(params => {
    this.kategoriId = params['id'];
    this.loadPosts();
  });
}

loadPosts(): void {
 this.postService.postKategorileriniGetir(this.kategoriId).subscribe(data => {
    this.postItems = data;
  });
}

}

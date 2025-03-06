import { Component, OnInit } from '@angular/core';
import { PostIceriklerService } from '../../services/post-icerikler.service';
import { PostItems } from '../../models/post-item-models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-listesi-ana-sayfa',
  imports: [CommonModule],
  templateUrl: './post-listesi-ana-sayfa.component.html',
  styleUrl: './post-listesi-ana-sayfa.component.css'
})
export class PostListesiAnaSayfaComponent implements OnInit {

  postItems: PostItems[] = [];
  constructor(private posticerikler: PostIceriklerService) { }

  ngOnInit() {
    this.posticerikler.postIcerikleriniGetir().subscribe((data) => {
      if (data) this.postItems = data;
    });
  }
}

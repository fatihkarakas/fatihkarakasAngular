import { ChangeDetectionStrategy, Component, computed, OnInit, ViewEncapsulation } from '@angular/core';
import { PostIceriklerService } from '../../services/post-icerikler.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostItems } from '../../models/post-item-models';

@Component({
  selector: 'app-kategoriler',
  imports: [CommonModule, RouterLink],
  templateUrl: './kategoriler.component.html',
  styleUrl: './kategoriler.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class KategorilerComponent implements OnInit {
  kategoriId: number = 1;
  postItems: PostItems[] = [];
  tumMakaleler = computed(() => this.postService.postItems());

  constructor(private postService: PostIceriklerService,
    private route: ActivatedRoute
  ) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.kategoriId = params['id'];
      this.loadPosts(Number(this.kategoriId));
    });
  }

  loadPosts(kategoriId:number): void {
    const makaleler = this.tumMakaleler();
    if (makaleler && makaleler.length > 0) {
      this.postItems = makaleler.filter((makale) => makale.categoryId === kategoriId);
      return;
    }
  }
}

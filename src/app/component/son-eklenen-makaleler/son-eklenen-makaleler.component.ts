import { ChangeDetectionStrategy, Component,  linkedSignal, OnInit, ViewEncapsulation } from '@angular/core';
import { PostItems } from '../../models/post-item-models';
import { PostIceriklerService } from '../../services/post-icerikler.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-son-eklenen-makaleler',
  imports: [CommonModule, RouterLink],
  templateUrl: './son-eklenen-makaleler.component.html',
  styleUrl: './son-eklenen-makaleler.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class SonEklenenMakalelerComponent implements OnInit {
  apiurl = environment.apiUrl + 'post/getall';
  sonYazilanMakeleler!: PostItems[];
  readonly #tumMakaleler = linkedSignal(() => this.postService.postItems());
  populerMakeleler!: PostItems[];
  private localStorageKey = 'postsDataFatihKarakas';
  constructor(private postService: PostIceriklerService) {
    this.postService.postIcerikleriniGetir();
  }

  ngOnInit(): void {
    setTimeout(() => {
      const tumMakaleler = this.#tumMakaleler();
      if (tumMakaleler && tumMakaleler.length > 0) {
        this.sonYazilanMakeleler = tumMakaleler.sort((a: PostItems, b: PostItems) => b.id - a.id).slice(0, 3);
        this.populerMakeleler = tumMakaleler.sort((a: PostItems, b: PostItems) => b.viewCount - a.viewCount).slice(0, 3);
      }
      else {
        const localStorageBilgileri = localStorage.getItem(this.localStorageKey);
        if(!localStorageBilgileri) return;
        const { posts } = JSON.parse(localStorageBilgileri);
        this.sonYazilanMakeleler = posts.sort((a: PostItems, b: PostItems) => b.id - a.id).slice(0, 3);
        this.populerMakeleler = posts.sort((a: PostItems, b: PostItems) => b.viewCount - a.viewCount).slice(0, 3);
      }
    }, 500);

  }
}

import { ChangeDetectionStrategy, Component, linkedSignal, OnInit, ViewEncapsulation } from '@angular/core';
import { PostIceriklerService } from '../../services/post-icerikler.service';
import { PostItems } from '../../models/post-item-models';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-son-eklenen-makale',
  imports: [RouterLink, CommonModule],
  templateUrl: './son-eklenen-makale.component.html',
  styleUrl: './son-eklenen-makale.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None
})
export class SonEklenenMakaleComponent implements OnInit {
  sonYazilanMakele!: PostItems;
  readonly #tumMakaleler = linkedSignal(() => this.postService
    .postItems());
  constructor(private postService: PostIceriklerService) { }

  ngOnInit(): void {
    const makaleler = this.#tumMakaleler();
    if (makaleler && makaleler.length > 0) {
      this.sonYazilanMakele = makaleler.sort((a: PostItems, b: PostItems) => b.id - a.id)[0];
    }
  }
}

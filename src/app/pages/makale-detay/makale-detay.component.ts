import { ChangeDetectionStrategy, Component, computed, OnInit, ViewEncapsulation } from '@angular/core';
import { PostItems } from '../../models/post-item-models';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { PostIceriklerService } from '../../services/post-icerikler.service';

@Component({
  selector: 'app-makale-detay',
  imports: [RouterLink, CommonModule],
  templateUrl: './makale-detay.component.html',
  styleUrl: './makale-detay.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class MakaleDetayComponent implements OnInit {
  makaleId = 0;
  makaleDetay!: PostItems;
  makaleBilgisi = computed(() => this.postService.postItems())!;
  fullContent: SafeHtml | null = null;
  apiUrl = environment.apiUrl + 'post/getbyid/';
  apiUrlOkundu = environment.apiUrl + 'post/guncelle/';

  constructor(private route: ActivatedRoute,
    private sanitizer: DomSanitizer, private http: HttpClient,
    private postService: PostIceriklerService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(async params => {
      this.makaleId = Number(params.get('id'));
      if (this.makaleId > 0) {
        await this.makaleDetayiniGetir(this.makaleId);
        await this.okunduBilgisiGuncelle(this.makaleId);
      }
    });
  }

  async makaleDetayiniGetir(postId: number): Promise<void> {
    const makale = this.makaleBilgisi();
    if (makale && makale.length > 0) {
      this.makaleDetay = makale.find((makale) => makale.id === postId)!;
      if (this.makaleDetay) {
        this.fullContent = this.sanitizer.bypassSecurityTrustHtml(this.makaleDetay.fullContent);
      }
      return;
    }
  }

  async okunduBilgisiGuncelle(postId: number): Promise<void> {
    const apiUrlYeni = this.apiUrlOkundu + postId;
    await this.http.post(apiUrlYeni, null).subscribe();
  }
}

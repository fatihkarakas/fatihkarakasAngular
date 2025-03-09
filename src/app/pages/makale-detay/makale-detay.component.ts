import { Component, OnInit } from '@angular/core';
import { PostItems } from '../../models/post-item-models';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-makale-detay',
  imports: [RouterLink, CommonModule],
  templateUrl: './makale-detay.component.html',
  styleUrl: './makale-detay.component.css'
})
export class MakaleDetayComponent implements OnInit {
  makaleId = 0;
  makaleDetay!: PostItems;
  fullContent: SafeHtml | null = null;
  apiUrl = environment.apiUrl + 'post/getbyid/';
  apiUrlOkundu = environment.apiUrl + 'post/guncelle/';

  constructor(private route: ActivatedRoute,
    private sanitizer: DomSanitizer, private http: HttpClient
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
    const apiUrlYeni = this.apiUrl + postId;
    await this.http.get<PostItems>(apiUrlYeni).subscribe((data) => {
      this.makaleDetay = data;
      if (this.makaleDetay) {
        this.fullContent = this.sanitizer.bypassSecurityTrustHtml(this.makaleDetay.fullContent);
      }
    });
  }

  async okunduBilgisiGuncelle(postId: number): Promise<void> {
    const apiUrlYeni = this.apiUrlOkundu + postId;
    await this.http.post(apiUrlYeni, null).subscribe();
  }
}

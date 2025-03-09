import { Component, computed, OnInit } from '@angular/core';
import { PostItems } from '../../models/post-item-models';
import { PostIceriklerService } from '../../services/post-icerikler.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { environment } from '../../environments/environment.prod';

@Component({
  selector: 'app-son-eklenen-makaleler',
  imports: [CommonModule, RouterLink],
  templateUrl: './son-eklenen-makaleler.component.html',
  styleUrl: './son-eklenen-makaleler.component.css'
})
export class SonEklenenMakalelerComponent implements OnInit {
    apiurl = environment.apiUrl + 'post/getall';
    sonYazilanMakeleler!: PostItems[];
    readonly #tumMakaleler = computed(() => this.postService.postItems());
    populerMakeleler!: PostItems[];

    constructor(private postService: PostIceriklerService) {}
  
    ngOnInit(): void {
        const tumMakaleler=this.#tumMakaleler();
        if(tumMakaleler && tumMakaleler.length > 0){
            this.sonYazilanMakeleler = tumMakaleler.sort((a: PostItems, b: PostItems) => b.id - a.id).slice(0, 3);
            this.populerMakeleler = tumMakaleler.sort((a: PostItems, b: PostItems) => b.viewCount - a.viewCount).slice(0, 3);
        }
    }
}

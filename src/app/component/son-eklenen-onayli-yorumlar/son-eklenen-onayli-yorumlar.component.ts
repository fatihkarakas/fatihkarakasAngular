import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommentsModel } from '../../models/comments-model';
import { environment } from '../../environments/environment.prod';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-son-eklenen-onayli-yorumlar',
  imports: [CommonModule, RouterLink],
  templateUrl: './son-eklenen-onayli-yorumlar.component.html',
  styleUrl: './son-eklenen-onayli-yorumlar.component.css'
})
export class SonEklenenOnayliYorumlarComponent implements OnInit {

  commnetsModel: CommentsModel[] = [];
  apiUrl = environment.apiUrl+"comment/getall";
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<{ comments :CommentsModel[] }>(this.apiUrl).subscribe((data) => {
      this.commnetsModel = data.comments.filter(x => x.isAccept == true);
    });
  }

}

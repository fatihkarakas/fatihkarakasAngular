import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Signal, inject, signal } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { ReferansModel } from '../../models/referanslar-model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-referanslar',
  imports: [CommonModule],
  templateUrl: './referanslar.component.html',
  styleUrl: './referanslar.component.css'
})
export class ReferanslarComponent implements OnInit{
  apiUrl = environment.apiUrl + 'referanslar/getall'
  #http = inject(HttpClient)
  referanslar= signal<ReferansModel[]>([]);
  router = inject(Router) ;

 ngOnInit(): void {
   this.#http.get<{referanslarim : ReferansModel[]}>(this.apiUrl).subscribe(
    (response)=> {
      this.referanslar.set(response.referanslarim);
    }
   );
 }

}


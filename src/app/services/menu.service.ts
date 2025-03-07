import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuSubItems } from '../models/menusubitems';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = environment.apiUrl + 'Auth/categories';
  menusubitems = signal<MenuSubItems[]>([]);

  constructor(private http: HttpClient) {}

  menuleriYukle(): void {
    this.http.get<MenuSubItems[]>(this.apiUrl).subscribe((data) => {
      this.menusubitems.set(data);
    });
  }
}

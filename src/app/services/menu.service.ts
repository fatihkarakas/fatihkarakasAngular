import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuSubItems } from '../models/menusubitems';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = environment.apiUrl + 'Auth/categories';
  constructor(private http: HttpClient) {}

  menuleriYukle(): Observable<MenuSubItems[]> {
    return this.http.get<MenuSubItems[]>(this.apiUrl); 
  }
}

import { Component, computed, effect } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-kategori-sayisal-bilgiler',
  imports: [RouterLink],
  templateUrl: './kategori-sayisal-bilgiler.component.html',
  styleUrl: './kategori-sayisal-bilgiler.component.css'
})
export class KategoriSayisalBilgilerComponent {

  menuSubItems = computed(() => this.menuService.menusubitems());

  constructor(private menuService : MenuService) { }
  
}

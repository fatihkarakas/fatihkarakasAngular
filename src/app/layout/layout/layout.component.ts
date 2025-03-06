import { Component, inject,  OnInit,  ViewEncapsulation } from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';
import { MenuSubItems } from '../../models/menusubitems';
import { MenuService } from '../../services/menu.service';
import { SolmenutumuComponent } from '../../component/solmenutumu/solmenutumu.component';
import { PostListesiAnaSayfaComponent } from '../../component/post-listesi-ana-sayfa/post-listesi-ana-sayfa.component';

@Component({
  selector: 'app-layout',
  templateUrl: "./layout.component.html",
  styleUrl: './layout.component.css',
  imports: [RouterOutlet, RouterLink, SolmenutumuComponent, PostListesiAnaSayfaComponent],
})

export class LayoutComponent implements OnInit {
  manuSubItems: MenuSubItems[] = [];  
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.menuleriYukle().subscribe((data) => {
      this.manuSubItems = data;
      console.log(this.manuSubItems);
    });
  }
}


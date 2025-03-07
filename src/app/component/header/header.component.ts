import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { MenuSubItems } from '../../models/menusubitems';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  manuSubItems: MenuSubItems[] = [];

  constructor(private menuService : MenuService) { }
  
  ngOnInit() {
    this.menuService.menuleriYukle().subscribe((data) => {
      this.manuSubItems = data;
      console.log(this.manuSubItems);
    });
  }

}

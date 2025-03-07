import { Component, effect, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuSubItems = computed(() => this.menuService.menusubitems());
  constructor(private menuService : MenuService) {} 
}

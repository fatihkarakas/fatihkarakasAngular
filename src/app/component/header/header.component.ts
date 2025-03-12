import { Component, effect, computed, linkedSignal, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class HeaderComponent {
  menuSubItems = linkedSignal(() => this.menuService.menusubitems());
  constructor(private menuService : MenuService) {
    menuService.menuleriYukle();
  }
}

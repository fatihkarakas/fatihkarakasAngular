import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "./layout/layout/layout.component";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SidebarfatihComponent } from './component/sidebarfatih/sidebarfatih.component';
import { MenuService } from './services/menu.service';
import { PostIceriklerService } from './services/post-icerikler.service';
@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Fatih KARAKAŞ & Senior Software Developer';

  constructor(private menuService:MenuService, private postService : PostIceriklerService){}

  ngOnInit(){
    this.menuService.menuleriYukle();
    this.postService.postIcerikleriniGetir();
  }
}

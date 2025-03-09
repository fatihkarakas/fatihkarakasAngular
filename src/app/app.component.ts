import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from "./layout/layout/layout.component";
import { MenuService } from './services/menu.service';
import { PostIceriklerService } from './services/post-icerikler.service';
import { HttpClientModule } from '@angular/common/http';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,  // Angular Standalone Component
  imports: [LayoutComponent, CommonModule, HttpClientModule],  
  providers: [ ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fatih KARAKAŞ & Senior Software Developer';

  constructor(private menuService: MenuService, private postService: PostIceriklerService) {}

  async ngOnInit() {
     this.menuService.menuleriYukle();
    await this.postService.postIcerikleriniGetir();
  }
}

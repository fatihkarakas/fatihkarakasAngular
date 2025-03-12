import { Component } from '@angular/core';
import { LayoutComponent } from "./layout/layout/layout.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,  // Angular Standalone Component
  imports: [LayoutComponent, CommonModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fatih KARAKAŞ & Senior Software Developer';

}

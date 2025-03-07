import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { SolmenutumuComponent } from '../../component/solmenutumu/solmenutumu.component';
import { HeaderComponent } from '../../component/header/header.component';

@Component({
  selector: 'app-layout',
  templateUrl: "./layout.component.html",
  styleUrl: './layout.component.css',
  imports: [RouterOutlet, SolmenutumuComponent, HeaderComponent],
})

export class LayoutComponent{  
}


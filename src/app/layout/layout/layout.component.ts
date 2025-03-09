import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../component/header/header.component';
import { SagTarafBilgilendirmeComponent } from '../../component/sag-taraf-bilgilendirme/sag-taraf-bilgilendirme.component';

@Component({
  selector: 'app-layout',
  templateUrl: "./layout.component.html",
  styleUrl: './layout.component.css',
  imports: [RouterOutlet, SagTarafBilgilendirmeComponent, HeaderComponent],
})

export class LayoutComponent{ }
 


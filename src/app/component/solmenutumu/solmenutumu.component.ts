import { Component } from '@angular/core';
import { SidebarfatihComponent } from '../sidebarfatih/sidebarfatih.component';
import { SagTarafBilgilendirmeComponent } from '../sag-taraf-bilgilendirme/sag-taraf-bilgilendirme.component';

@Component({
  selector: 'app-solmenutumu',
  imports: [SidebarfatihComponent, SagTarafBilgilendirmeComponent],
  templateUrl: './solmenutumu.component.html',
  styleUrl: './solmenutumu.component.css'
})
export class SolmenutumuComponent {

}

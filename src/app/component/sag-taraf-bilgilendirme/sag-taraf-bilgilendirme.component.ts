import { Component } from '@angular/core';
import { KategoriSayisalBilgilerComponent } from '../kategori-sayisal-bilgiler/kategori-sayisal-bilgiler.component';
import { SonEklenenMakaleComponent } from '../son-eklenen-makale/son-eklenen-makale.component';
import { SonEklenenMakalelerComponent } from '../son-eklenen-makaleler/son-eklenen-makaleler.component';
import { SonEklenenOnayliYorumlarComponent } from '../son-eklenen-onayli-yorumlar/son-eklenen-onayli-yorumlar.component';
import { SidebarfatihComponent } from '../sidebarfatih/sidebarfatih.component';

@Component({
  selector: 'app-sag-taraf-bilgilendirme',
  imports: [KategoriSayisalBilgilerComponent, SonEklenenMakaleComponent, SonEklenenMakalelerComponent, SonEklenenOnayliYorumlarComponent,SidebarfatihComponent],
  templateUrl: './sag-taraf-bilgilendirme.component.html',
  styleUrl: './sag-taraf-bilgilendirme.component.css'
})
export class SagTarafBilgilendirmeComponent {

}

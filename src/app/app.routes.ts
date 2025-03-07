import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { HakkimdaComponent } from './pages/hakkimda/hakkimda.component';
import { IletisimComponent } from './pages/iletisim/iletisim.component';
import { KategorilerComponent } from './pages/kategoriler/kategoriler.component';
import { YoutubeComponent } from './pages/youtube/youtube.component';
import { ReferanslarComponent } from './pages/referanslar/referanslar.component';
import { AnasayfaComponent } from './pages/anasayfa/anasayfa.component';

export const routes: Routes = [
    { path: '', component: AnasayfaComponent },
    { path: 'Anasayfa', component: AnasayfaComponent },
    { path: 'Hakkimda', component: HakkimdaComponent },
    { path: 'Iletisim', component: IletisimComponent },    
    { path: 'Kategoriler/:id', component: KategorilerComponent },
    { path: 'YoutubeVideolarim', component: YoutubeComponent },
    { path: 'Referanslar', component: ReferanslarComponent },
];

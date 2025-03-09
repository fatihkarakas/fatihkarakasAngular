import { Routes } from '@angular/router';
import { HakkimdaComponent } from './pages/hakkimda/hakkimda.component';
import { IletisimComponent } from './pages/iletisim/iletisim.component';
import { KategorilerComponent } from './pages/kategoriler/kategoriler.component';
import { YoutubeComponent } from './pages/youtube/youtube.component';
import { ReferanslarComponent } from './pages/referanslar/referanslar.component';
import { AnasayfaComponent } from './pages/anasayfa/anasayfa.component';
import { MakaleDetayComponent } from './pages/makale-detay/makale-detay.component';

export const routes: Routes = [
    { path: '', redirectTo: 'Anasayfa', pathMatch: 'full' },
    { path: 'Anasayfa', component: AnasayfaComponent, data: { title: 'Anasayfa' } },
    { path: 'Hakkimda', component: HakkimdaComponent, data: { title: 'Hakkımda' } },
    { path: 'Iletisim', component: IletisimComponent, data: { title: 'İletişim' } },
    { 
        path: 'Kategoriler/:id', 
        component: KategorilerComponent, 
        data: { title: 'Kategoriler', prerender: true },
        
    },
    { path: 'YoutubeVideolarim', component: YoutubeComponent, data: { title: 'Youtube Videolarım' } },
    { path: 'Referanslar', component: ReferanslarComponent, data: { title: 'Referanslar' } },
    { 
        path: 'MakaleDetay/:id', 
        component: MakaleDetayComponent, 
        data: { title: 'Makale Detay', prerender: true }  // prerendering için işaretleme
    }
];

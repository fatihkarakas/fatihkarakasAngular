import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { KategorilerComponent } from './app/pages/kategoriler/kategoriler.component';
import { MakaleDetayComponent } from './app/pages/makale-detay/makale-detay.component';
import { Routes } from '@angular/router';

export const serverRoutes: Routes = [
  { path: 'Kategoriler/:id', component: KategorilerComponent },
  { path: 'MakaleDetay/:id', component: MakaleDetayComponent },
];

export async function getPrerenderParams(route: string): Promise<string[]> {
    console.log('getPrerenderParams çağrıldı:', route);
    if (route === 'Kategoriler/:id') {
      // Veritabanından kategori ID'lerini al
      const kategoriIdleri = ['1', '2', '3']; // Örnek ID'ler
      return Promise.resolve(kategoriIdleri);
    } else if (route === 'MakaleDetay/:id') {
      // Veritabanından makale ID'lerini al
      const makaleIdleri = ['10', '11', '12']; // Örnek ID'ler
      return Promise.resolve(makaleIdleri);
    }
    return Promise.resolve([]);
  }
const bootstrap = () => bootstrapApplication(AppComponent, config);


export default bootstrap;

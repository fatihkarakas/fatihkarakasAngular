import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes } from '@angular/router';
import { LayoutComponent } from './app/layout/layout/layout.component';
import { provideHttpClient , withInterceptorsFromDi } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: LayoutComponent }, // Ana Sayfa

];

bootstrapApplication(AppComponent, appConfig, )
  .catch((err) => console.error(err));
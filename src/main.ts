import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Routes } from '@angular/router';
import { LayoutComponent } from './app/layout/layout/layout.component';
import { HakkimdaComponent } from './app/pages/hakkimda/hakkimda.component';
import { IletisimComponent } from './app/pages/iletisim/iletisim.component';
import { KategorilerComponent } from './app/pages/kategoriler/kategoriler.component';



bootstrapApplication(AppComponent, appConfig, )
  .catch((err) => console.error(err));
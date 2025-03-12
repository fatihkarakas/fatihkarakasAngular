import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../component/header/header.component';
import { SagTarafBilgilendirmeComponent } from '../../component/sag-taraf-bilgilendirme/sag-taraf-bilgilendirme.component';

@Component({
  selector: 'app-layout',
  templateUrl: "./layout.component.html",
  styleUrl: './layout.component.css',
  imports: [RouterOutlet, SagTarafBilgilendirmeComponent, HeaderComponent],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})

export class LayoutComponent { }



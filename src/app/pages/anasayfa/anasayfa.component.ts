import { Component, ViewEncapsulation,ChangeDetectionStrategy } from '@angular/core';
import { PostListesiAnaSayfaComponent } from '../../component/post-listesi-ana-sayfa/post-listesi-ana-sayfa.component';

@Component({
  selector: 'app-anasayfa',
  imports: [PostListesiAnaSayfaComponent],
  templateUrl: './anasayfa.component.html',
  styleUrl: './anasayfa.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnasayfaComponent {

}

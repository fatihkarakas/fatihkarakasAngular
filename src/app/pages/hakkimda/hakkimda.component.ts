import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hakkimda',
  imports: [RouterLink],
  templateUrl: './hakkimda.component.html',
  styleUrl: './hakkimda.component.css',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HakkimdaComponent {

}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-page.component.html',
  styleUrls: ['../../app.component.scss'],
})
export class ServicesPageComponent {
  @Input() icon: (name: string) => string = () => '·';

  readonly data = portfolio;
}

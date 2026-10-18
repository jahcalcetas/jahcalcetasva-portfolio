import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-page.component.html',
  styleUrls: ['../../app.component.scss'],
})
export class AboutPageComponent {
  @Input() icon: (name: string) => string = () => '·';

  readonly data = portfolio;
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['../../app.component.scss'],
})
export class HomePageComponent {
  @Input() navigate: (target: number) => void = () => undefined;
  @Input() icon: (name: string) => string = () => '·';

  readonly data = portfolio;
}

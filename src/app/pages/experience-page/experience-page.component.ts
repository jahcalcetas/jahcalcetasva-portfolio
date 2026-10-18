import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-experience-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-page.component.html',
  styleUrls: ['../../app.component.scss'],
})
export class ExperiencePageComponent {
  @Input() icon: (name: string) => string = () => '·';

  readonly data = portfolio;
}

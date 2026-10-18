import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-skills-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-page.component.html',
  styleUrls: ['../../app.component.scss'],
})
export class SkillsPageComponent {
  @Input() icon: (name: string) => string = () => '·';

  readonly data = portfolio;
}

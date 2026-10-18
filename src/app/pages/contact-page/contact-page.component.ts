import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { portfolio } from '../../portfolio.data';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-page.component.html',
  styleUrls: ['../../app.component.scss'],
})
export class ContactPageComponent {
  @Input() icon: (name: string) => string = () => '·';

  readonly data = portfolio;
}

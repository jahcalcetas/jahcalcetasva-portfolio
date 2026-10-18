import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { portfolio, type ProjectCategory } from '../../portfolio.data';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-page.component.html',
  styleUrls: ['../../app.component.scss'],
})
export class ProjectsPageComponent {
  @Input() icon: (name: string) => string = () => '·';

  constructor(private readonly sanitizer: DomSanitizer) {}

  readonly data = portfolio;
  readonly categories: Array<{ key: 'all' | ProjectCategory; label: string }> = [
    { key: 'all', label: 'All' },
    { key: 'website', label: 'Website' },
    { key: 'email', label: 'Email Templates' },
    { key: 'excel', label: 'Excel' },
    { key: 'other', label: 'Other Skills' },
  ];

  selectedCategory = signal<'all' | ProjectCategory>('all');

  get filteredProjects() {
    const selected = this.selectedCategory();

    if (selected === 'all') {
      return this.data.projects;
    }

    return this.data.projects.filter((project) => project.category === selected);
  }

  setCategory(category: 'all' | ProjectCategory): void {
    this.selectedCategory.set(category);
  }

  getSafePreviewUrl(url: string | undefined): SafeResourceUrl | null {
    if (!url) {
      return null;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

import { CommonModule } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HomePageComponent,
    ServicesPageComponent,
    AboutPageComponent,
    ExperiencePageComponent,
    ProjectsPageComponent,
    SkillsPageComponent,
    ContactPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  readonly pages = [
    'Home',
    'What I Do',
    'About',
    'What I Bring',
    'Projects',
    'Skills',
    'Contact',
  ];

  readonly tabs = [
    { label: 'Home', page: 0, icon: 'home' },
    { label: 'About', page: 2, icon: 'user' },
    { label: 'Projects', page: 4, icon: 'folder' },
    { label: 'Skills', page: 5, icon: 'star' },
    { label: 'Contact', page: 6, icon: 'mail' },
  ];

  current = signal(0);
  animating = signal(false);
  direction = signal<'forward' | 'backward'>('forward');

  private touchX = 0;
  private touchY = 0;

  private get isSinglePageLayout(): boolean {
    return typeof window !== 'undefined' && window.innerWidth <= 767;
  }

  private get stepSize(): number {
    return this.isSinglePageLayout ? 1 : 2;
  }

  private readonly iconMap: Record<string, string> = {
    home: '⌂',
    user: '◯',
    folder: '▱',
    star: '✦',
    mail: '✉',
    inbox: '⌑',
    grid: '▦',
    chat: '◌',
    search: '⌕',
    spark: '⚡',
    edit: '✎',
  };

  get spreadStart(): number {
    return Math.min(Math.floor(this.current() / 2) * 2, 6);
  }

  get activeTab(): string {
    const page = this.current();

    if (page < 2) {
      return 'Home';
    }

    if (page < 4) {
      return 'About';
    }

    if (page === 4) {
      return 'Projects';
    }

    if (page === 5) {
      return 'Skills';
    }

    return 'Contact';
  }

  navigate(target: number): void {
    const currentPage = this.current();

    if (this.animating() || target < 0 || target >= 7 || target === currentPage) {
      return;
    }

    this.direction.set(target > currentPage ? 'forward' : 'backward');
    this.animating.set(true);

    setTimeout(() => this.current.set(target), 260);
    setTimeout(() => this.animating.set(false), 760);
  }

  next(): void {
    this.navigate(this.current() + this.stepSize);
  }

  previous(): void {
    this.navigate(this.current() - this.stepSize);
  }

  onPointerDown(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') {
      this.touchX = event.clientX;
      this.touchY = event.clientY;
    }
  }

  onPointerUp(event: PointerEvent): void {
    if (event.pointerType === 'mouse') {
      return;
    }

    const dx = event.clientX - this.touchX;
    const dy = event.clientY - this.touchY;

    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      if (dx < 0) {
        this.next();
      } else {
        this.previous();
      }
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKey(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.next();
    }

    if (event.key === 'ArrowLeft') {
      this.previous();
    }
  }

  icon(name: string): string {
    return this.iconMap[name] ?? '·';
  }
}

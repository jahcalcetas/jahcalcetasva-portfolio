import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should start on the home page', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.current()).toBe(0);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Janine Calcetas');
  });

  it('should jump two page indices when using the next arrow on a spread layout', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    Object.defineProperty(window, 'innerWidth', { value: 1024, configurable: true });
    app.next();
    tick(800);

    expect(app.current()).toBe(2);
  }));

  it('should jump one page index when using the next arrow on mobile', fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    Object.defineProperty(window, 'innerWidth', { value: 500, configurable: true });
    app.next();
    tick(800);

    expect(app.current()).toBe(1);
  }));

  it('should create a safe project preview URL for the iframe', () => {
    const fixture = TestBed.createComponent(ProjectsPageComponent);
    const component = fixture.componentInstance;

    expect(component.getSafePreviewUrl('/email-previews/luna-threads.html')).toBeTruthy();
  });
});

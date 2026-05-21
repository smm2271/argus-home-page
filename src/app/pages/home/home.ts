import { AfterViewInit, Component, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;
  private anchorHandlers: Array<() => void> = [];

  constructor(private host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') {
      return;
    }

    const root = this.host.nativeElement;
    const sections = Array.from(root.querySelectorAll('section'));

    sections.forEach((section) => section.classList.add('reveal-on-scroll'));

    if (typeof IntersectionObserver === 'undefined') {
      sections.forEach((section) => section.classList.add('visible'));
    } else {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1 }
      );

      sections.forEach((section) => this.observer?.observe(section));
    }

    const anchors = Array.from(root.querySelectorAll('a[href^="#"]'));
    anchors.forEach((anchor) => {
      const handler = (event: Event) => {
        event.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (!targetId || targetId === '#') {
          return;
        }

        const target = root.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      };

      anchor.addEventListener('click', handler);
      this.anchorHandlers.push(() => anchor.removeEventListener('click', handler));
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.anchorHandlers.forEach((off) => off());
    this.anchorHandlers = [];
  }
}

import { Component, DestroyRef, HostListener, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss'],
})
export class Nav {
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly destroyRef = inject(DestroyRef);

  // whether the hamburger menu is open
  isOpen = false;
  isDesktop = false;

  constructor() {
    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((state) => {
        this.isDesktop = state.matches;
        // reset mobile dropdown when switching breakpoints
        this.isOpen = false;
      });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }

  // close when clicking outside the nav container
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (this.isDesktop || !this.isOpen) return;
    const target = event.target as HTMLElement | null;
    if (!target) return;
    // if the click is outside the nav container, close the menu
    if (!target.closest('.nav-container')) {
      this.closeMenu();
    }
  }

  // close with Escape
  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.isDesktop) return;
    this.closeMenu();
  }
}

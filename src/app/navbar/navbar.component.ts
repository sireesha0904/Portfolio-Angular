import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMenuOpen = false; // State for the mobile menu

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Only access window in the browser
      window.addEventListener('scroll', this.onScroll);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('scroll', this.onScroll);
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Toggle menu open/close
  }

  private onScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Add class on scroll
      } else {
        navbar.classList.remove('scrolled'); // Remove class when at the top
      }
    }
  };
}

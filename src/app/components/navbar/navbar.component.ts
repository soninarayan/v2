import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  currentColor = '#4ade80';
  activeSection: string = 'home';

  updatePrimaryColor(event: Event) {
    const newColor = (event.target as HTMLInputElement).value;
    this.currentColor = newColor;
    document.documentElement.style.setProperty('--primary-color', newColor);
    localStorage.setItem('primaryColor', newColor);
  }

  ngOnInit() {
    const savedColor = localStorage.getItem('primaryColor');
    if (savedColor) {
      this.currentColor = savedColor;
      document.documentElement.style.setProperty('--primary-color', savedColor);
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = ['home', 'about', 'projects', 'contact'];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 5 && rect.bottom > 5) {
          this.activeSection = id;
          break;
        }
      }
    }
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.activeSection = 'contact';
    }
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

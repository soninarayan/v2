import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  currentColor = '#4ade80';

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
}

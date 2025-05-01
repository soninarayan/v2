import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  currentColor = '#ff0000'; // Default red color
  activeSection: string = 'home';
  isColorPickerOpen = false;

  @ViewChild('colorPickerInput') colorPickerInput!: ElementRef;

  toggleColorPicker() {
    this.isColorPickerOpen = !this.isColorPickerOpen;
  }

  openColorPicker() {
    // Directly open the native color picker
    this.colorPickerInput.nativeElement.click();
  }

  updatePrimaryColor(event: Event) {
    const newColor = (event.target as HTMLInputElement).value;
    this.applyColor(newColor);
  }

  applyColor(color: string) {
    this.currentColor = color;
    document.documentElement.style.setProperty('--primary-color', color);
    localStorage.setItem('primaryColor', color);
  }

  ngOnInit() {
    const savedColor = localStorage.getItem('primaryColor');
    if (savedColor) {
      this.currentColor = savedColor;
      document.documentElement.style.setProperty('--primary-color', savedColor);
    }

    // Close color picker when clicking outside
    document.addEventListener(
      'click',
      this.closeColorPickerOnOutsideClick.bind(this)
    );
  }

  ngOnDestroy() {
    document.removeEventListener(
      'click',
      this.closeColorPickerOnOutsideClick.bind(this)
    );
  }

  closeColorPickerOnOutsideClick(event: MouseEvent) {
    const themeSwitcher = document.querySelector('.theme-switcher');
    if (
      this.isColorPickerOpen &&
      themeSwitcher &&
      !themeSwitcher.contains(event.target as Node)
    ) {
      this.isColorPickerOpen = false;
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

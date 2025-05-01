import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  displayText = '';
  private words = [
    'Full Stack Developer',
    'AI & Computer Vision Engineer',
    'Cloud Solutions Architect',
    'Data Engineer',
  ];
  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: any;

  ngAfterViewInit(): void {
    this.typeText();
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  private typeText(): void {
    const currentWord = this.words[this.wordIndex % this.words.length];
    const typingSpeed = this.isDeleting ? 50 : 100;

    this.displayText = currentWord.substring(0, this.charIndex);

    if (!this.isDeleting && this.charIndex < currentWord.length) {
      this.charIndex++;
    } else if (this.isDeleting && this.charIndex > 0) {
      this.charIndex--;
    } else {
      this.isDeleting = !this.isDeleting;
      if (!this.isDeleting) {
        this.wordIndex++;
        this.timer = setTimeout(() => this.typeText(), 1000); // pause before typing next
        return;
      }
    }

    this.timer = setTimeout(() => this.typeText(), typingSpeed);
  }
}

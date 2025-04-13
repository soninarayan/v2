import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const words = ['Full Stack Developer', 'Data Engineer', 'Cloud Enthusiast'];
    const el = document.querySelector('.typewriter')!;
    let i = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const word = words[i % words.length];
      const speed = isDeleting ? 50 : 100;

      el.textContent = word.substring(0, charIndex);
      if (!isDeleting && charIndex < word.length) {
        charIndex++;
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) i++;
        setTimeout(type, 1000); // pause before typing next
        return;
      }
      setTimeout(type, speed);
    };

    type();
  }
}

import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [NgFor],
})
export class ProjectsComponent {
  selectedProjectIndex = 1;

  projects = [
    {
      name: 'AI Inventory Manager',
      image: 'projects/project1.jpg',
      description: 'AI-powered tool for real-time inventory tracking.',
      github: 'https://github.com/rohithreddydepa/inventory-ai',
      techStack: ['Angular', 'Python', 'MongoDB'],
    },
    {
      name: 'Resume Portfolio Builder',
      image: 'projects/project2.jpg',
      description:
        'Generates custom portfolios using resume data and templates.',
      github: 'https://github.com/rohithreddydepa/portfolio-builder',
      techStack: ['React', 'Node.js', 'TailwindCSS'],
    },
    {
      name: 'Attendance Tracker',
      image: 'projects/project3.jpg',
      description:
        'Punch-in system with charts, time logs, and role-based auth.',
      github: 'https://github.com/rohithreddydepa/attendance-tracker',
      techStack: ['Angular', 'Node.js', 'MongoDB'],
    },
  ];

  getClass(index: number): string {
    if (index === this.selectedProjectIndex) return 'active';
    if (index === this.selectedProjectIndex - 1) return 'behind';
    if (index === this.selectedProjectIndex + 1) return 'ahead';
    return '';
  }

  selectProject(index: number) {
    this.selectedProjectIndex = index;
  }
}

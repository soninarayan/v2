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
      name: 'Portfolio Website',
      image: 'projects/project1.png',
      description:
        'A responsive and modern portfolio website to showcase my work, skills, and resume. Built using Angular, styled with Bootstrap, and includes interactive animations.',
      github: 'https://github.com/rohithreddydepa/portfolio-builder',
      techStack: ['Angular', 'Bootstrap', 'TypeScript', 'SCSS'],
    },
    {
      name: 'Traffic Asset Defect Detection',
      image: 'projects/project2.png',
      description:
        'An AI-based tool that identifies defects in traffic assets such as road signs, traffic lights, and pavement markings using deep learning and computer vision.',
      github: 'https://github.com/rohithreddydepa/AssestManagement',
      techStack: ['YOLOv8', 'Python', 'OpenCV', 'Deep Learning'],
    },
    {
      name: 'School Management System',
      image: 'projects/project3.png',
      description:
        'A full-stack school management platform to handle student records, attendance, grades, and user roles. Features real-time data sync, secure APIs, and cloud deployment.',
      github: 'https://github.com/rohithreddydepa/schoolManagmentSystem',
      techStack: ['React', 'Spring Boot', 'AWS', 'PostgreSQL', 'REST API'],
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
  onScroll(event: WheelEvent) {
    event.preventDefault(); // prevent the page from scrolling

    if (event.deltaY > 0) {
      // scroll down
      this.selectedProjectIndex =
        (this.selectedProjectIndex + 1) % this.projects.length;
    } else {
      // scroll up
      this.selectedProjectIndex =
        (this.selectedProjectIndex - 1 + this.projects.length) %
        this.projects.length;
    }
  }
}

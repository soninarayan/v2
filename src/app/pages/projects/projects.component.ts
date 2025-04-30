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
  private scrollCooldown = false;
  projects = [
    {
      name: 'Traffic Asset Defect Detection (TxDOT)',
      image: 'projects/AssestManagment.png',
      description:
        'AI-powered system for Texas DOT that detects defects in road signs, lights, and pavement using YOLOv5 and OpenCV. Automated reporting reduced inspection time by 40%.',
      github: 'https://github.com/rohithreddydepa/AssestManagement',
      techStack: [
        'YOLOv5',
        'Python',
        'OpenCV',
        'Computer Vision',
        'Automation',
      ],
    },
    {
      name: 'School Management System',
      image: 'projects/SMS.png',
      description:
        'Full-stack education platform with secure login, admin/student dashboards, attendance tracking, and payment integration. Deployed on AWS with containerization.',
      github: 'https://github.com/rohithreddydepa/schoolManagmentSystem',
      techStack: ['React', 'Spring Boot', 'PostgreSQL', 'JWT', 'AWS', 'Docker'],
    },
    {
      name: 'ISP Messaging System',
      image: 'projects/ISPMessage.png',
      description:
        'Scalable microservices-based support system using Kafka for messaging and OpenAI API for query resolution. Reduced manual support by 40%.',
      github: 'https://github.com/rohithreddydepa/ISPMessagingSystem',
      techStack: ['Kafka', 'FastAPI', 'OpenAI API', 'PostgreSQL', 'Docker'],
    },
    {
      name: 'Spline Interpolation: Audio & Video Enhancement',
      image: 'projects/Spline_interpolation.png',
      description:
        'Python-based enhancement tool using cubic spline interpolation to restore degraded audio/video. Integrated SSIM, PSNR, MSE for quality evaluation.',
      github: 'https://github.com/rohithreddydepa/SplineInterpolation',
      techStack: [
        'Python',
        'OpenCV',
        'Librosa',
        'Matplotlib',
        'SciPy',
        'Docker',
      ],
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
    event.preventDefault();
    if (this.scrollCooldown) return;
    this.scrollCooldown = true;

    if (event.deltaY > 0) {
      this.selectedProjectIndex =
        (this.selectedProjectIndex + 1) % this.projects.length;
    } else {
      this.selectedProjectIndex =
        (this.selectedProjectIndex - 1 + this.projects.length) %
        this.projects.length;
    }

    // set cooldown duration (adjust for smoother/faster)
    setTimeout(() => {
      this.scrollCooldown = false;
    }, 400); // 400ms delay between scroll switches
  }
}

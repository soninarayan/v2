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
        'Advanced AI-powered system developed for Texas Department of Transportation that automatically identifies and classifies defects in road infrastructure. Implemented YOLOv5 object detection model with custom training on 5,000+ images, achieving 93% accuracy. Reduced manual inspection time by 40% and improved maintenance prioritization through automated severity scoring.',
      github: 'https://github.com/soninarayan/AssestManagement',
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
        'Comprehensive full-stack education management platform serving 1,000+ users. Features include role-based access control, real-time attendance tracking with parent notifications, automated grade calculation, and secure payment processing with RazorPay integration. Deployed on AWS with auto-scaling and achieved 99.9% uptime through containerized microservices architecture.',
      github: 'https://github.com/soninarayan/schoolManagmentSystem',
      techStack: ['React', 'Spring Boot', 'PostgreSQL', 'JWT', 'AWS', 'Docker'],
    },
    {
      name: 'ISP Messaging System',
      image: 'projects/ISPMessage.png',
      description:
        'Event-driven customer support platform processing 10,000+ daily inquiries. Built with a scalable microservices architecture using Kafka for asynchronous messaging and implemented AI-powered response generation with OpenAI API. Reduced manual support workload by 40% and improved response time from 2 hours to 10 minutes on average. Includes real-time analytics dashboard for support team performance.',
      github: 'https://github.com/soninarayan/ISPMessagingSystem',
      techStack: ['Kafka', 'FastAPI', 'OpenAI API', 'PostgreSQL', 'Docker'],
    },
    {
      name: 'Spline Interpolation: Audio & Video Enhancement',
      image: 'projects/Spline_interpolation.png',
      description:
        'High-performance media restoration tool that employs advanced cubic spline interpolation algorithms to recover degraded audio and video content. Processes frames using parallel computing techniques, achieving 60% faster processing than conventional methods. Implements comprehensive quality metrics (SSIM, PSNR, MSE) for objective evaluation and supports batch processing of multiple file formats (MP4, AVI, WAV, MP3).',
      github: 'https://github.com/soninarayan/SplineInterpolation',
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

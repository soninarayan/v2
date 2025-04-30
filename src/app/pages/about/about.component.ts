import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { TerminalComponent } from './terminal/terminal.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TerminalComponent, TerminalComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('terminalTrigger', { static: false }) terminalTrigger!: ElementRef;
  showTerminal: boolean = false;
  ngAfterViewInit(): void {
    // Tooltip setup
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );

    // IntersectionObserver for terminal
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.showTerminal = true;
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (this.terminalTrigger?.nativeElement) {
      observer.observe(this.terminalTrigger.nativeElement);
    }
  }

  techGroups = [
    {
      title: 'Programming Languages',
      items: [
        { label: 'Java', icon: 'devicon-java-plain tech-icon' },
        { label: 'Python', icon: 'devicon-python-plain tech-icon' },
        { label: 'TypeScript', icon: 'devicon-typescript-plain tech-icon' },
        { label: 'JavaScript', icon: 'devicon-javascript-plain tech-icon' },
        { label: 'C/C++', icon: 'devicon-cplusplus-plain tech-icon' },
        { label: 'Shell/Bash', icon: 'devicon-bash-plain tech-icon' },
        { label: 'SQL', icon: 'devicon-mysql-plain tech-icon' },
      ],
    },
    {
      title: 'Frontend Frameworks',
      items: [
        { label: 'Angular', icon: 'devicon-angularjs-plain tech-icon' },
        { label: 'React', icon: 'devicon-react-original tech-icon' },
        { label: 'Redux', icon: 'devicon-redux-original tech-icon' },
        { label: 'Bootstrap', icon: 'devicon-bootstrap-plain tech-icon' },
        { label: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain tech-icon' },
      ],
    },
    {
      title: 'Backend Frameworks',
      items: [
        { label: 'Spring Boot', icon: 'devicon-spring-plain tech-icon' },
        { label: 'Node.js', icon: 'devicon-nodejs-plain tech-icon' },
        { label: 'FastAPI', icon: 'devicon-fastapi-plain tech-icon' },
        { label: '.NET Core', icon: 'devicon-dotnetcore-plain tech-icon' },
        { label: 'GraphQL', icon: 'devicon-graphql-plain tech-icon' },
        { label: 'REST APIs', icon: 'devicon-express-original tech-icon' }, // general icon
      ],
    },
    {
      title: 'Cloud & DevOps',
      items: [
        { label: 'AWS', icon: 'devicon-amazonwebservices-original tech-icon' },
        { label: 'Docker', icon: 'devicon-docker-plain tech-icon' },
        { label: 'Kubernetes', icon: 'devicon-kubernetes-plain tech-icon' },
        { label: 'Terraform', icon: 'devicon-terraform-plain tech-icon' },
        { label: 'GitHub Actions', icon: 'devicon-github-original tech-icon' },
      ],
    },
    {
      title: 'Databases & Caching',
      items: [
        { label: 'PostgreSQL', icon: 'devicon-postgresql-plain tech-icon' },
        { label: 'MySQL', icon: 'devicon-mysql-plain tech-icon' },
        { label: 'MongoDB', icon: 'devicon-mongodb-plain tech-icon' },
        { label: 'Redis', icon: 'devicon-redis-plain tech-icon' },
        { label: 'Firebase', icon: 'devicon-firebase-plain tech-icon' },
        {
          label: 'DynamoDB',
          icon: 'devicon-amazonwebservices-original tech-icon',
        }, // AWS icon used
        { label: 'CockroachDB', icon: 'devicon-database-plain tech-icon' }, // fallback icon
      ],
    },
    {
      title: 'Tools & Platforms',
      items: [
        { label: 'Git', icon: 'devicon-git-plain tech-icon' },
        { label: 'GitHub', icon: 'devicon-github-original tech-icon' },
        { label: 'Jenkins', icon: 'devicon-jenkins-plain tech-icon' },
        { label: 'Postman', icon: 'devicon-postman-plain tech-icon' },
        { label: 'Kafka', icon: 'devicon-apachekafka-original tech-icon' },
        { label: 'VS Code', icon: 'devicon-vscode-plain tech-icon' },
        { label: 'IntelliJ', icon: 'devicon-intellij-plain tech-icon' },
        { label: 'PyCharm', icon: 'devicon-pycharm-plain tech-icon' },
        { label: 'Confluence', icon: 'devicon-atlassian-plain tech-icon' },
        { label: 'Jira', icon: 'devicon-jira-plain tech-icon' },
      ],
    },
  ];
}

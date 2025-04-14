import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );
  }
  techGroups = [
    {
      title: 'Programming',
      items: [
        { label: 'Java', icon: 'devicon-java-plain tech-icon ' },
        { label: 'Python', icon: 'devicon-python-plain tech-icon ' },
        { label: 'TypeScript', icon: 'devicon-typescript-plain tech-icon ' },
        { label: 'JavaScript', icon: 'devicon-javascript-plain tech-icon ' },
        { label: 'C/C++', icon: 'devicon-cplusplus-plain tech-icon ' },
        { label: 'SQL', icon: 'devicon-mysql-plain tech-icon ' },
        { label: 'HTML/CSS', icon: 'devicon-html5-plain tech-icon ' },
      ],
    },
    {
      title: 'Frontend',
      items: [
        { label: 'Angular', icon: 'devicon-angularjs-plain tech-icon ' },
        { label: 'React', icon: 'devicon-react-original tech-icon ' },
        { label: 'Redux', icon: 'devicon-redux-original tech-icon ' },
        { label: 'Bootstrap', icon: 'devicon-bootstrap-plain tech-icon ' },
        { label: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain tech-icon ' },
      ],
    },
    {
      title: 'Backend',
      items: [
        { label: 'Node.js', icon: 'devicon-nodejs-plain tech-icon ' },
        { label: 'Spring Boot', icon: 'devicon-spring-plain tech-icon ' },
        { label: 'FastAPI', icon: 'devicon-fastapi-plain tech-icon ' },
        { label: '.NET Core', icon: 'devicon-dotnetcore-plain tech-icon ' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      items: [
        { label: 'Docker', icon: 'devicon-docker-plain tech-icon ' },
        { label: 'Kubernetes', icon: 'devicon-kubernetes-plain tech-icon ' },
        { label: 'Terraform', icon: 'devicon-terraform-plain tech-icon ' },
        { label: 'AWS', icon: 'devicon-amazonwebservices-plain tech-icon ' },
      ],
    },
    {
      title: 'Databases',
      items: [
        { label: 'MongoDB', icon: 'devicon-mongodb-plain tech-icon ' },
        { label: 'Redis', icon: 'devicon-redis-plain tech-icon ' },
        { label: 'Oracle', icon: 'devicon-oracle-original tech-icon ' },
        { label: 'SQLite', icon: 'devicon-sqlite-plain tech-icon ' },
        { label: 'Firebase', icon: 'devicon-firebase-plain tech-icon ' },
      ],
    },
    {
      title: 'Tools',
      items: [
        { label: 'Git', icon: 'devicon-git-plain tech-icon ' },
        { label: 'Jenkins', icon: 'devicon-jenkins-plain tech-icon ' },
        { label: 'Jira', icon: 'devicon-jira-plain tech-icon ' },
        { label: 'Postman', icon: 'devicon-postman-plain tech-icon ' },
        { label: 'Kafka', icon: 'devicon-apachekafka-original tech-icon ' },
        { label: 'VS Code', icon: 'devicon-vscode-plain tech-icon ' },
      ],
    },
  ];
}

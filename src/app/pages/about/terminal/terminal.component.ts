import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss'],
})
export class TerminalComponent implements OnInit, AfterViewInit {
  history: { command: string; output: string }[] = [];
  currentCommand: string = '';
  allowInput = false;
  userAtBottom: boolean = true;

  @ViewChild('terminalRef') terminalRef!: ElementRef;

  predefinedCommands = [
    {
      command: 'whoami',
      output: 'Narayan Soni, Full Stack & Cloud Engineer',
    },
    {
      command: 'cat skills.txt',
      output:
        'Java, Python, Spring Boot, Angular, React, AWS, Docker, Redis, GraphQL, Kafka, PostgreSQL',
    },
    {
      command: 'ls projects/',
      output:
        'school-management, isp-messaging-system, txdot-defect-detection, portfolio-site',
    },
    { command: 'pwd', output: '/home/Narayan/portfolio' },
    {
      command: 'help',
      output:
        `Available commands:\n` +
        `whoami, cat skills.txt, cat frontend.txt, cat backend.txt\n` +
        `cat experience/*.txt, cat projects/*.txt, cat education.txt\n` +
        `ls projects/, open linkedin, open github, open portfolio\n` +
        `motivation, uptime, pwd, hostname, date, clear`,
    },
  ];

  ngOnInit() {
    this.autoRunPredefined();
  }

  ngAfterViewInit() {
    const el = this.terminalRef?.nativeElement;
    if (el) {
      el.addEventListener('scroll', () => {
        const distance = el.scrollHeight - el.scrollTop - el.clientHeight;
        this.userAtBottom = distance < 50;
      });
    }
  }

  async autoRunPredefined() {
    for (const cmd of this.predefinedCommands) {
      this.history.push({ command: '', output: '' });
      const i = this.history.length - 1;

      for (let j = 0; j <= cmd.command.length; j++) {
        this.history[i].command = cmd.command.slice(0, j);
        await this.delay(50);
        if (this.userAtBottom) this.scrollToBottom();
      }

      await this.delay(300);
      this.history[i].output = cmd.output;
      if (this.userAtBottom) this.scrollToBottom();
      await this.delay(500);
    }

    this.allowInput = true;
    this.scrollToBottom();
  }

  handleCommand() {
    const cmd = this.currentCommand.trim().toLowerCase();
    if (!cmd) return;

    let output: string;

    switch (cmd) {
      case 'whoami':
        output = 'Narayan Soni, Full Stack & Cloud Engineer';
        break;

      case 'motivation':
        output =
          '“Build scalable, secure, and performant web apps with clean code and practical solutions.”';
        break;

      case 'uptime':
        output = 'Coding since 2015 | Uptime: 99.9%';
        break;

      case 'cat skills.txt':
        output =
          'Java, Python, Spring Boot, Angular, React, AWS, Docker, Redis, GraphQL, Kafka, PostgreSQL';
        break;

      case 'cat frontend.txt':
        output = 'Angular, React, Redux, Bootstrap, Tailwind CSS, SwiftUI';
        break;

      case 'cat backend.txt':
        output = 'Spring Boot, Node.js, FastAPI, .NET Core, GraphQL, REST';
        break;

      case 'cat experience/university-of-houston.txt':
        output =
          'Built Angular + Spring Boot apps | Redis Caching | PostgreSQL + AWS RDS | CloudWatch monitoring';
        break;

      case 'cat experience/Phoenix Global.txt':
        output =
          'React + Node.js | Redis, Redux, SSR | AWS Glue ETL | Jenkins + Docker + Kubernetes';
        break;

      case 'cat experience/*.txt':
        output =
          'University of Houston: Angular + Spring Boot, AWS, Redis, PostgreSQL\n' +
          'Phoenix Global: React + Node.js, Redis Caching, AWS Glue, Jenkins';
        break;

      case 'cat projects/school-management.txt':
        output =
          'React + Spring Boot | MySQL | JWT/OAuth2 | Razorpay | Role-based Access | Dockerized on AWS';
        break;

      case 'cat projects/isp-messaging-system.txt':
        output =
          'Apache Kafka + PostgreSQL | FastAPI + OpenAI API | Dockerized Microservices | 40% ticket reduction';
        break;

      case 'cat projects/txdot-defect-detection.txt':
        output =
          'YOLOv5 + OpenCV | Python automation for TxDOT | Detection accuracy improved by 25%';
        break;

      case 'cat projects/portfolio-site.txt':
        output =
          'Angular Portfolio with Terminal UI | GitHub & LinkedIn integrations | Fully responsive';
        break;

      case 'cat projects/*.txt':
        output =
          'school-management: React + Spring Boot + JWT, Razorpay, Docker\n' +
          'isp-messaging-system: Kafka + OpenAI API + PostgreSQL\n' +
          'txdot-defect-detection: YOLOv5 + OpenCV + Python scripting\n' +
          'portfolio-site: Angular Terminal UI + Responsive Design';
        break;

      case 'ls projects/':
        output =
          'school-management, isp-messaging-system, txdot-defect-detection, portfolio-site';
        break;

      case 'cat education.txt':
        output =
          'M.S. in Computer Science – University of Houston (2023–2025)\n' +
          'B.Tech in Computer Science – JNTU Hyderabad (2018–2022)';
        break;

      case 'open linkedin':
        output = 'Opening https://linkedin.com/in/soninarayan';
        break;

      case 'open github':
        output = 'Opening https://github.com/soninarayan';
        break;

      case 'open portfolio':
        output = 'Opening https://soninarayan.github.io/latest-portfolio/';
        break;

      case 'date':
        output = new Date().toString();
        break;

      case 'hostname':
        output = window.location.hostname;
        break;

      case 'pwd':
        output = '/home/Narayan/portfolio';
        break;

      case 'clear':
        this.history = [];
        this.currentCommand = '';
        return;

      case 'help':
        output =
          `Available commands:\n` +
          `whoami, cat skills.txt, cat frontend.txt, cat backend.txt\n` +
          `cat experience/*.txt, cat projects/*.txt, cat education.txt\n` +
          `ls projects/, open linkedin, open github, open portfolio\n` +
          `motivation, uptime, pwd, hostname, date, clear`;
        break;

      default:
        output = `zsh: command not found: ${cmd}`;
    }

    this.history.push({ command: this.currentCommand, output });
    this.currentCommand = '';
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      const el = this.terminalRef?.nativeElement;
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    }, 0);
  }

  delay(ms: number) {
    return new Promise((res) => setTimeout(res, ms));
  }
}

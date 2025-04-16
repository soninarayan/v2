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
      output: 'Rohith Reddy Depa, Full Stack & Cloud Engineer | Houston, TX',
    },
    {
      command: 'cat skills.txt',
      output:
        'Java, Python, Spring Boot, Angular, AWS, Docker, Redis, SQL, GraphQL, FastAPI',
    },
    {
      command: 'ls projects/',
      output:
        'e-commerce, secure-share, aisp-chatbot, portfolio-site, school-management',
    },
    { command: 'pwd', output: '/home/rohith/portfolio' },
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
        output = 'Rohith Reddy Depa, Full Stack & Cloud Engineer | Houston, TX';
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
          'Java, Python, Spring Boot, Angular, AWS, Docker, Redis, SQL, GraphQL, FastAPI';
        break;

      case 'cat frontend.txt':
        output = 'Angular, React, Redux, Bootstrap, Tailwind CSS, SwiftUI';
        break;

      case 'cat backend.txt':
        output = 'Spring Boot, Node.js, FastAPI, .NET Core, GraphQL, REST';
        break;

      case 'cat experience/university-of-houston.txt':
        output =
          'Research Assistant | YOLOv8 Sign Detection | GIS Coverage +40% | Cascade CMS SEO boost';
        break;

      case 'cat experience/opentext.txt':
        output =
          'Angular + Spring Boot App | 50K+ requests/day | Redis, CI/CD, AWS Glue';
        break;

      case 'cat experience/internship.txt':
        output =
          'Migrated PHP to .NET Core | Built 12 APIs | Supported 1K+ concurrent users';
        break;

      case 'cat experience/*.txt':
        output =
          'University of Houston: YOLOv8 Detection, Cascade SEO, GIS Automation\n' +
          'OpenText: Angular + Spring Boot, Redis Caching, AWS Glue, CI/CD\n' +
          'Internship: .NET Core APIs, PHP Migration';
        break;

      case 'cat projects/*.txt':
        output =
          'e-commerce: Spring Boot + GraphQL, Stripe, 99.95% uptime\n' +
          'secure-share: P2P AES-256, MinIO, RabbitMQ\n' +
          'aisp-chatbot: DeepSeek NLP, Elasticsearch + Kibana\n' +
          'portfolio-site: Angular site w/ Mac-style terminal\n' +
          'school-management: React + Spring Boot + PostgreSQL';
        break;

      case 'ls projects/':
        output =
          'e-commerce, secure-share, aisp-chatbot, portfolio-site, school-management';
        break;

      case 'cat projects/e-commerce.txt':
        output =
          'Spring Boot + GraphQL microservices | 500+ orders/day | Stripe + JWT | 99.95% uptime';
        break;

      case 'cat projects/secure-share.txt':
        output =
          'P2P AES-256 File Transfer | MinIO Storage | RabbitMQ | 98% faster than SFTP';
        break;

      case 'cat projects/aisp-chatbot.txt':
        output =
          'DeepSeek Chatbot | 92% resolution | Elasticsearch + Kibana dashboard';
        break;

      case 'cat projects/portfolio-site.txt':
        output =
          'Modern Angular Portfolio | Mac-style terminal | Responsive layout | GitHub + LinkedIn integration';
        break;

      case 'cat projects/school-management.txt':
        output =
          'School Management System | React + Spring Boot + PostgreSQL | Admin & Student Dashboards';
        break;

      case 'cat education.txt':
        output =
          'M.S. Computer Science – University of Houston (2023–2025)\n' +
          'B.Tech Computer Science – JNTU Hyderabad (2018–2022)';
        break;

      case 'open linkedin':
        output = 'Opening https://linkedin.com/in/rohithreddydepa';
        break;

      case 'open github':
        output = 'Opening https://github.com/rohithreddydepa';
        break;

      case 'open portfolio':
        output = 'Opening https://rohithreddydepa.github.io/latest-portfolio/';
        break;

      case 'date':
        output = new Date().toString();
        break;

      case 'hostname':
        output = window.location.hostname;
        break;

      case 'pwd':
        output = '/home/rohith/portfolio';
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

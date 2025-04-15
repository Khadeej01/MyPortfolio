import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectsComponent {
  projects = [
    { title: 'ConstructionXpert', category: 'Web Design', date: '17 Mar . 2025', image: '/assets/img/work-1.jpg' },
    { title: 'Talent Flow ', category: 'Web Design', date: '10 Mar. 2024', image: '/assets/img/work-2.jpg' },
    { title: ' Productivity-App', category: 'Web Design', date: '09 Jan. 2025', image: '/assets/img/work-3.jpg' }

  ];
}
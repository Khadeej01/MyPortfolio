import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/project.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
     path: '',
      component: HomeComponent
     },
  {
     path: 'about', 
     component: AboutComponent
     },
  {
     path: 'skills', 
     component: SkillsComponent 
    },
  { 
    path: 'projects',
     component: ProjectsComponent },
  {
     path: 'contact', 
     component: ContactComponent },
  { 
    path: '**', redirectTo: '' }
];
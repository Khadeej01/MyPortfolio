import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true, // Add this
  imports: [RouterLink], // Add RouterLink if used in about.component.html
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {}
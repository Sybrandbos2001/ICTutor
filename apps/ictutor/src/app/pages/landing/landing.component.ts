import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from '../../sections/services/services.component';

@Component({
  selector: 'ictutor-landing',
  standalone: true,
  imports: [CommonModule, ServicesComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {}

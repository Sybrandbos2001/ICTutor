import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '@ictutor/libs';

@Component({
  selector: 'ictutor-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input()
  card!: Card;
}

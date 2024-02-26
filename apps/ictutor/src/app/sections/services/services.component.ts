import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../components/card/card.component';
import { Card } from '@ictutor/libs';

@Component({
  selector: 'ictutor-services',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  cards: Card[] = [
    {
      title: 'Laptop',
      description: 'Test description for Laptop',
      image_url: '/assets/images/card_images/laptop_image.png'
    },
    {
      title: 'Printer',
      description: 'Test description for Printer',
      image_url: '/assets/images/card_images/printer_image.png'
    },
    {
      title: 'Telefoon',
      description: 'Test description for Telefoon',
      image_url: '/assets/images/card_images/phone_image.png'
    },
    {
      title: 'Tablet',
      description: 'Test description for Tablet',
      image_url: '/assets/images/card_images/tablet_image.png'
    },
    {
      title: 'Internet',
      description: 'Test description for Internet',
      image_url: '/assets/images/card_images/internet_image.png'
    },
    {
      title: 'Overig',
      description: 'Test description for Internet',
      image_url: '/assets/images/card_images/other_image.png'
    }
  ];
}

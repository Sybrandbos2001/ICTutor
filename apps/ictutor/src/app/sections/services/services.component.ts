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
      description: 'Ervaart u problemen met uw laptop? Software die niet installeert of bevat hij mogelijk een virus? Wij kunnen u helpen dit op te lossen zodat u weer snel aan de slag kunt.',
      image_url: '/assets/images/card_images/laptop_image.png'
    },
    {
      title: 'Printer',
      description: 'Heeft u printerproblemen? Papierstoringen, slechte afdrukken of connectieissues? Wij lossen het snel voor u op.',
      image_url: '/assets/images/card_images/printer_image.png'
    },
    {
      title: 'Telefoon',
      description: 'Heeft u telefoonproblemen? Apps crashen, batterij snel leeg of connectieproblemen? Wij zorgen dat uw telefoon weer naar behoren werkt.',
      image_url: '/assets/images/card_images/phone_image.png'
    },
    {
      title: 'Tablet',
      description: 'Heeft u problemen met uw tablet? Schermreactie, oplaadissues of app-problemen? Wij helpen graag om uw tablet weer perfect te laten functioneren.',
      image_url: '/assets/images/card_images/tablet_image.png'
    },
    {
      title: 'Internet',
      description: 'Heeft u internet- of wifi-problemen? Trage verbinding, signaaluitval of helemaal geen verbinding? Wij zorgen voor een stabiele en snelle internetervaring.',
      image_url: '/assets/images/card_images/internet_image.png'
    },
    {
      title: 'Overig',
      description: 'Heeft u andere IT-gerelateerde vragen of problemen? Van software-installaties tot hardware-hulp, wij bieden de oplossing om u weer op weg te helpen.',
      image_url: '/assets/images/card_images/other_image.png'
    }
  ];
}

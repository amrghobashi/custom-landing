import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.scss'
})
export class SponsorsComponent {
  sponsors = [
    { image: 'assets/img/logo.jpg' },
    { image: 'assets/img/logo1.png' },
    { image: 'assets/img/logo2.png' },
    // Add more sponsors as needed
  ];
}

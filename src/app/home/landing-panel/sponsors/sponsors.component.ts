import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { SponsorsService } from './sponsors.service';
import { Sponsor } from '../../../models/model';

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.scss'
})
export class SponsorsComponent {

  sponsors!: Sponsor[];

  constructor(private sponsorsService: SponsorsService) {}

  ngOnInit() {
    this.getSpeakers();
  }

  getSpeakers() {
    this.sponsorsService.getSponsorsData().then(data => {
      this.sponsors = data
    })
  }
}

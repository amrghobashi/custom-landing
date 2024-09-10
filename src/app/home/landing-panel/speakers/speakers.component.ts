import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Speaker } from '../../../models/model';
import { SpeakersService } from './speakers.service';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.scss'
})
export class SpeakersComponent {

speakers!: Speaker[];

  constructor(private speakersService: SpeakersService) {}

  ngOnInit() {
    this.getSpeakers();
  }

  getSpeakers() {
    this.speakersService.getSpeakersData().then(data => {
      this.speakers = data
    })
  }
}

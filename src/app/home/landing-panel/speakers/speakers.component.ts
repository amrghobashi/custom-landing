import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [CardModule, CommonModule],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.scss'
})
export class SpeakersComponent {
  speakers = [
    {
        name: 'John Doe',
        title: 'title',
        company: 'company name',
        topic: '"The topic that the speaker is going to present on."',
        imageUrl: 'assets/img/person.png' // Replace with actual image URL
    },
    {
        name: 'Jane Smith',
        title: 'title',
        company: 'company name',
        topic: '"The topic that the speaker is going to present on."',
        imageUrl: 'assets/img/person.png' // Replace with actual image URL
    },
    {
      name: 'John Doe',
      title: 'title',
      company: 'company name',
      topic: '"The topic that the speaker is going to present on."',
      imageUrl: 'assets/img/person.png' // Replace with actual image URL
  },
  {
      name: 'Jane Smith',
      title: 'title',
      company: 'company name',
      topic: '"The topic that the speaker is going to present on."',
      imageUrl: 'assets/img/person.png' // Replace with actual image URL
  },
  {
    name: 'John Doe',
    title: 'title',
    company: 'company name',
    topic: '"The topic that the speaker is going to present on."',
    imageUrl: 'assets/img/person.png' // Replace with actual image URL
},
{
    name: 'Jane Smith',
    title: 'title',
    company: 'company name',
    topic: '"The topic that the speaker is going to present on."',
    imageUrl: 'assets/img/person.png' // Replace with actual image URL
},
{
  name: 'John Doe',
  title: 'title',
  company: 'company name',
  topic: '"The topic that the speaker is going to present on."',
  imageUrl: 'assets/img/person.png' // Replace with actual image URL
},
    // Add more speakers as needed
];
}

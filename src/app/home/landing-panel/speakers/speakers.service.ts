import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {

  constructor() { }

  getSpeakers() {
    return [
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

  getSpeakersData() {
    return Promise.resolve(this.getSpeakers().slice(0, 10));
  }
}

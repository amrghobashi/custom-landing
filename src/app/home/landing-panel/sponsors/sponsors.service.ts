import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SponsorsService {

  constructor() { }

  getSponsors() {
    return [
      { image: 'assets/img/logo.jpg' },
      { image: 'assets/img/logo1.png' },
      { image: 'assets/img/logo2.png' },
      // Add more sponsors as needed
    ];
  }

  getSponsorsData() {
    return Promise.resolve(this.getSponsors().slice(0, 10));
  }
}

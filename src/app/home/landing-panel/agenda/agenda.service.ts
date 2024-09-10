import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor() { }

  getAgenda() {
    return [
      { status: 'Meet & Greet, Nametags, Refreshments', date: '15/10/2020 10:30', color: 'wheat', image: 'game-controller.jpg' },
      { status: 'Meet & Greet, Nametags, Refreshments', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: 'wheat' },
      { status: 'Meet & Greet, Nametags, Refreshments', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: 'wheat' },
      { status: 'Meet & Greet, Nametags, Refreshments', date: '16/10/2020 10:00', icon: 'pi pi-check', color: 'wheat' }
    ]
  }

  getAgendaData() {
    return Promise.resolve(this.getAgenda().slice(0, 5));
  }
}

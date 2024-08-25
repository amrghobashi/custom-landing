import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-agenda',
  standalone: true,
  imports: [TimelineModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.scss'
})
export class AgendaComponent {
  events: EventItem[];

  constructor() {
      this.events = [
          { status: 'Meet & Greet, Nametags, Swag, Refreshments', date: '15/10/2020 10:30', color: 'wheat', image: 'game-controller.jpg' },
          { status: 'Meet & Greet, Nametags, Swag, Refreshments', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: 'wheat' },
          { status: 'Meet & Greet, Nametags, Swag, Refreshments', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: 'wheat' },
          { status: 'Meet & Greet, Nametags, Swag, Refreshments', date: '16/10/2020 10:00', icon: 'pi pi-check', color: 'wheat' }
      ];
  }
}

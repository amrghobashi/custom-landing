import { Component } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { Subscription } from 'rxjs';
import { AgendaService } from './agenda.service';

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
  events!: EventItem[];

  constructor(private agendaService: AgendaService) {}

  ngOnInit() {
    this.getAgenda();
  }

  getAgenda() {
    this.agendaService.getAgendaData().then(data => {
      this.events = data
    })
  }
}

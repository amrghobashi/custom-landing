import { Component } from '@angular/core';
import { HeadLineComponent } from './head-line/head-line.component';
import { EventDateComponent } from './event-date/event-date.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { ActionComponent } from '../action/action.component';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [HeadLineComponent, EventDateComponent, EventDetailComponent, ActionComponent],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss'
})
export class HeaderSectionComponent {

}

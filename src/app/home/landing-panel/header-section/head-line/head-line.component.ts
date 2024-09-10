import { Component } from '@angular/core';

@Component({
  selector: 'app-head-line',
  standalone: true,
  imports: [],
  templateUrl: './head-line.component.html',
  styleUrl: './head-line.component.scss'
})
export class HeadLineComponent {
  title = "Event Title";
}

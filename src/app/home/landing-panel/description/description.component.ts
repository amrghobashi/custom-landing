import { Component } from '@angular/core';
import { DescriptionService } from './description.service';
import { Description } from '../../../models/model';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})
export class DescriptionComponent {

  description!: Description[];
  constructor(private descriptionService: DescriptionService) {}

  ngOnInit() {
    this.getAgenda();
  }

  getAgenda() {
    this.descriptionService.getDescriptionData().then(data => {
      this.description = data
      console.log(data)
    })
  }
}

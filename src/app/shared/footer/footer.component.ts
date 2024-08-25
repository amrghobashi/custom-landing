import { Component } from '@angular/core';
import { ActionComponent } from '../../home/landing-panel/action/action.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ActionComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}

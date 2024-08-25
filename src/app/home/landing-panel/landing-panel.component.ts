import { Component } from '@angular/core';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { AgendaComponent } from './agenda/agenda.component';
import { DescriptionComponent } from './description/description.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { LocationComponent } from './location/location.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-landing-panel',
  standalone: true,
  imports: [HeaderSectionComponent, AgendaComponent, DescriptionComponent, SpeakersComponent, SponsorsComponent,
    LocationComponent, FooterComponent
  ],
  templateUrl: './landing-panel.component.html',
  styleUrl: './landing-panel.component.scss'
})
export class LandingPanelComponent {

}

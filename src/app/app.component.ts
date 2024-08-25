import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPanelComponent } from './home/landing-panel/landing-panel.component';
import { ToolBarComponent } from './shared/tool-bar/tool-bar.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingPanelComponent, ToolBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'custom-landing';
}

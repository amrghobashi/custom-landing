import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [CommonModule, MenuModule, ButtonModule],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent {

  @HostListener('window:scroll', [])
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = offset > 50; // Adjust the scroll offset as needed
  }

  items: MenuItem[] | undefined;
isMenuVisible = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
    ngOnInit() {
        this.items = [
                    {
                        icon: 'pi pi-facebook'
                    },
                    {
                        icon: 'pi pi-instagram'
                    },
                    {
                      icon: 'pi pi-twitter'
                  }
                ]
            
        
    }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { Subscription } from 'rxjs';
import { ActionService } from './action.service';

@Component({
  selector: 'app-action',
  standalone: true,
  imports: [CommonModule, FormsModule, ToastModule],
  templateUrl: './action.component.html',
  styleUrl: './action.component.scss',
  providers: [MessageService]
})
export class ActionComponent {
  subscription!: Subscription;
  value: string = "";
  constructor(private messageService: MessageService, private actionService: ActionService) { }

  submitMail() {
    console.log(this.value)
    if(this.value) {
      this.messageService.clear();
      this.subscription = this.actionService.submitMail(this.value).subscribe(() => {
        this.messageService.add({
          key: 't1', severity: 'success',
          detail: 'Your mail has been sent successfully.'
        });
        this.value = "";
      })
      }
  }
}

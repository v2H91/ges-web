import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  showContactModal = false;
  showTrainingModal = false;

  openContact(event: Event) {
    event.preventDefault();
    this.showContactModal = true;
  }

  openTraining(event: Event) {
    event.preventDefault();
    this.showTrainingModal = true;
  }

  closeModals() {
    this.showContactModal = false;
    this.showTrainingModal = false;
  }

}

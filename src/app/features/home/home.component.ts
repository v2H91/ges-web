import { Component } from '@angular/core';
import { ServicesSectionComponent } from "../services-section/services-section.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ServicesSectionComponent // 2. Khai báo nó ở đây để HTML có thể hiểu thẻ <app-services-section>
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}

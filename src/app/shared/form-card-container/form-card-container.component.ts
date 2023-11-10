import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-card-container',
  templateUrl: './form-card-container.component.html',
  styleUrls: ['./form-card-container.component.scss'],
})
export class FormCardContainerComponent {
  @Input() formHeading: String;
}

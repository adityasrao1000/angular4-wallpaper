import { Component } from '@angular/core';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contacts',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  submitted = false;

  onSubmit() { this.submitted = true; }
}

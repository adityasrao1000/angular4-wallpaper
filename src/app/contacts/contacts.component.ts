import { Component } from '@angular/core';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  submitted = false;

  onSubmit() { this.submitted = true; }
}

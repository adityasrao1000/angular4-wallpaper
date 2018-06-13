import { Component } from '@angular/core';
@Component({
  selector: 'contacts',
  templateUrl: './contacts.html',
  styleUrls: ['./contacts.css']
})
export class ContactsComponent {

  submitted = false;

  onSubmit() { this.submitted = true; }
}

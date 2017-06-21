import { Component } from '@angular/core';
@Component({
  selector: 'contacts',
  templateUrl: './contacts.html',
  styleUrls: ['./contacts.css']
})
export class Contacts {
  
  submitted = false;
  
  onSubmit() { this.submitted = true; }
}

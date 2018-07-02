import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['register.component.scss']
})

export class RegisterComponent {
  myform1: FormGroup;
  myform2: FormGroup;
  name: FormControl;
  email: FormControl;
  password: FormControl;
  reenterpassword: FormControl;

  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.reenterpassword = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  createForm() {
    this.myform1 = new FormGroup({
      name: this.name,
      email: this.email
    });
    this.myform2 = new FormGroup({
      password: this.password,
      reenterpassword: this.reenterpassword
    });
  }
}

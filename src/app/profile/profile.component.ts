import { Component } from '@angular/core';
import { UserCredentialsService } from '../utils/user-credentials.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['profile.component.scss']
})

export class ProfileComponent {

  constructor(public loginCredentials: UserCredentialsService) { }
}

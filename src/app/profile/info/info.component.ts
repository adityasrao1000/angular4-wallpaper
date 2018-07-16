import { Component } from '@angular/core';
import { UserCredentialsService } from '../../utils/user-credentials.service';
import { SocialUser } from 'ng4-social-login';

@Component({
  templateUrl: './info.component.html',
  styleUrls: ['info.component.scss']
})

export class InfoComponent {
  public user: SocialUser;
  constructor(private info: UserCredentialsService) {
    this.user = info.user;
  }
}

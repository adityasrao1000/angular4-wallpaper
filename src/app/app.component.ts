import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GoogleLoginProvider, SocialUser, AuthService } from 'ng4-social-login';
import { ValidateOauthService } from './utils/validate-oauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
}


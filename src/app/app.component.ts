import { Component, OnInit, AfterViewInit, HostListener, ElementRef } from '@angular/core';
import { GoogleLoginProvider, SocialUser, AuthService } from 'ng4-social-login';
import { ValidateOauthService } from './utils/validate-oauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  display: string;

  constructor() {
    this.display = 'none';
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

  @HostListener('window:scroll') scroll() {
    if (pageYOffset > 150) {
      this.display = 'block';
    } else {
      this.display = 'none';
    }
  }
}


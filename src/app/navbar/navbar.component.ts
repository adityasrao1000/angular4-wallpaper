import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { AuthService, GoogleLoginProvider, SocialUser } from 'ng4-social-login';
import { ValidateOauthService } from '../utils/validate-oauth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.scss']
})

export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild(ModalComponent) modal: ModalComponent;

  links: string[] = ['home', 'categories', 'contacts', 'latest'];
  visible = false;
  ser = '';
  ser1 = '';
  ModalComponent: any;
  protected user: SocialUser;
  loggedIn: boolean;

  show() {
    this.visible = !this.visible;
  }

  open(): void {
    this.modal.show = true;
  }

  closeSearch() {
    this.ser = '';
    this.ser1 = '';
  }

  constructor(private authService: AuthService, private oauth: ValidateOauthService, private route: ActivatedRoute) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => {
      if (localStorage) {
        if (this.user.token) {
          localStorage.setItem('token', JSON.stringify({ provider: 'google', token: this.user.token }));
        }
      } else {
        window.alert('There\'s some issue with your local storage, please upgrage your browser if this feature is not available');
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
  }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  ngAfterViewInit() {
    if (localStorage.getItem('token') !== null) {
      const token = JSON.parse(localStorage.getItem('token')).token;
      if (token) {
        this.oauth.validate(token)
          .subscribe(result => this.signInWithGoogle(), err => console.log(err));
      }
    }
  }
}

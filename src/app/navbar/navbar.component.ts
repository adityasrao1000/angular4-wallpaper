import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ActivatedRoute } from '@angular/router';
import { UserCredentialsService } from '../utils/user-credentials.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.scss']
})

export class NavbarComponent {
  @ViewChild(ModalComponent) modal: ModalComponent;

  links: string[] = ['home', 'categories', 'contacts', 'latest'];
  visible = false;
  ModalComponent: any;

  show() {
    this.visible = !this.visible;
  }

  open(): void {
    this.modal.show = true;
  }

  constructor(
    private route: ActivatedRoute,
    public loginCredentials: UserCredentialsService) { }

  logout() {
    localStorage.removeItem('token');
    this.loginCredentials.loggedIn = false;
  }
}

import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.scss']
})

export class NavbarComponent {
  links: string[] = ['home', 'categories', 'contacts', 'latest'];
  visible = false;
  ser = '';
  ser1 = '';

  show() {
    this.visible = !this.visible;
  }
}

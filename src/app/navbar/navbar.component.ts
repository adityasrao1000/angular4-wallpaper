import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../app.component.scss', 'navbar.component.scss']
})

export class NavbarComponent {
  links: string[] = ['home', 'categories', 'contacts', 'latest'];
  visible = false;

  show() {
    this.visible = !this.visible;
  }
}

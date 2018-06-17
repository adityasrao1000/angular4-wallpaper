import { Component } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../app.component.scss', 'navbar.component.scss']
})

export class NavbarComponent {
  links: string[] = [];
  visible = false;

  show() {
    this.visible = !this.visible;
  }

  search(search) {
    // clear all values
    this.links = [];

    if (search.startsWith('h')) {
      this.links.push('home');
    }

    if (search.startsWith('c')) {

      this.links.push('categories');
      this.links.push('contacts');

      if (search.startsWith('co')) {
        this.links = [];
        this.links.push('contacts');
      }
      if (search.startsWith('ca')) {
        this.links = [];
        this.links.push('categories');
      }
    }

    if (search.startsWith('l')) {
      this.links.push('latest');
    }
  }

  clear() {
    this.links = [];
  }
}


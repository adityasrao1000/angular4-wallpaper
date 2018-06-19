import { Component } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'test-app',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css', '../app.component.scss'],
})


export class CategoriesComponent {

  title = 'Categories';
  categories = [];
  index = 0;
  allcategories = [
    { title: 'Charlotte', url: '/categories/charlotte', img: './assets/img/charlotte.jpg' },
    { title: 'Code Geass', url: '/categories/codegeass', img: './assets/img/codegeass.jpg' },
    { title: 'deathnote', url: '/categories/deathnote', img: './assets/img/deathnote.jpg' },
    { title: 'black jack', url: '/categories/blackjack', img: './assets/img/blackjack.jpg' },
    { title: 'bleach', url: '/categories/bleach', img: './assets/img/bleach.jpg' },
    { title: 'durarara', url: '/categories/durarara', img: './assets/img/durarara.jpg' },
    { title: 'naruto', url: '/categories/naruto', img: './assets/img/naruto.jpg' },
    { title: 'onepiece', url: '/categories/onepiece', img: './assets/img/onepiece.png' },
    { title: 'monster', url: '/categories/monster', img: './assets/img/monster.jpg' },
    { title: 'noragami', url: '/categories/noragami', img: './assets/img/noragami.jpg' },
    { title: 'vampire knight', url: '/categories/vampireknight', img: './assets/img/vampireknight.png' },
    { title: 'ghost in shell', url: '/categories/ghostinshell', img: './assets/img/ghostinshell.jpg' },
    { title: 'gundam seed', url: '/categories/gundamseed', img: './assets/img/gundamseed.jpg' },
    { title: '.hack', url: '/categories/hack', img: './assets/img/hack.jpg' },
    { title: 'inuyasha', url: '/categories/inuyasha', img: './assets/img/inuyasha.jpg' },
    { title: 'trigun', url: '/categories/trigun', img: './assets/img/trigun.jpg' },
    { title: 'aria', url: '/categories/aria', img: './assets/img/aria.jpg' },
    { title: 'vampire knight', url: '/categories/vampireknight', img: './assets/img/vampireknight.png' }
  ];

  constructor() {
    for (this.index = 0; this.index < 5; this.index++) {
      this.categories.push(this.allcategories[this.index]);
    }
  }

  onScroll() {
    let i = 0;
    if (this.index === this.allcategories.length) { this.index = 0; }
    while (this.index < this.allcategories.length) {
      this.categories.push(this.allcategories[this.index]);
      this.index++;
      i++;
      if (i === 4) {
        break;
      }
    }
  }
}

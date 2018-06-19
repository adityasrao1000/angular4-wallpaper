import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'img-scroller',
  templateUrl: './image-scroller.component.html',
  styleUrls: ['./image-scroller.component.scss']
})

export class ImgScrollerComponent {
  path = './assets/img/';
  imgs: string[] = ['photo01.png', 'photo02.jpg', 'photo03.jpg', 'photo04.jpg', 'photo05.jpg', 'photo06.jpg',
    'photo07.jpeg', 'photo08.jpg', 'photo09.png', 'photo10.jpg'];
}

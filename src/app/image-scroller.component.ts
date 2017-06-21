import { Component } from '@angular/core';

@Component({
  selector: 'img-scroller',
  templateUrl: './img-scroller.html',
  styleUrls: ['./scrollbar.css']
})

export class ImgScroller { 

 imgs:string[] = ['photo01.png','photo02.jpg','photo03.jpg','photo04.jpg','photo05.jpg','photo06.jpg','photo07.jpeg','photo08.jpg','photo09.png','photo10.jpg'];
 path:string = './assets/img/';
}
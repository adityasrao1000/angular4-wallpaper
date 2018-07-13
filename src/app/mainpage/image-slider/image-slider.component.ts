import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'img-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
  providers: [NgbCarouselConfig]
})

export class ImageSliderComponent {
  images: Array<string> = ['https://stmed.net/sites/default/files/anime-wallpapers-25720-6452473.jpg',
    'https://i.imgur.com/drqfNuf.jpg',
    'http://nd06.jxs.cz/293/972/4123084565_101521458_o2.jpg'];

  constructor(private config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    this.config.interval = 5000;
    this.config.wrap = true;
    this.config.keyboard = false;
  }
}

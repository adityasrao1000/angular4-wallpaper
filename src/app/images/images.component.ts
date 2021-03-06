import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Wallpaper } from '../wallpaper/wallpaper';
import { ImageService } from './image.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})

export class ImagesComponent implements OnInit, OnDestroy {

  private router: Router;
  id: string;
  private sub: any;
  wallpaper: Wallpaper[] = [];
  errorMessage: string;
  src: string;
  imglink: string;
  display = 'none';

  constructor(private imageService: ImageService, private route: ActivatedRoute, @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      this.imageService.getImagesWithObservable(params.get('id'))
        .then(result => this.wallpaper = result, error => console.log(error));
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  show(link): void {

    this.display = 'block';
    this.imglink = link;
    // scroll to top of page
    this.document.getElementById('wallpaper').scrollIntoView();
  }

}

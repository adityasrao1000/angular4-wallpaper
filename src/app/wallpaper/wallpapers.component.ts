import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

@Component({
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.css']
})

@Injectable()
export class WallpapersComponent implements OnInit, OnDestroy {
  id: string;
  private sub: any;
  private router: Router;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Component({
  selector: 'wallpaper',
  templateUrl: './wallpaper.html',
  styleUrls: ['./wallpaper.css']
})

@Injectable()
export class Wallpapers implements OnInit, OnDestroy { 
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

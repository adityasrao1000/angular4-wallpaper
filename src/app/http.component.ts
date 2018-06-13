import {Component, OnInit, Inject, OnDestroy  } from '@angular/core';
import { Wallpaper } from './wallpaper';
import { HttpService } from './http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
    selector: 'http',
    templateUrl: './http.html',
    styleUrls: ['./scrollbar.css', './http.css']
})

export class Http1Component implements OnInit, OnDestroy {

   private router: Router;
   id: string;
   private sub: any;
   observableBooks: Wallpaper[] = [];
   books: Wallpaper[];
   errorMessage: string;
   src: string;
   imglink: string;
   display = 'none';

   constructor(private bookService: HttpService, private route: ActivatedRoute, @Inject(DOCUMENT) private document: Document) { }

   ngOnInit(): void {
      this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
      });

     this.bookService.getBooksWithObservable(this.id)
     .subscribe(result => this.books = result);
   }

   ngOnDestroy() {
    this.sub.unsubscribe();
  }

  show(link): void {

  if (this.display === 'none') {
  this.display = 'block';
  }
   this.imglink = link;

   // scroll to top of page
   this.document.body.scrollTop = 30;
  }

}

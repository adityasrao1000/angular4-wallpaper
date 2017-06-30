import {Component, OnInit, Inject  }                  from '@angular/core';
import { Http, Response, Headers, RequestOptions }    from '@angular/http';
import { Wallpaper }                                  from  './wallpaper';
import { HttpService }                                from  './http.service';
import { Router, ActivatedRoute }                     from '@angular/router';
import { DOCUMENT }                                   from '@angular/platform-browser';
import { Observable }                                 from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

@Component({
    selector: 'http',
    templateUrl: './http.html',
    styleUrls: ['./scrollbar.css','./http.css']
})

export class Http1 implements OnInit {
 
   private router: Router;
   id: string;
   private sub: any;
   observableBooks: Observable<Wallpaper[]>;
   books: Wallpaper[];
   errorMessage: string;
   src: string;
   imglink: string;
   display = "none";
   
   constructor(private bookService: HttpService, private route: ActivatedRoute, @Inject(DOCUMENT) private document: Document) { }
  
   ngOnInit(): void {
      this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];       
      });

     this.observableBooks = this.bookService.getBooksWithObservable(this.id);
     this.observableBooks.subscribe(books => this.books = books,error =>  this.errorMessage = <any>error);
   }

   ngOnDestroy() {
    this.sub.unsubscribe();
  }

  show(link):void{
  
  if(this.display=="none"){
  this.display = "block";
  }
   this.imglink= link;
   
   //scroll to top of page
   this.document.body.scrollTop = 30;
  }
  
}
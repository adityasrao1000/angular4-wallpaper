import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent }  from './app.component';
import { Navbar }  from './app.navbar';
import { ImgSlider }  from './app.imgslider';
import { ImgScroller }  from './image-scroller.component';
import { Article }  from './article.component';
import { Features }  from './features.component';
import { video, SafePipe }  from './video.component';
import { Mainpage }  from './mainpage.component';
import { AppRoutingModule, routes }     from './app-routing.module';
import { Test } from './test.component';
import { Wallpapers } from './wallpapers.component';
import { Http1 } from './http.component';
import { Contacts } from './contacts.component';
import { NotFound } from './pagenotfound.component';
import { HttpModule }    from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { HttpService } from './http.service';

@NgModule({
  imports: [
    BrowserModule,
    InfiniteScrollModule, 
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AppComponent,
	Navbar,
    ImgSlider,
	ImgScroller,
	Article,
	Features,
	video,
  Mainpage,
  Test,
  Wallpapers,
  Http1,
  Contacts,
  NotFound,
	 SafePipe 
  ],
  providers: [
        HttpService
  ],
  exports: [ RouterModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
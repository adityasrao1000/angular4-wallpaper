import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Navbar } from './navbar';
import { ImgSliderComponent } from './app.imgslider';
import { ImgScroller } from './image-scroller.component';
import { ArticleComponent } from './article.component';
import { FeaturesComponent } from './features.component';
import { video, SafePipe } from './video.component';
import { MainpageComponent } from './mainpage.component';
import { routes } from './app-routing.module';
import { TestComponent } from './test.component';
import { Wallpapers } from './wallpapers.component';
import { Http1Component } from './http.component';
import { ContactsComponent } from './contacts.component';
import { NotFoundComponent } from './pagenotfound.component';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
   AppComponent,
   Navbar,
   ImgSliderComponent,
   ImgScroller,
   ArticleComponent,
   FeaturesComponent,
   video,
   MainpageComponent,
   TestComponent,
   Wallpapers,
   Http1Component,
   ContactsComponent,
   NotFoundComponent,
   SafePipe
  ],
  providers: [
        HttpService
  ],
  exports: [ RouterModule ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

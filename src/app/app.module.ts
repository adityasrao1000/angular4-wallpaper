import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar';
import { ImgSliderComponent } from './app.imgslider';
import { ImgScrollerComponent } from './image-scroller.component';
import { ArticleComponent } from './article.component';
import { FeaturesComponent } from './features.component';
import { VideoComponent, SafePipe } from './video.component';
import { MainpageComponent } from './mainpage.component';
import { routes } from './app-routing.module';
import { TestComponent } from './test.component';
import { WallpapersComponent } from './wallpapers.component';
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
   NavbarComponent,
   ImgSliderComponent,
   ImgScrollerComponent,
   ArticleComponent,
   FeaturesComponent,
   VideoComponent,
   MainpageComponent,
   TestComponent,
   WallpapersComponent,
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

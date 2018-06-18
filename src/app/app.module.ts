import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ImgScrollerComponent } from './image-scroller/image-scroller.component';
import { ArticleComponent } from './article/article.component';
import { FeaturesComponent } from './features/features.component';
import { VideoComponent, SafePipe } from './video/video.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { routes } from './app-routing.module';
import { WallpapersComponent } from './wallpaper/wallpapers.component';
import { Http1Component } from './http/http.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpService } from './http/http.service';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SearchPipe } from './navbar/search.pipe';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    InfiniteScrollModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageSliderComponent,
    ImgScrollerComponent,
    ArticleComponent,
    FeaturesComponent,
    VideoComponent,
    MainpageComponent,
    CategoriesComponent,
    WallpapersComponent,
    Http1Component,
    ContactsComponent,
    NotFoundComponent,
    SafePipe,
    SearchPipe,
    FooterComponent
  ],
  providers: [
    HttpService
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleComponent } from './article/article.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { routes } from './app-routing.module';
import { WallpapersComponent } from './wallpaper/wallpapers.component';
import { ImagesComponent } from './images/images.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ImageService } from './images/image.service';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchPipe } from './navbar/search.pipe';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { ImageSliderComponent } from './mainpage/image-slider/image-slider.component';
import { ImgScrollerComponent } from './mainpage/image-scroller/image-scroller.component';
import { VideoComponent, SafePipe } from './mainpage/video/video.component';
import { FeaturesComponent } from './mainpage/features/features.component';

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
    ImagesComponent,
    ContactsComponent,
    NotFoundComponent,
    SafePipe,
    SearchPipe,
    FooterComponent
  ],
  providers: [
    ImageService
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

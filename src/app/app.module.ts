import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleComponent } from './article/article.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AppRoutingModule } from './app-routing.module';
import { WallpapersComponent } from './wallpaper/wallpapers.component';
import { ImagesComponent } from './images/images.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './pagenotfound/pagenotfound.component';
import { ImageService } from './images/image.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchPipe } from './navbar/search.pipe';
import { FooterComponent } from './footer/footer.component';
import { CategoriesComponent } from './categories/categories.component';
import { ImageSliderComponent } from './mainpage/image-slider/image-slider.component';
import { ImgScrollerComponent } from './mainpage/image-scroller/image-scroller.component';
import { VideoComponent, SafePipe } from './mainpage/video/video.component';
import { FeaturesComponent } from './mainpage/features/features.component';
import { ModalComponent } from './modal/modal.component';
import { RegisterComponent } from './register/register.component';
import { TokenInterceptor } from './utils/token-interceptor.service';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  // FacebookLoginProvider
} from 'ng4-social-login';
import { ValidateOauthService } from './utils/validate-oauth.service';
import { UserCredentialsService } from './utils/user-credentials.service';
import { CommunitiesComponent } from './communities/communities.component';
import { FeaturedComponent } from './communities/featured/featured.component';
import { JoinedComponent } from './communities/joined/joined.component';

const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('335091079574-vtlsr39j241l0tpn5rvmmvp2dksanhbs.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('1797615520327720')
  }
], false);

export function provideConfig() {
  return CONFIG;
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    NgbModule.forRoot()
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
    AboutComponent,
    NotFoundComponent,
    SafePipe,
    SearchPipe,
    FooterComponent,
    ModalComponent,
    RegisterComponent,
    CommunitiesComponent,
    FeaturedComponent,
    JoinedComponent
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    ValidateOauthService,
    ImageService,
    UserCredentialsService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

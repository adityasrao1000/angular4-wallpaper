import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { WallpapersComponent } from './wallpaper/wallpapers.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './pagenotfound/pagenotfound.component';
import { CategoriesComponent } from './categories/categories.component';
import { RegisterComponent } from './register/register.component';
import { UserCredentialsService } from './utils/user-credentials.service';
import { NgModule } from '@angular/core';
import { CommunitiesComponent } from './communities/communities.component';
import { FeaturedComponent } from './communities/featured/featured.component';
import { JoinedComponent } from './communities/joined/joined.component';
import { LatestComponent } from './communities/latest/latest.component';
import { CommunityComponent } from './community/community.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainpageComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:id', component: WallpapersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'profile', loadChildren: './profile/profile.module#ProfileModule', canActivate: [UserCredentialsService]
  },
  { path: 'community/:id', component: CommunityComponent },
  {
    path: 'communities', component: CommunitiesComponent,
    children: [
      { path: '', redirectTo: '/communities/featured', pathMatch: 'full' },
      { path: 'featured', component: FeaturedComponent },
      { path: 'joined', component: JoinedComponent },
      { path: 'latest', component: LatestComponent }
    ]
  },
  { component: NotFoundComponent, path: '**' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }

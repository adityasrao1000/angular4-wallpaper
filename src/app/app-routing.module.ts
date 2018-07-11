import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { WallpapersComponent } from './wallpaper/wallpapers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './pagenotfound/pagenotfound.component';
import { CategoriesComponent } from './categories/categories.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserCredentialsService } from './utils/user-credentials.service';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainpageComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:id', component: WallpapersComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'profile', loadChildren: './profile/profile.module#ProfileModule', canActivate: [UserCredentialsService] },
  { component: NotFoundComponent, path: '**' }
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

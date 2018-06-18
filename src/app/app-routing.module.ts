import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { WallpapersComponent } from './wallpaper/wallpapers.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './pagenotfound/pagenotfound.component';
import { CategoriesComponent } from './categories/categories.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainpageComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:id', component: WallpapersComponent },
  { path: 'contacts', component: ContactsComponent },
  { component: NotFoundComponent, path: '**' }
];

export class AppRoutingModule { }

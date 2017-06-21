import { RouterModule, Routes }  from '@angular/router';
import { Mainpage }              from './mainpage.component';
import { Test }                  from './test.component';
import { Wallpapers }            from './wallpapers.component';
import { Contacts }              from './contacts.component';
import { NotFound }              from './pagenotfound.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: Mainpage },
  { path: 'categories', component: Test },
  { path: 'categories/:id', component: Wallpapers },
  { path: 'contacts', component: Contacts },
  { component: NotFound, path: "**" }
];

export class AppRoutingModule {}

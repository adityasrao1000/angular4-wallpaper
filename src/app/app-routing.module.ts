import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage.component';
import { TestComponent } from './test.component';
import { Wallpapers } from './wallpapers.component';
import { ContactsComponent } from './contacts.component';
import { NotFoundComponent } from './pagenotfound.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: MainpageComponent },
  { path: 'categories', component: TestComponent },
  { path: 'categories/:id', component: Wallpapers },
  { path: 'contacts', component: ContactsComponent },
  { component: NotFoundComponent, path: '**' }
];

export class AppRoutingModule {}

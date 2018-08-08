import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { routes } from './app-routing.module';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NotFoundComponent } from './pagenotfound/pagenotfound.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { WallpapersComponent } from './wallpaper/wallpapers.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule } from 'ng4-social-login';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserCredentialsService } from './utils/user-credentials.service';
import { CommunitiesComponent } from './communities/communities.component';

describe('Router: App', () => {

    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                SocialLoginModule,
                NgbModule,
                RouterTestingModule.withRoutes(routes)],
            declarations: [
                MainpageComponent,
                WallpapersComponent,
                AboutComponent,
                NotFoundComponent,
                CategoriesComponent,
                RegisterComponent,
                ProfileComponent,
                AppComponent,
                CommunitiesComponent
            ],
            providers: [UserCredentialsService],
            schemas: [NO_ERRORS_SCHEMA]
        });

        router = TestBed.get(Router);
        location = TestBed.get(Location);

        fixture = TestBed.createComponent(AppComponent);
    });

    it('fakeAsync works', fakeAsync(() => {
        const promise = new Promise((resolve) => {
            setTimeout(resolve, 10);
        });
        let done = false;
        promise.then(() => done = true);
        tick(50);
        expect(done).toBeTruthy();
    }));

    it('navigate to "" redirects you to /home', fakeAsync(() => {
        router.navigate(['']);
        tick(50);
        expect(location.path()).toBe('/home');
    }));

    it('navigate to /categories redirects you to /categories', fakeAsync(() => {
        router.navigate(['/categories']);
        tick(50);
        expect(location.path()).toBe('/categories');
    }));
});

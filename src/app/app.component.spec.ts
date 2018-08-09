import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './navbar/search.pipe';
import { AuthService, AuthServiceConfig, GoogleLoginProvider } from 'ng4-social-login';
import { ValidateOauthService } from './utils/validate-oauth.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRouteStub } from './activated-router-stub';
import { Router, ActivatedRoute } from '@angular/router';
import { UserCredentialsService } from './utils/user-credentials.service';

const CONFIG = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('335091079574-vtlsr39j241l0tpn5rvmmvp2dksanhbs.apps.googleusercontent.com')
  }
], false);

export function provideConfig() {
  return CONFIG;
}

describe('Component: AppComponent', () => {
  let activatedRoute: ActivatedRouteStub;
  beforeEach(async(() => {
    activatedRoute = new ActivatedRouteStub();
    activatedRoute.setParamMap({ id: 'abcdef' });

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        SearchPipe
      ],
      providers: [AuthService,
        {
          provide: AuthServiceConfig,
          useFactory: provideConfig
        },
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        },
        { provide: ActivatedRoute, useValue: { paramMap: activatedRoute.paramMap } },
        ValidateOauthService,
        UserCredentialsService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('scrollTop function coverage', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.scrollTop()).toBeUndefined();
  }));

  it('display value should be none', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    app.scroll();
    fixture.detectChanges();
    expect(app.display).toBe('none');
  }));

  it('display value should be block', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    pageYOffset = 151;
    app.scroll();
    fixture.detectChanges();
    expect(app.display).toBe('block');
  }));
});

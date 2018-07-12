import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { SearchPipe } from './search.pipe';
import { ModalComponent } from '../modal/modal.component';
import { AuthServiceConfig, GoogleLoginProvider, AuthService } from 'ng4-social-login';
import { ValidateOauthService } from '../utils/validate-oauth.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRouteStub } from '../activated-router-stub';
import { Router, ActivatedRoute } from '@angular/router';
import { UserCredentialsService } from '../utils/user-credentials.service';

const CONFIG = new AuthServiceConfig([
    {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('335091079574-vtlsr39j241l0tpn5rvmmvp2dksanhbs.apps.googleusercontent.com')
    }
], false);

export function provideConfig() {
    return CONFIG;
}

describe('Component: NavbarComponent', () => {

    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;
    let activatedRoute: ActivatedRouteStub;

    beforeEach(async () => {
        activatedRoute = new ActivatedRouteStub();
        activatedRoute.setParamMap({ id: 'abcdef' });
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [NavbarComponent, SearchPipe],
            providers: [AuthService,
                {
                    provide: Router,
                    useClass: class { navigate = jasmine.createSpy('navigate'); }
                },
                { provide: ActivatedRoute, useValue: { paramMap: activatedRoute.paramMap } },
                {
                    provide: AuthServiceConfig,
                    useFactory: provideConfig
                },
                ValidateOauthService,
                UserCredentialsService],
            schemas: [NO_ERRORS_SCHEMA]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(NavbarComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
        component.modal = new ModalComponent();

    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('visible should be true', () => {
        component.show();
        expect(component.visible).toBe(true);
    });

    it('should be undefined', () => {
        expect(component.open()).toBeUndefined();
    });
    it('logout should be called', () => {
        fixture.whenStable().then(() => {
            window.localStorage.setItem('token', JSON.stringify({ type: 'google', token: 'asadfgg' }));
            expect(component.logout()).toHaveBeenCalled();
        });
    });
});

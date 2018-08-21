import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { JoinedComponent } from './joined.component';
import { UserCredentialsService } from '../../utils/user-credentials.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService, AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider } from 'ng4-social-login';
import { ValidateOauthService } from '../../utils/validate-oauth.service';

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

describe('Component: JoinedComponent', () => {

    let component: JoinedComponent;
    let fixture: ComponentFixture<JoinedComponent>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            imports: [FormsModule, HttpClientModule],
            declarations: [JoinedComponent],
            providers: [UserCredentialsService, AuthService,
                {
                    provide: AuthServiceConfig,
                    useFactory: provideConfig
                },
                ValidateOauthService]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(JoinedComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});

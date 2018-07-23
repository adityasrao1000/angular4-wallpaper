import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { InfoComponent } from './info.component';
import { UserCredentialsService } from '../../utils/user-credentials.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceConfig, GoogleLoginProvider, AuthService } from 'ng4-social-login';
import { ValidateOauthService } from '../../utils/validate-oauth.service';

const CONFIG = new AuthServiceConfig([
    {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('335091079574-vtlsr39j241l0tpn5rvmmvp2dksanhbs.apps.googleusercontent.com')
    }
], false);

export function provideConfig() {
    return CONFIG;
}
describe('Component: InfoComponent', () => {

    let component: InfoComponent;
    let fixture: ComponentFixture<InfoComponent>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [InfoComponent],
            providers: [
                UserCredentialsService,
                {
                    provide: AuthServiceConfig,
                    useFactory: provideConfig
                },
                AuthService,
                ValidateOauthService]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(InfoComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});

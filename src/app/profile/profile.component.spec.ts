import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { UserCredentialsService } from '../utils/user-credentials.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService, GoogleLoginProvider, AuthServiceConfig } from 'ng4-social-login';
import { ValidateOauthService } from '../utils/validate-oauth.service';

const CONFIG = new AuthServiceConfig([
    {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('335091079574-vtlsr39j241l0tpn5rvmmvp2dksanhbs.apps.googleusercontent.com')
    }
], false);

export function provideConfig() {
    return CONFIG;
}
describe('Component: ProfileComponent', () => {

    let component: ProfileComponent;
    let fixture: ComponentFixture<ProfileComponent>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            imports: [HighchartsChartModule, HttpClientModule],
            declarations: [ProfileComponent],
            providers: [UserCredentialsService, AuthService, {
                provide: AuthServiceConfig,
                useFactory: provideConfig
            },
                ValidateOauthService],
            schemas: [NO_ERRORS_SCHEMA]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(ProfileComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});

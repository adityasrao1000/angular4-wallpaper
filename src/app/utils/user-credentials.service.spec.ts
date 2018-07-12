import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserCredentialsService } from './user-credentials.service';
import { AuthService, AuthServiceConfig, GoogleLoginProvider } from 'ng4-social-login';
import { ValidateOauthService } from './validate-oauth.service';

const CONFIG = new AuthServiceConfig([
    {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('335091079574-vtlsr39j241l0tpn5rvmmvp2dksanhbs.apps.googleusercontent.com')
    }
], false);

export function provideConfig() {
    return CONFIG;
}
describe('Service : UserCredentialsService', () => {
    let service;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [UserCredentialsService, AuthService, {
            provide: AuthServiceConfig,
            useFactory: provideConfig
        },
            ValidateOauthService]
    }));

    beforeEach(inject([UserCredentialsService], s => {
        service = s;
        window.localStorage.setItem('token', JSON.stringify({ provider: 'google', token: 'sssssde' }));
    }));

    it('should create service', () => {
        expect(service).toBeTruthy();
    });
    it('should be false', () => {
        expect(service.canActivate()).toEqual(false);
    });

    it('should be undefined', () => {
        expect(service.login()).toBeUndefined();
    });

    it('should be undefined', () => {
        expect(service.signInWithGoogle()).toBeUndefined();
    });
});

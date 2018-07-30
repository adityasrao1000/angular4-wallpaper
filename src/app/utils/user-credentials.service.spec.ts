import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserCredentialsService } from './user-credentials.service';
import { AuthService, AuthServiceConfig, GoogleLoginProvider, SocialUser } from 'ng4-social-login';
import { ValidateOauthService } from './validate-oauth.service';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { throwError } from 'rxjs';

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

    afterEach(() => {
        service = null;
        window.localStorage.removeItem('token');
    });

    it('should create service', () => {
        expect(service).toBeTruthy();
    });

    it('should be false', () => {
        expect(service.canActivate()).toEqual(false);
    });

    it('should be undefined', inject([ValidateOauthService], v => {
        spyOn(v, 'validate').and.returnValue(of([1, 2]));
        expect(service.login()).toBeUndefined();
    }));

    it('should be undefined', inject([ValidateOauthService], v => {
        spyOn(v, 'validate').and.returnValue(_throw('error'));
        expect(service.login()).toBeUndefined();
    }));

    it('should be undefined', inject([AuthService], s => {
        const spy = spyOn(s, 'signIn').and.returnValue(Promise.resolve(true));
        service.user = new SocialUser();
        service.user.token = true;
        expect(service.signInWithGoogle()).toBeUndefined();
    }));

    it('should be undefined', inject([AuthService], s => {
        const spy = spyOn(s, 'signIn').and.returnValue(Promise.resolve(true));
        service.user = new SocialUser();
        service.user.token = true;
        expect(service.signInWithFB()).toBeUndefined();
    }));

    it('should be undefined', inject([ValidateOauthService], v => {
        window.localStorage.setItem('token', JSON.stringify({ provider: 'facebook', token: 'sssssde' }));
        spyOn(v, 'validateFB').and.returnValue(of([1, 2]));
        expect(service.login()).toBeUndefined();
    }));

    it('should be undefined', inject([ValidateOauthService], v => {
        window.localStorage.setItem('token', JSON.stringify({ provider: 'facebook', token: 'sssssde' }));
        spyOn(v, 'validateFB').and.returnValue(_throw('error'));
        expect(service.login()).toBeUndefined();
    }));

});

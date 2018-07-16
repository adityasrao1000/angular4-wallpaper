import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SocialUser, AuthService, GoogleLoginProvider } from 'ng4-social-login';
import { CanActivate } from '@angular/router';
import { ValidateOauthService } from './validate-oauth.service';

@Injectable()
export class UserCredentialsService implements CanActivate {

    public user: SocialUser;
    loggedIn: boolean;

    constructor(private http: HttpClient, private authService: AuthService, private oauth: ValidateOauthService) {
        this.loggedIn = false;
        this.init();
        this.login();
    }
    canActivate() {
        return this.loggedIn;
    }

    init(): void {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
        });
    }
    signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(() => {
            if (localStorage) {
                if (this.user.token) {
                    localStorage.setItem('token', JSON.stringify({ provider: 'google', token: this.user.token }));
                }
            }
        });
    }
    login() {
        if (localStorage.getItem('token') !== null) {
            const token = JSON.parse(localStorage.getItem('token')).token;
            if (token) {
                this.oauth.validate(token)
                    .subscribe(result => this.signInWithGoogle(), err => console.log(err));
            }
        }
    }
}

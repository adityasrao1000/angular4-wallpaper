import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ValidateOauthService {

  constructor(private http: HttpClient) {}

  validate(token: string): Observable<JSON> {
    return this.http.get<JSON>(`https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`);
  }
}

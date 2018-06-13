import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Wallpaper } from '../wallpaper/wallpaper';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class HttpService {


    constructor(private http: HttpClient) {}
    getBooksWithObservable(id): Observable<Wallpaper[]> {

        return this.http.get(`./assets/${id}.json`)
        .pipe(error => Observable.throw('error'));
      }

}

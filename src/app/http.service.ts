import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Http1 } from './http.component';
import { Wallpaper } from './wallpaper';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class HttpService {


    constructor(private http: Http) {}
    getBooksWithObservable(id): Observable<Wallpaper[]> {
        return this.http.get(`./assets/${id}.json`)
                .pipe(this.extractData)
                .catch(this.handleErrorObservable);
    }

    private extractData(res: Response) {
        const body = res.json();
        return body;
    }
    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
    private handleErrorPromise (error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}

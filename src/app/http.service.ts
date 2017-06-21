import { Injectable}                   from '@angular/core';
import { Http, Response }              from '@angular/http';
import { Observable }                  from 'rxjs';
import { Http1 }                       from './http.component';
import { Wallpaper }                   from './wallpaper';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService{


    constructor(private http:Http) {}
    getBooksWithObservable(id): Observable<Wallpaper[]> {
        return this.http.get(`./assets/${id}.json`)
                .map(this.extractData)
                .catch(this.handleErrorObservable);
      
    }
   
    private extractData(res: Response) {
        let body = res.json();
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
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wallpaper } from '../wallpaper/wallpaper';

@Injectable()
export class HttpService {


    constructor(private http: HttpClient) { }
    getBooksWithObservable(id): Promise<Wallpaper[]> {
        return this.http.get<any>(`./assets/${id}.json`)
            .toPromise();
    }

}

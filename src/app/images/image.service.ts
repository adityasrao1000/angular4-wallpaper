import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Wallpaper } from '../wallpaper/wallpaper';

@Injectable()
export class ImageService {


    constructor(private http: HttpClient) { }
    getImagesWithObservable(id): Promise<Wallpaper[]> {
        return this.http.get<any>(`./assets/${id}.json`)
            .toPromise();
    }

}

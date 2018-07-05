import { TestBed, inject } from '@angular/core/testing';
import { ImageService } from './image.service';
import { HttpClientModule } from '@angular/common/http';

describe('Service: ImageService', () => {
    let service;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [ImageService]
    }));

    beforeEach(inject([ImageService], s => {
        service = s;
    }));

    it('should create service', () => {
        expect(service).toBeTruthy();
    });
    it('should be truthy', () => {
        expect(service.getImagesWithObservable()).toBeTruthy();
    });
});

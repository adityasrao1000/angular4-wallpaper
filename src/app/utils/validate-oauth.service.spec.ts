import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ValidateOauthService } from './validate-oauth.service';

describe('Service : ValidateOauthService', () => {
    let service;

    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [ValidateOauthService ]
    }));

    beforeEach(inject([ValidateOauthService ], s => {
        service = s;
    }));

    it('should create service', () => {
        expect(service).toBeTruthy();
    });
    it('should be truthy', () => {
        expect(service.validate('sdddsnmkvifjvi')).toBeTruthy();
    });
});

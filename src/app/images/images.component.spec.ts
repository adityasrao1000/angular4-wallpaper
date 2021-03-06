import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ImagesComponent } from './images.component';
import { ImageService } from './image.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRouteStub } from '../activated-router-stub';
import { Router, ActivatedRoute, PreloadAllModules } from '@angular/router';

describe('Component: ImagesComponent', () => {

    let component: ImagesComponent;
    let fixture: ComponentFixture<ImagesComponent>;
    let activatedRoute: ActivatedRouteStub;

    beforeEach(() => {
        // assign activated route and set parameters
        activatedRoute = new ActivatedRouteStub();
        activatedRoute.setParamMap({ id: 'abcdef' });
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [ImagesComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [ImageService,
                {
                    provide: Router,
                    useClass: class { navigate = jasmine.createSpy('navigate'); }
                },
                { provide: ActivatedRoute, useValue: { paramMap: activatedRoute.paramMap } }]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(ImagesComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
    it('ngoninit should be called', () => {
        fixture.whenStable().then(() => {
            expect(component.ngOnInit()).toHaveBeenCalled();
        });
    });
    it('getImagesWithObservable should resolve', inject([ImageService], s => {
        fixture.whenStable().then(() => {
            spyOn(s, 'getImagesWithObservable').and.returnValue(Promise.resolve());
            expect(component.ngOnInit()).toHaveBeenCalled();
        });
    }));
    it('ngoninit should be called', () => {
        fixture.whenStable().then(() => {
            expect(component.ngOnInit()).toHaveBeenCalled();
        });
    });

    it('function should be undefined', () => {
        expect(component.show('https://img.jpg')).toBeUndefined();
    });
});

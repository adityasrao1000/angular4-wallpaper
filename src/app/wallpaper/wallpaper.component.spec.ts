import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { WallpapersComponent } from './wallpapers.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRouteStub } from '../activated-router-stub';
import { Router, ActivatedRoute } from '@angular/router';

describe('Component: WallpaperComponent', () => {

    let component: WallpapersComponent;
    let fixture: ComponentFixture<WallpapersComponent>;
    let activatedRoute: ActivatedRouteStub;

    beforeEach(() => {
        // assign activated route and set parameters
        activatedRoute = new ActivatedRouteStub();
        activatedRoute.setParamMap({ id: 'abcdef' });
        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [WallpapersComponent],
            providers: [{
                provide: Router,
                useClass: class { navigate = jasmine.createSpy('navigate'); }
            },
            { provide: ActivatedRoute, useValue: { paramMap: activatedRoute.paramMap } }],
            schemas: [NO_ERRORS_SCHEMA]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(WallpapersComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});

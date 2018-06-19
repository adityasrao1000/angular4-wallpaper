import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { WallpapersComponent } from './wallpapers.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Component: WallpaperComponent', () => {

    let component: WallpapersComponent;
    let fixture: ComponentFixture<WallpapersComponent>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [WallpapersComponent],
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

import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ImagesComponent } from './images.component';
import { HttpService } from './http.service';

describe('Component: HttpComponent', () => {

    let component: ImagesComponent;
    let fixture: ComponentFixture<ImagesComponent>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [ImagesComponent],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [HttpService]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(ImagesComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});

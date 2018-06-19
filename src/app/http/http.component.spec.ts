import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Http1Component } from './http.component';
import { HttpService } from './http.service';

describe('Component: HttpComponent', () => {

    let component: Http1Component;
    let fixture: ComponentFixture<Http1Component>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [Http1Component],
            schemas: [NO_ERRORS_SCHEMA],
            providers: [HttpService]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(Http1Component);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});

import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MainpageComponent } from './mainpage.component';

describe('Component: MainpageComponent', () => {

    let component: MainpageComponent;
    let fixture: ComponentFixture<MainpageComponent>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [MainpageComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(MainpageComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});

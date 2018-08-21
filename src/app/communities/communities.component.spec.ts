import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommunitiesComponent } from './communities.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Component: CommunitiesComponent', () => {

    let component: CommunitiesComponent;
    let fixture: ComponentFixture<CommunitiesComponent>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [CommunitiesComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(CommunitiesComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});

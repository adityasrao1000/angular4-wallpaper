import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CommunityComponent } from './community.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Component: CommunityComponent', () => {

    let component: CommunityComponent;
    let fixture: ComponentFixture<CommunityComponent>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [CommunityComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(CommunityComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});

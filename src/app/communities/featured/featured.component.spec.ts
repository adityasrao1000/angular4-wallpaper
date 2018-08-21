import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FeaturedComponent } from './featured.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Component: FeaturedComponent', () => {

    let component: FeaturedComponent;
    let fixture: ComponentFixture<FeaturedComponent>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [FeaturedComponent]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(FeaturedComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});

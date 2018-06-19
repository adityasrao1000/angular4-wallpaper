import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { NotFoundComponent } from './pagenotfound.component';

describe('Component: NotFoundComponent', () => {

    let component: NotFoundComponent;
    let fixture: ComponentFixture<NotFoundComponent>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [NotFoundComponent]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(NotFoundComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});

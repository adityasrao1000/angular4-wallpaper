import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { InfoComponent } from './info.component';

describe('Component: InfoComponent', () => {

    let component: InfoComponent;
    let fixture: ComponentFixture<InfoComponent>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [InfoComponent]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(InfoComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});

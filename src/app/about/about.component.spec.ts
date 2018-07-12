import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { FormsModule } from '@angular/forms';

describe('Component: AboutComponent', () => {

    let component: AboutComponent;
    let fixture: ComponentFixture<AboutComponent>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [AboutComponent]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(AboutComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('onSubmit should be undefined', async(() => {
        expect(component.onSubmit()).toBeUndefined();
      }));
});

import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { PictureComponent } from './pictures.component';

describe('Component: PictureComponent', () => {

    let component: PictureComponent;
    let fixture: ComponentFixture<PictureComponent>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [PictureComponent]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(PictureComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { SearchPipe } from './search.pipe';

describe('Component: NavbarComponent', () => {

    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [NavbarComponent, SearchPipe],
            schemas: [NO_ERRORS_SCHEMA]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(NavbarComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('visible should be true', () => {
        component.show();
        fixture.detectChanges();
        expect(component.visible).toBe(true);
    });

    it('should be undefined', () => {
        expect(component.open()).toBeUndefined();
    });
});

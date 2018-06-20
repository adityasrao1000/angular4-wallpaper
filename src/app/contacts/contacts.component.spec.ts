import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { ContactsComponent } from './contacts.component';
import { FormsModule } from '@angular/forms';

describe('Component: ContactsComponent', () => {

    let component: ContactsComponent;
    let fixture: ComponentFixture<ContactsComponent>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [ContactsComponent]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(ContactsComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});

import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { ModalComponent } from './modal.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Component: ModalComponent', () => {

    let component: ModalComponent;
    let fixture: ComponentFixture<ModalComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ModalComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(ModalComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
        // set @Input()
        component.title = 'title';
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('@Input() title should be title', () => {
        expect(component.title).toBe('title');
    });

    it('should be undefined', () => {
        expect(component.close()).toBeUndefined();
    });
});

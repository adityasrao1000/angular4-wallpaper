import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ArticleComponent } from './article.component';

describe('Component: ArticleComponent', () => {

    let component: ArticleComponent;
    let fixture: ComponentFixture<ArticleComponent>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [ArticleComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(ArticleComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('color should be black', () => {
        component.over();
        fixture.detectChanges();
        expect(component.color).toBe('black');
    });
});

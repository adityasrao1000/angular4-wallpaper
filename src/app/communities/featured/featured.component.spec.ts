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

    it('filter should be toggled', () => {
        component.toggleFilter();
        expect(component.filterShow).toBe(true);
    });

    it('should be sorted by members', () => {
        component.featured = [
            // tslint:disable-next-line:max-line-length
            { image: './assets/img/charlotte.jpg', name: 'Tomiomi hawk ^-^', description: 'lorsem dorsi le mariano fhmkkfmr fjrf', members: 3 },
            { image: './assets/img/codegeass.jpg', name: 'Honi Honi uta', description: 'Suhagin e lambda forci', members: 15 },
            // tslint:disable-next-line:max-line-length
            { image: './assets/img/charlotte.jpg', name: 'Tomiomi hawk ^-^', description: 'lorsem dorsi le mariano fhmkkfmr fjrf', members: 3 },
            // tslint:disable-next-line:max-line-length
            { image: './assets/img/bleach.jpg', name: 'memerse of bleach lovers', description: 'jhckdjcn hdhrh rkjfkrfmkfmkcn n', members: 99 },
            { image: './assets/img/naruto.jpg', name: 'Bobi no maru', description: 'members de jinaio', members: 404 },
            { image: './assets/img/trigun.jpg', name: 'FAN PAGE', members: 122 },
        ];
        component.sortByMembers();
        fixture.detectChanges();
        const sorted = [
            { image: './assets/img/naruto.jpg', name: 'Bobi no maru', description: 'members de jinaio', members: 404 },
            { image: './assets/img/trigun.jpg', name: 'FAN PAGE', members: 122 },
            // tslint:disable-next-line:max-line-length
            { image: './assets/img/bleach.jpg', name: 'memerse of bleach lovers', description: 'jhckdjcn hdhrh rkjfkrfmkfmkcn n', members: 99 },
            { image: './assets/img/codegeass.jpg', name: 'Honi Honi uta', description: 'Suhagin e lambda forci', members: 15 },
            // tslint:disable-next-line:max-line-length
            { image: './assets/img/charlotte.jpg', name: 'Tomiomi hawk ^-^', description: 'lorsem dorsi le mariano fhmkkfmr fjrf', members: 3 },
            // tslint:disable-next-line:max-line-length
            { image: './assets/img/charlotte.jpg', name: 'Tomiomi hawk ^-^', description: 'lorsem dorsi le mariano fhmkkfmr fjrf', members: 3 }
        ];
        expect(component.featured).toEqual(sorted);
    });

    it('should be sorted by name', () => {
        component.featured = [
            // tslint:disable-next-line:max-line-length
            { image: './assets/img/charlotte.jpg', name: 'bomiomi hawk ^-^', description: 'lorsem dorsi le mariano fhmkkfmr fjrf', members: 3 },
            { image: './assets/img/codegeass.jpg', name: 'aoni Honi uta', description: 'Suhagin e lambda forci', members: 15 },
            // tslint:disable-next-line:max-line-length
            { image: './assets/img/charlotte.jpg', name: 'comiomi hawk ^-^', description: 'lorsem dorsi le mariano fhmkkfmr fjrf', members: 3 },
            // tslint:disable-next-line:max-line-length
            { image: './assets/img/charlotte.jpg', name: 'comiomi hawk ^-^', description: 'lorsem dorsi le mariano fhmkkfmr fjrf', members: 3 }
        ];
        component.sortByName();
        fixture.detectChanges();
        const sorted = [
            { image: './assets/img/codegeass.jpg', name: 'aoni Honi uta', description: 'Suhagin e lambda forci', members: 15 },
             // tslint:disable-next-line:max-line-length
             { image: './assets/img/charlotte.jpg', name: 'bomiomi hawk ^-^', description: 'lorsem dorsi le mariano fhmkkfmr fjrf', members: 3 },
             // tslint:disable-next-line:max-line-length
             { image: './assets/img/charlotte.jpg', name: 'comiomi hawk ^-^', description: 'lorsem dorsi le mariano fhmkkfmr fjrf', members: 3 },
             // tslint:disable-next-line:max-line-length
             { image: './assets/img/charlotte.jpg', name: 'comiomi hawk ^-^', description: 'lorsem dorsi le mariano fhmkkfmr fjrf', members: 3 }
        ];
        expect(component.featured).toEqual(sorted);
    });
});

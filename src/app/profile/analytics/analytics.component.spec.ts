import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { AnalyticsComponent } from './analytics.component';
import { HighchartsChartModule } from 'highcharts-angular';

describe('Component: AnalyticsComponent', () => {

    let component: AnalyticsComponent;
    let fixture: ComponentFixture<AnalyticsComponent>;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            imports: [HighchartsChartModule],
            declarations: [AnalyticsComponent]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(AnalyticsComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('ngoninit should be called', () => {
        fixture.whenStable().then(() => {
            expect(component.ngOnInit()).toHaveBeenCalled();
        });
    });
});

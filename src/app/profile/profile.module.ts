import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { ProfileRoutingModule } from './profile-routing.module';
import { InfoComponent } from './info/info.component';
import { PictureComponent } from './pictures/pictures.component';
import { AnalyticsComponent } from './analytics/analytics.component';

@NgModule({
    declarations: [
        ProfileComponent,
        InfoComponent,
        PictureComponent,
        AnalyticsComponent
    ],
    imports: [
        CommonModule,
        HighchartsChartModule,
        ProfileRoutingModule
    ],
    providers: []
})

export class ProfileModule { }

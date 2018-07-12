import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { InfoComponent } from './info/info.component';
import { PictureComponent } from './pictures/pictures.component';
import { AnalyticsComponent } from './analytics/analytics.component';

const appRoutes: Routes = [
    {
        path: '',
        component: ProfileComponent,
        children: [
            { path: '', redirectTo: 'info', pathMatch: 'full' },
            {
                path: 'info',
                component: InfoComponent,
            },
            {
                path: 'images',
                component: PictureComponent,
            },
            {
                path: 'analytics',
                component: AnalyticsComponent,
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }

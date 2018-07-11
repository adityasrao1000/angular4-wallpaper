import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { InfoComponent } from './info/info.component';
import { PictureComponent } from './pictures/pictures.component';

@NgModule({
    declarations: [
        ProfileComponent,
        InfoComponent,
        PictureComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule
    ],
    providers: []
})

export class ProfileModule { }

import { Component, OnInit } from '@angular/core';
import { UserCredentialsService } from '../../utils/user-credentials.service';

@Component({
    templateUrl: './joined.component.html',
    styleUrls: ['./joined.component.scss']
})

export class JoinedComponent {
    constructor(protected userCredentials: UserCredentialsService) {}
}

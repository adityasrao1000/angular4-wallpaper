import { Component } from '@angular/core';

@Component({
    templateUrl: './featured.component.html',
    styleUrls: ['./featured.component.scss']
})

export class FeaturedComponent {
    featured = [
        { image: './assets/img/charlotte.jpg', name: 'Tomiomi hawk ^-^', description: 'lorsem dorsi le mariano fhmkkfmr fjrf', members: 3 },
        { image: './assets/img/codegeass.jpg', name: 'Honi Honi uta', description: 'Suhagin e lambda forci', members: 15 },
        { image: './assets/img/deathnote.jpg', name: 'death note ja buhula ;)', description: 'sdjnnjdnjrdnjccn rifrjf', members: 12 },
        { image: './assets/img/bleach.jpg', name: 'memerse of bleach lovers', description: 'jhckdjcn hdhrh rkjfkrfmkfmkcn n', members: 99 },
        { image: './assets/img/naruto.jpg', name: 'Bobi no maru', description: 'members de jinaio', members: 404 },
        { image: './assets/img/trigun.jpg', name: 'FAN PAGE', description: '', members: 122 }
    ];
}

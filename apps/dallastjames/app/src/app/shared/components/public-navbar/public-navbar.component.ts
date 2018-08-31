import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'dallastjames-public-navbar',
    templateUrl: './public-navbar.component.html',
    styleUrls: ['./public-navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicNavbarComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

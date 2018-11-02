import { Component, OnInit } from '@angular/core';
import { environment } from '@dtj/env';

@Component({
    selector: 'dallastjames-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    public twitter: string = environment.social.twitter;
    public linkedin: string = environment.social.linkedin;

    constructor() {}

    ngOnInit(): void {}
}

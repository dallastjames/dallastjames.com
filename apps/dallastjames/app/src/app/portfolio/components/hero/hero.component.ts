import { Component, OnInit } from '@angular/core';
import { environment } from '@dtj/env';

@Component({
    selector: 'dallastjames-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
    public heroQuote: string = `
        BE LEGENDARY
    `;
    public twitter: string = environment.social.twitter;
    public linkedin: string = environment.social.linkedin;

    constructor() {}

    ngOnInit(): void {}
}

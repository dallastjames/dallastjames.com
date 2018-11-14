import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'dallastjames-examples',
    templateUrl: './examples.component.html',
    styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    public expandExample(): void {
        console.log('expand example');
    }
}

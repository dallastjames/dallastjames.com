import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'dallastjames-example-item',
    templateUrl: './example-item.component.html',
    styleUrls: ['./example-item.component.scss']
})
export class ExampleItemComponent implements OnInit {
    @Input() public image: string = '';

    constructor() {}

    ngOnInit(): void {}
}

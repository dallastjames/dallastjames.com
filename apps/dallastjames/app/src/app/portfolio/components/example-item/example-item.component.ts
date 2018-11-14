import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'dallastjames-example-item',
    templateUrl: './example-item.component.html',
    styleUrls: ['./example-item.component.scss']
})
export class ExampleItemComponent implements OnInit {
    public _image: any = '';
    @Input()
    public set image(value: string) {
        if (!!value) {
            this._image = value;
        }
    }

    @Output() public seeMore: EventEmitter<void> = new EventEmitter<void>();

    constructor(private _sanitizer: DomSanitizer) {}

    ngOnInit(): void {}
}

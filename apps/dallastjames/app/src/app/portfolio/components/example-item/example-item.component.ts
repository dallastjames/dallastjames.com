import { Component, OnInit, Input } from '@angular/core';
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
            this.style = {
                ...this.style,
                'background-image': this._sanitizer.bypassSecurityTrustStyle(
                    value
                )
            };
            console.log('setting style', value, this.style);
        }
    }

    @Input() public dark: boolean = false;

    public style: { [key: string]: any } = {};

    constructor(private _sanitizer: DomSanitizer) {}

    ngOnInit(): void {}
}

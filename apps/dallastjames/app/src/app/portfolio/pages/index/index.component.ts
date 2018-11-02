import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'dallastjames-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {
    constructor(
        private _activatedRoute: ActivatedRoute,
        @Inject(DOCUMENT) private _document: Document
    ) {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this._activatedRoute.fragment.subscribe(frag => {
            if (!!frag) {
                console.log('got frag', frag, this._document);
                this._document.getElementById(frag).scrollIntoView();
            }
        });
    }
}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'dallastjames-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit {
    public timesToLoop: number = 30;
    public loops: number[] = Array(this.timesToLoop);

    constructor() {}

    ngOnInit(): void {
        let i = 1;
        this.loops = this.loops.map(() => i++);
    }

    public scrollTo(el: HTMLDivElement): void {
        const options: ScrollIntoViewOptions = {
            behavior: 'smooth',
            block: 'start'
        };
        el.scrollIntoView(options);
    }
}

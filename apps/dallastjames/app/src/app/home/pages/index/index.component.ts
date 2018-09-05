import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { environment } from '@dtj/env';
import { SeoService } from '@dtj/core/services';

@Component({
    selector: 'dallastjames-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexComponent implements OnInit {
    public production: boolean = environment.production;
    public timesToLoop: number = 30;
    public loops: number[] = Array(this.timesToLoop);

    constructor(private _seo: SeoService) {}

    ngOnInit(): void {
        this._configureSEO();
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

    private _configureSEO(): void {
        this._seo.setTitle('Dallas T James | Sr. Full Stack Developer');
        this._seo.setDescription(
            `Hey, I’m Dallas James, a Senior Full Stack developer in Boise, ID.
            I am (tall, intelligent, handsome, nerdy, creative, intuitive) and
            I welcome gifts in the form of Mountain Dew.`
        );
    }
}

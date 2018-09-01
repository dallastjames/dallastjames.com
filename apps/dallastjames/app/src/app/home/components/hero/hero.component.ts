import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'dallastjames-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit {
    @Output()
    public scrollClicked: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}
}

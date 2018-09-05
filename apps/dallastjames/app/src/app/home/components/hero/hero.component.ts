import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Output,
    EventEmitter,
    Input
} from '@angular/core';

@Component({
    selector: 'dallastjames-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit {
    @Input() public production: boolean = true;

    @Output()
    public scrollClicked: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}
}

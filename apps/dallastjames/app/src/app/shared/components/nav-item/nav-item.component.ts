import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input
} from '@angular/core';
import { NavItem } from '@dtj/core/models';

@Component({
    selector: 'dallastjames-nav-item',
    templateUrl: './nav-item.component.html',
    styleUrls: ['./nav-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavItemComponent implements OnInit {
    @Input() public navItem: NavItem;

    constructor() {}

    ngOnInit(): void {}
}

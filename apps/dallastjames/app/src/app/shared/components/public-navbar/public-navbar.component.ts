import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    Input
} from '@angular/core';
import { NavItem } from '@dtj/core/models';

@Component({
    selector: 'dallastjames-public-navbar',
    templateUrl: './public-navbar.component.html',
    styleUrls: ['./public-navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicNavbarComponent implements OnInit {
    @Input() public navItems: NavItem[] = [];

    constructor() {}

    ngOnInit(): void {}
}

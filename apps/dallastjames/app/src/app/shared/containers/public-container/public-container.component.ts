import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavItem } from '@dtj/core/models';

@Component({
    selector: 'dallastjames-public-container',
    templateUrl: './public-container.component.html',
    styleUrls: ['./public-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicContainerComponent implements OnInit {
    public navItems: NavItem[] = [
        new NavItem({ label: 'About Me', route: '' }),
        new NavItem({ label: 'Portfolio', route: '' })
    ];

    constructor() {}

    ngOnInit(): void {}
}

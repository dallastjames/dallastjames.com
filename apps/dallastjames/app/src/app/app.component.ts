import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'dallastjames-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    public title: string = 'dallastjames.com';
}

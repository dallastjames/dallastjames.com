import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIcons } from './fa-icons';

library.add(...faIcons);

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        NxModule.forRoot(),
        RouterModule.forRoot(
            [
                {
                    path: 'portfolio',
                    loadChildren:
                        '@dtj/app/portfolio/portfolio.module#PortfolioModule'
                },
                {
                    path: '',
                    loadChildren: '@dtj/app/home/home.module#HomeModule'
                }
            ],
            {
                initialNavigation: 'enabled',
                scrollPositionRestoration: 'enabled'
            }
        ),
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}

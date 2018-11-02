import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExamplesComponent } from './components/examples/examples.component';

@NgModule({
    imports: [
        CommonModule,
        PortfolioRoutingModule,
        MatButtonModule,
        MatCardModule,
        FontAwesomeModule
    ],
    declarations: [
        IndexComponent,
        HeaderComponent,
        HeroComponent,
        FooterComponent,
        AboutMeComponent,
        ExamplesComponent
    ]
})
export class PortfolioModule {}

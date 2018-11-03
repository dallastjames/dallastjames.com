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
import { ExampleItemComponent } from './components/example-item/example-item.component';
import { ExampleTitleComponent } from './components/example-title/example-title.component';
import { ExampleDescriptionComponent } from './components/example-description/example-description.component';

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
        ExamplesComponent,
        ExampleItemComponent,
        ExampleTitleComponent,
        ExampleDescriptionComponent
    ]
})
export class PortfolioModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
    imports: [CommonModule, PortfolioRoutingModule, MatButtonModule],
    declarations: [IndexComponent, HeaderComponent, HeroComponent]
})
export class PortfolioModule {}

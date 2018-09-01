import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { SharedModule } from '@dtj/shared/shared.module';
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
    imports: [CommonModule, HomeRoutingModule, SharedModule, MatButtonModule],
    declarations: [IndexComponent, HeroComponent]
})
export class HomeModule {}

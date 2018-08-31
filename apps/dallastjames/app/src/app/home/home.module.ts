import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { SharedModule } from '@dtj/shared/shared.module';

@NgModule({
    imports: [CommonModule, HomeRoutingModule, SharedModule],
    declarations: [IndexComponent]
})
export class HomeModule {}

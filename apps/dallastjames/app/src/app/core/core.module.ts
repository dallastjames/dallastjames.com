import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { services } from './services';

@NgModule({
    imports: [CommonModule],
    declarations: [],
    providers: [...services]
})
export class CoreModule {}

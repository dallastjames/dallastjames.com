import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { components } from './components';
import { containers } from './containers';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [...containers, ...components],
    declarations: [...containers, ...components]
})
export class SharedModule {}

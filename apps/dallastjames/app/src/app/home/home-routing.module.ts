import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '@dtj/app/home/pages/index/index.component';
import { PublicContainerComponent } from '@dtj/shared/containers';

const routes: Routes = [
    {
        path: '',
        component: PublicContainerComponent,
        children: [
            {
                path: '',
                component: IndexComponent
            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}

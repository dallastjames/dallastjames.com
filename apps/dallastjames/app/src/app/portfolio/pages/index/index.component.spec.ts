import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponent } from './index.component';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { ExamplesComponent } from '../../components/examples/examples.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { ExampleItemComponent } from '../../components/example-item/example-item.component';
import { ExampleTitleComponent } from '../../components/example-title/example-title.component';
import { ExampleDescriptionComponent } from '../../components/example-description/example-description.component';

describe('IndexComponent', () => {
    let component: IndexComponent;
    let fixture: ComponentFixture<IndexComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FontAwesomeModule,
                RouterTestingModule,
                MatButtonModule,
                MatCardModule
            ],
            declarations: [
                IndexComponent,
                HeaderComponent,
                HeroComponent,
                AboutMeComponent,
                ExamplesComponent,
                FooterComponent,
                ExampleItemComponent,
                ExampleTitleComponent,
                ExampleDescriptionComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IndexComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesComponent } from './examples.component';
import { ExampleDescriptionComponent } from '../example-description/example-description.component';
import { ExampleTitleComponent } from '../example-title/example-title.component';
import { ExampleItemComponent } from '../example-item/example-item.component';

describe('ExamplesComponent', () => {
    let component: ExamplesComponent;
    let fixture: ComponentFixture<ExamplesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ExamplesComponent,
                ExampleDescriptionComponent,
                ExampleTitleComponent,
                ExampleItemComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExamplesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

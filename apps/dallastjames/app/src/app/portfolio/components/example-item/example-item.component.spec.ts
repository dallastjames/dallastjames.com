import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleItemComponent } from './example-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('ExampleItemComponent', () => {
    let component: ExampleItemComponent;
    let fixture: ComponentFixture<ExampleItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [FontAwesomeModule],
            declarations: [ExampleItemComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExampleItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

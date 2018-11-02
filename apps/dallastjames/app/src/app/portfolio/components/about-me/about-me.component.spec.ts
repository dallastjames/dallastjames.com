import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeComponent } from './about-me.component';
import { MatCardModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('AboutMeComponent', () => {
    let component: AboutMeComponent;
    let fixture: ComponentFixture<AboutMeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [MatCardModule, FontAwesomeModule],
            declarations: [AboutMeComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AboutMeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

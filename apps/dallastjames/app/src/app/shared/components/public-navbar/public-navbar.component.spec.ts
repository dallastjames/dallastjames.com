import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicNavbarComponent } from './public-navbar.component';

describe('PublicNavbarComponent', () => {
    let component: PublicNavbarComponent;
    let fixture: ComponentFixture<PublicNavbarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PublicNavbarComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PublicNavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a valid nav element', () => {
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('nav')).toBeTruthy();
    });
});

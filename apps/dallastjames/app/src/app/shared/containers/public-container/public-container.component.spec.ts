import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PublicContainerComponent } from './public-container.component';
import { components } from '@dtj/shared/components';

describe('PublicContainerComponent', () => {
    let component: PublicContainerComponent;
    let fixture: ComponentFixture<PublicContainerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [PublicContainerComponent, ...components]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PublicContainerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

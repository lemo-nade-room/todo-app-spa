import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticAccentButtonComponent } from './static-accent-button.component';

describe('StaticAccentButtonComponent', () => {
  let component: StaticAccentButtonComponent;
  let fixture: ComponentFixture<StaticAccentButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaticAccentButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticAccentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

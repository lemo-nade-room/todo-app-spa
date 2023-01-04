import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHomeComponent } from './mobile-home.component';

describe('HomeComponent', () => {
  let component: MobileHomeComponent;
  let fixture: ComponentFixture<MobileHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

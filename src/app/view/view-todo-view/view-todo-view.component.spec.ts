import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTodoViewComponent } from './view-todo-view.component';

describe('ViewTodoViewComponent', () => {
  let component: ViewTodoViewComponent;
  let fixture: ComponentFixture<ViewTodoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTodoViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTodoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

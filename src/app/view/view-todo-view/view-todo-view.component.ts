import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-todo-view',
  templateUrl: './view-todo-view.component.html',
  styleUrls: ['./view-todo-view.component.scss'],
})
export class ViewTodoViewComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public get isMobile(): boolean {
    return matchMedia('only screen and (max-width: 768px)').matches;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import TodoState from '@/models/TodoState';
import Category from '@/models/Category';

@Component({
  selector: 'app-desktop-todo-view',
  templateUrl: './desktop-todo-view.component.html',
  styleUrls: ['./desktop-todo-view.component.scss'],
})
export class DesktopTodoViewComponent implements OnInit {
  @Input() public category!: Category;
  @Input() public states!: readonly TodoState[];

  constructor() {}

  ngOnInit(): void {}
}

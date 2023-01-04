import { Component, Input, OnInit } from '@angular/core';
import TodoState from '@/models/TodoState';
import Category from '@/models/Category';

@Component({
  selector: 'app-mobile-todo-view',
  templateUrl: './mobile-todo-view.component.html',
  styleUrls: ['./mobile-todo-view.component.scss'],
})
export class MobileTodoViewComponent implements OnInit {
  @Input() public category: Category = new Category(1, '', '', 1);
  @Input() public states: readonly TodoState[] = [];

  constructor() {}

  ngOnInit(): void {}
}

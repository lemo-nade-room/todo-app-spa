import { Component, OnInit } from '@angular/core';
import { TodoService } from '@/app/todo.service';
import TodoState from '@/models/TodoState';
import Category from '@/models/Category';
import { CategoryService } from '@/app/category.service';

@Component({
  selector: 'app-view-todo-view',
  templateUrl: './view-todo-view.component.html',
  styleUrls: ['./view-todo-view.component.scss'],
})
export class ViewTodoViewComponent implements OnInit {
  constructor(
    private readonly todoService: TodoService,
    private readonly categoryService: CategoryService
  ) {}

  public states: readonly TodoState[] = [];
  public category: Category = new Category(1, '', '', 1);

  public categories: readonly Category[] = [];

  ngOnInit(): void {
    this.todoService.fetch('hello').subscribe((data) => {
      [this.category, this.states] = data;
    });
    this.categoryService
      .categories()
      .subscribe((categories) => (this.categories = categories));
  }

  public get isMobile(): boolean {
    return matchMedia('only screen and (max-width: 768px)').matches;
  }
}

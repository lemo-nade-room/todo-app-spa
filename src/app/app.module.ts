import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '@/app/mobile/home/home.component';
import { RouterModule } from '@angular/router';
import { EditButtonComponent } from './common/edit-button/edit-button.component';
import { CreateCategoryButtonComponent } from './common/category/create-category-button/create-category-button.component';
import { CategoryColorIconComponent } from './common/category-color-icon/category-color-icon.component';
import { CategoriesListTitleComponent } from './common/category/categories-list-title/categories-list-title.component';
import { CategoriesListComponent } from './common/category/categories-list/categories-list.component';
import { CategoryComponent } from './common/category/category.component';
import { TodoListComponent } from './common/todo/todo-list/todo-list.component';
import { StateTitleComponent } from './common/todo/state-title/state-title.component';
import { CreateTodoButtonComponent } from './common/todo/create-todo-button/create-todo-button.component';
import { TodoHeaderComponent } from './common/todo/todo-header/todo-header.component';
import { TodoTitleComponent } from './common/todo/todo-title/todo-title.component';
import { TodoViewComponent } from './mobile/todo-view/todo-view.component';
import { TodoStateHeaderComponent } from './common/todo/todo-state-header/todo-state-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditButtonComponent,
    CreateCategoryButtonComponent,
    CategoryColorIconComponent,
    CategoriesListTitleComponent,
    CategoriesListComponent,
    CategoryComponent,
    TodoListComponent,
    StateTitleComponent,
    CreateTodoButtonComponent,
    TodoHeaderComponent,
    TodoTitleComponent,
    TodoViewComponent,
    TodoStateHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'todo', component: TodoViewComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

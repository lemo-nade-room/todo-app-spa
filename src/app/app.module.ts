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
import { TodoListComponent } from './todo-list/todo-list.component';
import { StateTitleComponent } from './state-title/state-title.component';
import { CreateTodoButtonComponent } from './create-todo-button/create-todo-button.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoTitleComponent } from './todo-title/todo-title.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([{ path: '', component: HomeComponent }]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

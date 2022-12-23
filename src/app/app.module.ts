import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '@/app/mobile/home/home.component';
import { RouterModule } from '@angular/router';
import { EditButtonComponent } from './common/edit-button/edit-button.component';
import { CreateCategoryButtonComponent } from './common/create-category-button/create-category-button.component';
import { CategoryColorIconComponent } from './common/category-color-icon/category-color-icon.component';
import { CategoriesListTitleComponent } from './common/categories-list-title/categories-list-title.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditButtonComponent,
    CreateCategoryButtonComponent,
    CategoryColorIconComponent,
    CategoriesListTitleComponent,
    CategoriesListComponent,
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

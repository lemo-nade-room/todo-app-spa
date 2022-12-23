import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '@/app/mobile/home/home.component';
import { RouterModule } from "@angular/router";
import { EditButtonComponent } from './common/edit-button/edit-button.component';
import { CreateCategoryButtonComponent } from './common/create-category-button/create-category-button.component';
import { CategoryColorIconComponent } from './category-color-icon/category-color-icon.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditButtonComponent,
    CreateCategoryButtonComponent,
    CategoryColorIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

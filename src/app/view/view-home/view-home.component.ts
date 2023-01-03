import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@/app/category.service';
import Category from '@/models/Category';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss'],
})
export class ViewHomeComponent implements OnInit {
  constructor(private readonly categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService
      .categories()
      .subscribe((categories) => (this.categories = categories));
  }

  public get isMobile(): boolean {
    return matchMedia('only screen and (max-width: 768px)').matches;
  }

  public categories: readonly Category[] = [];
}

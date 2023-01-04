import { Component, OnInit } from '@angular/core';
import Category from '@/models/Category';
import { CategoryService } from '@/app/category.service';

@Component({
  selector: 'app-mobile-home',
  templateUrl: './mobile-home.component.html',
  styleUrls: ['./mobile-home.component.scss'],
})
export class MobileHomeComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService
      .categories()
      .subscribe((categories) => (this.categories = categories));
  }

  onCreate(): void {
    this.categoryService
      .append(this.folder, this.slug, this.color)
      .subscribe(() => {
        this.load();
        this.open = false;
      });
  }

  public isEdit = false;

  public categories: readonly Category[] = [];
  public open = false;
  public slug = '';
  public folder = '';
  public color = 1;

  private load() {
    this.categoryService
      .categories()
      .subscribe((categories) => (this.categories = categories));
  }
}

import { Component, OnInit } from '@angular/core';
import Category from '@/models/Category';
import { CategoryService } from '@/app/category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.load();
  }

  private load(): void {
    this.categoryService
      .categories()
      .subscribe((categories) => (this.categories = categories));
  }

  public onCreate(): void {
    this.categoryService
      .append(this.folder, this.slug, this.color)
      .subscribe(() => {
        this.load();
        this.open = false;
      });
  }

  public categories: readonly Category[] = [];

  public isEdit = false;

  public open = false;
  public folder = '';
  public slug = '';
  public color = 1;
}

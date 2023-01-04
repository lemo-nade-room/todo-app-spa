import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import Category from '@/models/Category';

const CATEGORIES: readonly Category[] = [
  new Category(1, 'フロントエンド', 'front', 1),
  new Category(2, 'バックエンド', 'front', 2),
  new Category(3, 'インフラ', 'front', 3),
];

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private value: Category[] = Object.create(CATEGORIES);

  public readonly categories = (): Observable<readonly Category[]> => {
    return of(this.value);
  };

  public readonly append = (
    name: string,
    slug: string,
    color: number
  ): Observable<void> => {
    const id = this.maxId() + 1;
    this.value.push(new Category(id, name, slug, color));
    return of(undefined);
  };

  public readonly update = (
    id: number,
    name: string,
    slug: string,
    color: number
  ): Observable<void> => {
    this.value = this.value.map((category) => {
      if (category.id !== id) return category;
      return new Category(id, name, slug, category.color);
    });
    return of(undefined);
  };

  public readonly remove = (id: number): Observable<void> => {
    this.value = this.value.filter((category) => category.id !== id);
    return of(undefined);
  };

  private readonly maxId = (): number => {
    return this.value.reduce((max, category) => {
      return Math.max(max, category.id);
    }, 0);
  };
}

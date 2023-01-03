import { Injectable } from '@angular/core';
import TodoState from '@/models/TodoState';
import Todo from '@/models/Todo';
import Category from '@/models/Category';
import { Observable, of } from 'rxjs';

const TODOS: readonly TodoState[] = [
  new TodoState(0, [
    new Todo(
      1,
      '画面を黄色に変更',
      '2022/11/11',
      'いいからとにかく全てを黄色に'
    ),
    new Todo(
      2,
      '誤植を修正',
      '2022/10/23',
      '変更が並行になっていたのを修正する'
    ),
  ]),
  new TodoState(1, [
    new Todo(
      3,
      '画面を黄色に変更',
      '2022/11/11',
      'いいからとにかく全てを黄色に'
    ),
    new Todo(
      4,
      '誤植を修正',
      '2022/10/23',
      '変更が並行になっていたのを修正する'
    ),
    new Todo(
      5,
      'スマホに対応',
      '2022/10/21',
      'スマホに対応していい感じにする。\nそんな感じです。'
    ),
  ]),
  new TodoState(2, [
    new Todo(
      6,
      'フロントらしさを追求',
      '2022/10/21',
      'フロントとはねハスキーな感じの'
    ),
    new Todo(
      7,
      '諦めたらそこで試合終了だ',
      '2022/10/20',
      '帰ったら結婚するんだ！！'
    ),
  ]),
];

const CATEGORY = new Category(1, 'フロントエンド', 'front', '#FFE664');

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}
  public fetch(slug: string): Observable<[Category, readonly TodoState[]]> {
    return of([CATEGORY, TODOS]);
  }

  public append(title: string, text: string): Observable<void> {
    console.log(`created: ${title} ${text}`);
    return of(undefined);
  }

  public update(
    id: number,
    title: string,
    text: string,
    state: number
  ): Observable<void> {
    console.log(`updated: ${id} ${title} ${text} ${state}`);
    return of(undefined);
  }

  public remove(id: number): Observable<void> {
    console.log(`deleted: ${id}`);
    return of(undefined);
  }
}

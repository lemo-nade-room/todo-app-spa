import { Component, OnInit } from '@angular/core';
import * as style from '@/assets/style/variables';
import Category from '@/models/Category';
import TodoState from '@/models/TodoState';
import Todo from '@/models/Todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public isEdit = false;

  public get backgroundColor(): string {
    return style.backgroundColor;
  }

  public log(message = 'Hello, World!') {
    console.log(message);
  }

  public categories = [
    new Category('フロントエンド', 'front', '#FFE664'),
    new Category('バックエンド', 'front', '#C0EEEE'),
    new Category('インフラ', 'front', '#9DE8C4'),
  ];

  public todoStates: TodoState[] = [
    new TodoState(0, [
      new Todo(
        '画面を黄色に変更',
        '2022/11/11',
        'いいからとにかく全てを黄色に'
      ),
      new Todo(
        '誤植を修正',
        '2022/10/23',
        '変更が並行になっていたのを修正する'
      ),
    ]),
    new TodoState(1, [
      new Todo(
        '画面を黄色に変更',
        '2022/11/11',
        'いいからとにかく全てを黄色に'
      ),
      new Todo(
        '誤植を修正',
        '2022/10/23',
        '変更が並行になっていたのを修正する'
      ),
      new Todo(
        'スマホに対応',
        '2022/10/21',
        'スマホに対応していい感じにする。\nそんな感じです。'
      ),
    ]),
    new TodoState(2, [
      new Todo(
        'フロントらしさを追求',
        '2022/10/21',
        'フロントとはねハスキーな感じの'
      ),
      new Todo(
        '諦めたらそこで試合終了だ',
        '2022/10/20',
        '帰ったら結婚するんだ！！'
      ),
    ]),
  ];
}

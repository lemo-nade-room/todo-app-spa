import { Component, OnInit } from '@angular/core';
import * as style from '@/assets/style/variables';
import Category from '@/models/Category';

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

  public log() {
    console.log('Hello, World!');
  }

  public categories = [
    new Category('フロントエンド', 'front', '#FFE664'),
    new Category('バックエンド', 'front', '#C0EEEE'),
    new Category('インフラ', 'front', '#9DE8C4'),
  ];
}

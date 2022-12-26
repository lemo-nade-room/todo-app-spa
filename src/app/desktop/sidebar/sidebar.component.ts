import { Component, OnInit } from '@angular/core';
import Category from '@/models/Category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public isEdit = false;
  public log(message = 'Hello, World!') {
    console.log(message);
  }
  public categories = [
    new Category('フロントエンド', 'front', '#FFE664'),
    new Category('バックエンド', 'front', '#C0EEEE'),
    new Category('インフラ', 'front', '#9DE8C4'),
  ];
}

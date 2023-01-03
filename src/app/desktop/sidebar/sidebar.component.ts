import { Component, Input, OnInit } from '@angular/core';
import Category from '@/models/Category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Input() public categories!: readonly Category[];

  constructor() {}

  ngOnInit(): void {}

  public isEdit = false;
  public log(message = 'Hello, World!') {
    console.log(message);
  }
}

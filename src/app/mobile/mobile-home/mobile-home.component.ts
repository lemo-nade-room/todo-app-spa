import { Component, Input, OnInit } from '@angular/core';
import Category from '@/models/Category';

@Component({
  selector: 'app-mobile-home',
  templateUrl: './mobile-home.component.html',
  styleUrls: ['./mobile-home.component.scss'],
})
export class MobileHomeComponent implements OnInit {
  @Input() public categories: readonly Category[] = [];
  constructor() {}

  ngOnInit(): void {}

  public isEdit = false;
}

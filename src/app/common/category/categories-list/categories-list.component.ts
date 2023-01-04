import { Component, Input, OnInit } from '@angular/core';
import Category from '@/models/Category';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
})
export class CategoriesListComponent implements OnInit {
  @Input() public categories!: readonly Category[];

  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list-title',
  templateUrl: './categories-list-title.component.html',
  styleUrls: ['./categories-list-title.component.scss'],
})
export class CategoriesListTitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() public color!: string;

  public get style(): Record<string, string> {
    return {
      color: this.color,
    };
  }
}

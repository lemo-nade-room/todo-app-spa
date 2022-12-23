import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-color-icon',
  templateUrl: './category-color-icon.component.html',
  styleUrls: ['./category-color-icon.component.scss'],
})
export class CategoryColorIconComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() public color!: string;

  @Input() public length!: number;

  public get style(): Record<string, string> {
    return {
      'background-color': this.color,
      width: `${this.length}px`,
      height: `${this.length}px`,
    };
  }
}

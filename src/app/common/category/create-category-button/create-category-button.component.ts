import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-category-button',
  templateUrl: './create-category-button.component.html',
  styleUrls: ['./create-category-button.component.scss'],
})
export class CreateCategoryButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() public backgroundColor!: string;
  @Input() public color!: string;

  @Output() public click = new EventEmitter<undefined>();

  public get lineStyle(): Record<string, string> {
    return {
      'background-color': this.backgroundColor,
    };
  }

  public get buttonStyle(): Record<string, string> {
    return {
      border: `1px solid ${this.color}`,
    };
  }

  public get circleStyle(): Record<string, string> {
    return {
      'background-color': this.color,
    };
  }
}

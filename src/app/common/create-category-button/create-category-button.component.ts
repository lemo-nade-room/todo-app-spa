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

  @Output() public click = new EventEmitter<undefined>();

  public get lineStyle(): Record<string, string> {
    return {
      'background-color': this.backgroundColor,
    };
  }
}

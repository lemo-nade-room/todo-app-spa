import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

const EDIT = '編集';
const END = '完了';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss'],
})
export class EditButtonComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}

  @Input() public color!: string;
  @Input() public value: boolean = false;
  @Output() public valueChange = new EventEmitter<boolean>();

  public get display(): string {
    return this.value ? END : EDIT;
  }

  public get style(): Record<string, string> {
    return {
      color: this.color,
    };
  }

  public onClick() {
    this.value = !this.value;
    this.valueChange.emit(this.value);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
  styleUrls: ['./create-category-dialog.component.scss'],
})
export class CreateCategoryDialogComponent implements OnInit {
  @Input() public open: boolean = false;
  @Output() public openChange = new EventEmitter<boolean>();

  @Input() public color: number = 2;
  @Output() public colorChange = new EventEmitter<number>();

  @Input() public slug = '';
  @Output() public slugChange = new EventEmitter<string>();

  @Input() public folder = '';
  @Output() public folderChange = new EventEmitter<string>();

  @Output() public create = new EventEmitter<undefined>();

  constructor() {}

  ngOnInit(): void {}

  public close() {
    this.openChange.emit(false);
  }

  public emitColor(num: string) {
    this.colorChange.emit(Number(num));
  }

  public get colorCode(): string {
    switch (this.color) {
      case 1:
        return '#FFE664';
      case 2:
        return '#C0EEEE';
      case 3:
        return '#9DE8C4';
      default:
        return 'black';
    }
  }

  log = console.log;
}

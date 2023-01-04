import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-category-dialog',
  templateUrl: './create-category-dialog.component.html',
  styleUrls: ['./create-category-dialog.component.scss'],
})
export class CreateCategoryDialogComponent implements OnInit {
  @Input() public open: boolean = false;
  @Output() public openChange = new EventEmitter<boolean>();
  @Output() public create = new EventEmitter<undefined>();

  constructor() {}

  ngOnInit(): void {}

  public close() {
    this.openChange.emit(false);
  }
}

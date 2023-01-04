import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-base-dialog',
  templateUrl: './base-dialog.component.html',
  styleUrls: ['./base-dialog.component.scss'],
})
export class BaseDialogComponent implements OnInit {
  @Input() public width: number = 346;
  @Input() public height: number = 240;
  @Input() public open: boolean = false;
  @Output() public openChange = new EventEmitter<boolean>();

  public close(): void {
    this.openChange.emit(false);
  }

  public get dialogStyle(): Record<string, string> {
    return {
      width: `${this.width}px`,
      height: `${this.height}px`,
    };
  }

  constructor() {}

  ngOnInit(): void {}
}

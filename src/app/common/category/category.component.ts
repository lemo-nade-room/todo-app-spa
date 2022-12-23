import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Category from '@/models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor() {}

  @Input() public categories!: readonly Category[];
  @Input() public titleColor!: string;
  @Input() public buttonsColor!: string;
  @Input() public backgroundColor!: string;
  @Input() public isEdit: boolean = false;
  @Output() public isEditChange = new EventEmitter<boolean>();
  @Output() public create = new EventEmitter<undefined>();

  ngOnInit(): void {}
}

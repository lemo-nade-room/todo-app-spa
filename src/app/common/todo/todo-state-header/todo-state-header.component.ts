import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-state-header',
  templateUrl: './todo-state-header.component.html',
  styleUrls: ['./todo-state-header.component.scss'],
})
export class TodoStateHeaderComponent implements OnInit {
  @Input() public title!: string;
  @Input() public isShowCreateButton: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}

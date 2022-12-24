import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-title',
  templateUrl: './todo-title.component.html',
  styleUrls: ['./todo-title.component.scss'],
})
export class TodoTitleComponent implements OnInit {
  @Input() public title!: string;
  constructor() {}

  ngOnInit(): void {}
}

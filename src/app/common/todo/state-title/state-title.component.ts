import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-title',
  templateUrl: './state-title.component.html',
  styleUrls: ['./state-title.component.scss'],
})
export class StateTitleComponent implements OnInit {
  @Input() public title!: string;

  constructor() {}

  ngOnInit(): void {}
}

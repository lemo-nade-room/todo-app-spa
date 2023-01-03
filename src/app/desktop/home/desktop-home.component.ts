import { Component, Input, OnInit } from '@angular/core';
import Category from '@/models/Category';

@Component({
  selector: 'app-desktop-home',
  templateUrl: './desktop-home.component.html',
  styleUrls: ['./desktop-home.component.scss'],
})
export class DesktopHomeComponent implements OnInit {
  @Input() public categories: readonly Category[] = [];

  constructor() {}

  ngOnInit(): void {}
}

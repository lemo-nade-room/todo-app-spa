import { Component, OnInit } from '@angular/core';
import * as style from '@/assets/style/variables';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public isEdit = false;

  public get backgroundColor(): string {
    return style.backgroundColor;
  }

  public log() {
    console.log('Hello, World!');
  }
}

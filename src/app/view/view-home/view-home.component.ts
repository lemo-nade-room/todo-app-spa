import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.scss'],
})
export class ViewHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public get isMobile(): boolean {
    return matchMedia('only screen and (max-width: 768px)').matches;
  }
}

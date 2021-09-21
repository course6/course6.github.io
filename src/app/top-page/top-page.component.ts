import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss'],
})
export class TopPageComponent implements OnInit {
  screenWidth: number = 0;

  constructor() {
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
  }

  ngOnInit(): void {}

  // NOTE: SPの場合app-button のみ真ん中に配置するためにスクリーンサイズから計算する
  getButtonWidth(): number {
    if (this.screenWidth < 550) {
      return this.screenWidth - 17 * 2;
    }
    return 320;
  }
}

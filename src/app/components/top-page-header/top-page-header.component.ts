import {Component, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-top-page-header',
  templateUrl: './top-page-header.component.html',
  styleUrls: ['./top-page-header.component.scss'],
})
export class TopPageHeaderComponent {
  @Input() buttonText = '';
  @Input() buttonLink = '';

  screenWidth: number = 0;

  constructor() {
    this.setScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  setScreenWidth(): void {
    this.screenWidth = window.innerWidth;
  }
  // NOTE: SPの場合app-button のみ真ん中に配置するためにスクリーンサイズから計算する
  getButtonWidth(): number {
    if (this.screenWidth < 550) {
      return this.screenWidth - 17 * 2;
    }
    return 320;
  }
}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('マイネット進学');
  }

  currentSlideIndex: number = 0;
  readonly slides: NodeListOf<HTMLElement> =
    document.querySelectorAll('.slide');
  readonly dots: NodeListOf<HTMLElement> = document.querySelectorAll('.dot');

  options = { forceVisible: true, autoHide: false, direction: 'rtl' };

  currentSlide(n: number): void {
    this.slides[this.currentSlideIndex].style.opacity = '0';
    this.dots[this.currentSlideIndex].classList.remove('active');
    this.currentSlideIndex = n;
    this.slides[this.currentSlideIndex].style.opacity = '1';
    this.dots[this.currentSlideIndex].classList.add('active');
  }
}

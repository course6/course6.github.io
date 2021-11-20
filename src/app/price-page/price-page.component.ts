import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-price-page',
  templateUrl: './price-page.component.html',
  styleUrls: ['./price-page.component.scss'],
})
export class PricePageComponent implements OnInit {
  constructor(private titleService: Title) {}

  readonly title = '料金';

  ngOnInit(): void {
    this.titleService.setTitle(`${this.title} | マイネット進学`);
  }
}

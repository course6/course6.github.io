import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss'],
})
export class FaqPageComponent implements OnInit {
  constructor(private titleService: Title) {}

  readonly title = 'よくある質問';

  ngOnInit(): void {
    this.titleService.setTitle(`${this.title} | マイネット進学`);
  }
}

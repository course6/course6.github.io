import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss'],
})
export class ServicePageComponent implements OnInit {
  constructor(private titleService: Title) {}
  readonly title = 'サービスと料金';

  ngOnInit(): void {
    this.titleService.setTitle(`${this.title} | マイネット進学`);
  }
}

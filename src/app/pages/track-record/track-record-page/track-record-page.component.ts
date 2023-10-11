import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-track-record-page',
  templateUrl: './track-record-page.component.html',
  styleUrls: ['./track-record-page.component.scss'],
})
export class TrackRecordPageComponent implements OnInit {
  constructor(private titleService: Title) {}

  readonly title = '合格実績';

  ngOnInit(): void {
    this.titleService.setTitle(`${this.title} | マイネット進学`);
  }
}

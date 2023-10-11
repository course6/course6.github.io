import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-common-exam-page',
  templateUrl: './common-exam-page.component.html',
  styleUrls: ['./common-exam-page.component.scss'],
})
export class CommonExamPageComponent implements OnInit {
  constructor(
    protected router: Router,
    private titleService: Title,
  ) {}
  readonly title = '都立共通入試';

  ngOnInit(): void {
    this.titleService.setTitle(`${this.title} | マイネット進学`);
  }
}

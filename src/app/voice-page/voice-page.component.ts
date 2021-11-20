import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-voice-page',
  templateUrl: './voice-page.component.html',
  styleUrls: ['./voice-page.component.scss'],
})
export class VoicePageComponent implements OnInit {
  constructor(private titleService: Title) {}

  readonly title = '生徒の声';

  ngOnInit(): void {
    this.titleService.setTitle(`${this.title} | マイネット進学`);
  }
}

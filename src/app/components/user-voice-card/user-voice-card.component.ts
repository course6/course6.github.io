import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-voice-card',
  templateUrl: './user-voice-card.component.html',
  styleUrls: ['./user-voice-card.component.scss'],
})
export class UserVoiceCardComponent {
  @Input() src: string = './assets/image/student/01.png';
  @Input() grade: string = '中学3年生';
  @Input() text: string = '';
}

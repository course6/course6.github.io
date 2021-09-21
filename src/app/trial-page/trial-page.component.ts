import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trial-page',
  templateUrl: './trial-page.component.html',
  styleUrls: ['./trial-page.component.scss'],
})
export class TrialPageComponent implements OnInit {
  isSelectWeekday: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  changeDate(event: any) {
    const selectedDay = event.target.valueAsDate.getDay();
    this.isSelectWeekday = !(
      !selectedDay ||
      selectedDay === 6 ||
      selectedDay === 0
    );
  }
}

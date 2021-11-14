import { Component, OnInit } from '@angular/core';

declare var gtag: any

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

  gtagConversion() {
    gtag('config', 'AW-10800092951');
    gtag('event', 'conversion', {
      send_to: 'AW-10800092951/G3biCOTGuIADEJeu8Z0o',
    });
  }
}

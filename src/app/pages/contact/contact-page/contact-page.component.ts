import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare var gtag: any;

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  constructor(private titleService: Title) {}

  readonly title = 'お問い合わせ';

  ngOnInit(): void {
    this.titleService.setTitle(`${this.title} | マイネット進学`);
  }

  gtagConversion() {
    gtag('config', 'AW-10800092951');
    gtag('event', 'conversion', {
      send_to: 'AW-10800092951/G3biCOTGuIADEJeu8Z0o',
    });
  }
}

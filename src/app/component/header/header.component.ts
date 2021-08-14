import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  openMenu() {
    const body = document.body;
    if (body.hasAttribute('class')) {
      body.removeAttribute('class');
    } else {
      body.setAttribute('class', 'open');
    }
  }

  closeMenu() {
    const body = document.body;
    body.removeAttribute('class');
  }

  goToLink(route: string) {
    this.closeMenu();
    this.router.navigate([route]);
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  @Input() width = 320;
  @Input() height = 48;
  @Input() link = '/';
  @Input() type = '';

  constructor() {}

  ngOnInit(): void {}
}

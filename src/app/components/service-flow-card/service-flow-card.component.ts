import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-flow-card',
  templateUrl: './service-flow-card.component.html',
  styleUrls: ['./service-flow-card.component.scss'],
})
export class ServiceFlowCardComponent {
  @Input() heading: string = '';
  @Input() pcImageSrc: string = '';
  @Input() spImageSrc: string = '';
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFlowCardComponent } from './service-flow-card.component';

describe('ServiceFlowCardComponent', () => {
  let component: ServiceFlowCardComponent;
  let fixture: ComponentFixture<ServiceFlowCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceFlowCardComponent]
    });
    fixture = TestBed.createComponent(ServiceFlowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackRecordPageComponent } from './track-record-page.component';

describe('TrackRecordPageComponent', () => {
  let component: TrackRecordPageComponent;
  let fixture: ComponentFixture<TrackRecordPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrackRecordPageComponent]
    });
    fixture = TestBed.createComponent(TrackRecordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

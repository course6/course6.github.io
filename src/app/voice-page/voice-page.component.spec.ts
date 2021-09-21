import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicePageComponent } from './voice-page.component';

describe('VoicePageComponent', () => {
  let component: VoicePageComponent;
  let fixture: ComponentFixture<VoicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoicePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

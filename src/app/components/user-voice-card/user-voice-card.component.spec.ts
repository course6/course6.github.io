import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVoiceCardComponent } from './user-voice-card.component';

describe('UserVoiceCardComponent', () => {
  let component: UserVoiceCardComponent;
  let fixture: ComponentFixture<UserVoiceCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserVoiceCardComponent]
    });
    fixture = TestBed.createComponent(UserVoiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

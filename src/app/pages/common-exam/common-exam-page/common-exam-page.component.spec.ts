import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonExamPageComponent } from './common-exam-page.component';

describe('CommonExamPageComponent', () => {
  let component: CommonExamPageComponent;
  let fixture: ComponentFixture<CommonExamPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonExamPageComponent]
    });
    fixture = TestBed.createComponent(CommonExamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

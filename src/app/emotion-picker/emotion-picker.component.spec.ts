import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionPickerComponent } from './emotion-picker.component';

describe('EmotionPickerComponent', () => {
  let component: EmotionPickerComponent;
  let fixture: ComponentFixture<EmotionPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmotionPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmotionPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

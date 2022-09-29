import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SillinessComponent } from './silliness.component';

describe('SillinessComponent', () => {
  let component: SillinessComponent;
  let fixture: ComponentFixture<SillinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SillinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SillinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

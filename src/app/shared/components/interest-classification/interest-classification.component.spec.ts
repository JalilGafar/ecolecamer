import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestClassificationComponent } from './interest-classification.component';

describe('InterestClassificationComponent', () => {
  let component: InterestClassificationComponent;
  let fixture: ComponentFixture<InterestClassificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestClassificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

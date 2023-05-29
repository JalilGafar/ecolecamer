import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestAvisComponent } from './interest-avis.component';

describe('InterestAvisComponent', () => {
  let component: InterestAvisComponent;
  let fixture: ComponentFixture<InterestAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestAvisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

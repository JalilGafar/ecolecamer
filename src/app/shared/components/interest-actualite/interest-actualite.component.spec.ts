import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestActualiteComponent } from './interest-actualite.component';

describe('InterestActualiteComponent', () => {
  let component: InterestActualiteComponent;
  let fixture: ComponentFixture<InterestActualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestActualiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

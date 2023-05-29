import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubInterestComponent } from './pub-interest.component';

describe('PubInterestComponent', () => {
  let component: PubInterestComponent;
  let fixture: ComponentFixture<PubInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubInterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

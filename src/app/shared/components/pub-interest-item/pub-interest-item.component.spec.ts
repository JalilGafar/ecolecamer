import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubInterestItemComponent } from './pub-interest-item.component';

describe('PubInterestItemComponent', () => {
  let component: PubInterestItemComponent;
  let fixture: ComponentFixture<PubInterestItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubInterestItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubInterestItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCapComponent } from './info-cap.component';

describe('InfoCapComponent', () => {
  let component: InfoCapComponent;
  let fixture: ComponentFixture<InfoCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

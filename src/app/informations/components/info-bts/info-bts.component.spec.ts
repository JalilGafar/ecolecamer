import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBtsComponent } from './info-bts.component';

describe('InfoBtsComponent', () => {
  let component: InfoBtsComponent;
  let fixture: ComponentFixture<InfoBtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoBtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

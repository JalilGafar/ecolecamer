import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBacProComponent } from './info-bac-pro.component';

describe('InfoBacProComponent', () => {
  let component: InfoBacProComponent;
  let fixture: ComponentFixture<InfoBacProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBacProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoBacProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

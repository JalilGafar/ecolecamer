import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDutComponent } from './info-dut.component';

describe('InfoDutComponent', () => {
  let component: InfoDutComponent;
  let fixture: ComponentFixture<InfoDutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoDutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoDutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

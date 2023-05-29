import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMasterComponent } from './info-master.component';

describe('InfoMasterComponent', () => {
  let component: InfoMasterComponent;
  let fixture: ComponentFixture<InfoMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

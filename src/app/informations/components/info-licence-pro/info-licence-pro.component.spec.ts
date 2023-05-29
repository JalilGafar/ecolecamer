import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLicenceProComponent } from './info-licence-pro.component';

describe('InfoLicenceProComponent', () => {
  let component: InfoLicenceProComponent;
  let fixture: ComponentFixture<InfoLicenceProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoLicenceProComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoLicenceProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

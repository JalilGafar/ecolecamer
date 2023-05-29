import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLicenceComponent } from './info-licence.component';

describe('InfoLicenceComponent', () => {
  let component: InfoLicenceComponent;
  let fixture: ComponentFixture<InfoLicenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoLicenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

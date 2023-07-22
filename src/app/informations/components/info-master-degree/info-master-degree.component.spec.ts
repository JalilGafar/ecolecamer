import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMasterDegreeComponent } from './info-master-degree.component';

describe('InfoMasterDegreeComponent', () => {
  let component: InfoMasterDegreeComponent;
  let fixture: ComponentFixture<InfoMasterDegreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMasterDegreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoMasterDegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderBuildingComponent } from './under-building.component';

describe('UnderBuildingComponent', () => {
  let component: UnderBuildingComponent;
  let fixture: ComponentFixture<UnderBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderBuildingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

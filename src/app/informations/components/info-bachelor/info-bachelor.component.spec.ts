import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBachelorComponent } from './info-bachelor.component';

describe('InfoBachelorComponent', () => {
  let component: InfoBachelorComponent;
  let fixture: ComponentFixture<InfoBachelorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBachelorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoBachelorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

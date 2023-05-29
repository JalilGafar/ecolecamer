import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFormationComponent } from './info-formation.component';

describe('InfoFormationComponent', () => {
  let component: InfoFormationComponent;
  let fixture: ComponentFixture<InfoFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

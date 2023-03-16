import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifCampusComponent } from './modif-campus.component';

describe('ModifCampusComponent', () => {
  let component: ModifCampusComponent;
  let fixture: ComponentFixture<ModifCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifCampusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

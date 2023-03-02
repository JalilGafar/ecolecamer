import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifFormationComponent } from './modif-formation.component';

describe('ModifFormationComponent', () => {
  let component: ModifFormationComponent;
  let fixture: ComponentFixture<ModifFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifFormationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

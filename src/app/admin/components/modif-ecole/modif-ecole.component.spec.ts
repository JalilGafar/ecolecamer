import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifEcoleComponent } from './modif-ecole.component';

describe('ModifEcoleComponent', () => {
  let component: ModifEcoleComponent;
  let fixture: ComponentFixture<ModifEcoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifEcoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

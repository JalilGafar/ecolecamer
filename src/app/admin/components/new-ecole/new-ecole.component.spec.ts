import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEcoleComponent } from './new-ecole.component';

describe('NewEcoleComponent', () => {
  let component: NewEcoleComponent;
  let fixture: ComponentFixture<NewEcoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEcoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifUnivComponent } from './modif-univ.component';

describe('ModifUnivComponent', () => {
  let component: ModifUnivComponent;
  let fixture: ComponentFixture<ModifUnivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifUnivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifUnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifDiplomeComponent } from './modif-diplome.component';

describe('ModifDiplomeComponent', () => {
  let component: ModifDiplomeComponent;
  let fixture: ComponentFixture<ModifDiplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifDiplomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifDiplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DernierDiplomeComponent } from './dernier-diplome.component';

describe('DernierDiplomeComponent', () => {
  let component: DernierDiplomeComponent;
  let fixture: ComponentFixture<DernierDiplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DernierDiplomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DernierDiplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

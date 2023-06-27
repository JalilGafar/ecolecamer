import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomeListComponent } from './diplome-list.component';

describe('DiplomeListComponent', () => {
  let component: DiplomeListComponent;
  let fixture: ComponentFixture<DiplomeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiplomeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiplomeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

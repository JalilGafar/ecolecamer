import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDiplomeComponent } from './new-diplome.component';

describe('NewDiplomeComponent', () => {
  let component: NewDiplomeComponent;
  let fixture: ComponentFixture<NewDiplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDiplomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDiplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

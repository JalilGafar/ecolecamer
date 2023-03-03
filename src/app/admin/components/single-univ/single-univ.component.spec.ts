import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUnivComponent } from './single-univ.component';

describe('SingleUnivComponent', () => {
  let component: SingleUnivComponent;
  let fixture: ComponentFixture<SingleUnivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleUnivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleUnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

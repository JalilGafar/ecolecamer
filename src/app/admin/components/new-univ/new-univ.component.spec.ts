import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUnivComponent } from './new-univ.component';

describe('NewUnivComponent', () => {
  let component: NewUnivComponent;
  let fixture: ComponentFixture<NewUnivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUnivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCampusComponent } from './new-campus.component';

describe('NewCampusComponent', () => {
  let component: NewCampusComponent;
  let fixture: ComponentFixture<NewCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCampusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

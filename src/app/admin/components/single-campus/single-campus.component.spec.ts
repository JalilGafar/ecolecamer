import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCampusComponent } from './single-campus.component';

describe('SingleCampusComponent', () => {
  let component: SingleCampusComponent;
  let fixture: ComponentFixture<SingleCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCampusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

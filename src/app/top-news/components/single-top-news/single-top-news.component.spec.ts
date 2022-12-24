import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTopNewsComponent } from './single-top-news.component';

describe('SingleTopNewsComponent', () => {
  let component: SingleTopNewsComponent;
  let fixture: ComponentFixture<SingleTopNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTopNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTopNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

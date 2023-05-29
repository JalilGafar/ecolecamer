import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoButComponent } from './info-but.component';

describe('InfoButComponent', () => {
  let component: InfoButComponent;
  let fixture: ComponentFixture<InfoButComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoButComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoButComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

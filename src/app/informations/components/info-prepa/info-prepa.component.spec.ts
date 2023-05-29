import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPrepaComponent } from './info-prepa.component';

describe('InfoPrepaComponent', () => {
  let component: InfoPrepaComponent;
  let fixture: ComponentFixture<InfoPrepaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPrepaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPrepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

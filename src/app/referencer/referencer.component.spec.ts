import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencerComponent } from './referencer.component';

describe('ReferencerComponent', () => {
  let component: ReferencerComponent;
  let fixture: ComponentFixture<ReferencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferencerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

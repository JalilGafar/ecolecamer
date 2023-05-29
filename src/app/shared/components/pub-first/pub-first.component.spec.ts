import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubFirstComponent } from './pub-first.component';

describe('PubFirstComponent', () => {
  let component: PubFirstComponent;
  let fixture: ComponentFixture<PubFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

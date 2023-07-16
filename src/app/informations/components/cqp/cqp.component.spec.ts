import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CqpComponent } from './cqp.component';

describe('CqpComponent', () => {
  let component: CqpComponent;
  let fixture: ComponentFixture<CqpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CqpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CqpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

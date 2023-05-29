import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRedactionComponent } from './info-redaction.component';

describe('InfoRedactionComponent', () => {
  let component: InfoRedactionComponent;
  let fixture: ComponentFixture<InfoRedactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoRedactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoRedactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

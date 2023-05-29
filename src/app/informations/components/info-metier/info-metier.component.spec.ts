import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMetierComponent } from './info-metier.component';

describe('InfoMetierComponent', () => {
  let component: InfoMetierComponent;
  let fixture: ComponentFixture<InfoMetierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoMetierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoMetierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

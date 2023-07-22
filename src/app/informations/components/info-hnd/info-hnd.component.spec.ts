import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHndComponent } from './info-hnd.component';

describe('InfoHndComponent', () => {
  let component: InfoHndComponent;
  let fixture: ComponentFixture<InfoHndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoHndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoHndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

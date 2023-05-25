import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDiplomeComponent } from './info-diplome.component';

describe('InfoDiplomeComponent', () => {
  let component: InfoDiplomeComponent;
  let fixture: ComponentFixture<InfoDiplomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoDiplomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoDiplomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

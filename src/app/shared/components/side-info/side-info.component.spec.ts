import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideInfoComponent } from './side-info.component';

describe('SideInfoComponent', () => {
  let component: SideInfoComponent;
  let fixture: ComponentFixture<SideInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

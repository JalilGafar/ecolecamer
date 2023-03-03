import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivListComponent } from './univ-list.component';

describe('UnivListComponent', () => {
  let component: UnivListComponent;
  let fixture: ComponentFixture<UnivListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnivListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnivListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

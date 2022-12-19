import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopVideoSlideComponent } from './top-video-slide.component';

describe('TopVideoSlideComponent', () => {
  let component: TopVideoSlideComponent;
  let fixture: ComponentFixture<TopVideoSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopVideoSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopVideoSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

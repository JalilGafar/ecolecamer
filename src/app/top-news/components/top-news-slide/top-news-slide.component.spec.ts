import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNewsSlideComponent } from './top-news-slide.component';

describe('TopNewsSlideComponent', () => {
  let component: TopNewsSlideComponent;
  let fixture: ComponentFixture<TopNewsSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNewsSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNewsSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNewsItemComponent } from './top-news-item.component';

describe('TopNewsItemComponent', () => {
  let component: TopNewsItemComponent;
  let fixture: ComponentFixture<TopNewsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNewsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNewsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogPanelComponent } from './catalog-panel.component';

describe('CatalogPanelComponent', () => {
  let component: CatalogPanelComponent;
  let fixture: ComponentFixture<CatalogPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountFilterView } from './discount-filter-view';

describe('DiscountFilterView', () => {
  let component: DiscountFilterView;
  let fixture: ComponentFixture<DiscountFilterView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountFilterView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountFilterView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

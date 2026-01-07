import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountItemView } from './discount-item-view';

describe('DiscountItemView', () => {
  let component: DiscountItemView;
  let fixture: ComponentFixture<DiscountItemView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountItemView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountItemView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

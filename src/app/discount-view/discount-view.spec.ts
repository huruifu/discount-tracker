import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountView } from './discount-view';

describe('DiscountView', () => {
  let component: DiscountView;
  let fixture: ComponentFixture<DiscountView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

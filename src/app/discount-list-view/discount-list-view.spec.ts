import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountListView } from './discount-list-view';

describe('DiscountListView', () => {
  let component: DiscountListView;
  let fixture: ComponentFixture<DiscountListView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountListView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountListView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

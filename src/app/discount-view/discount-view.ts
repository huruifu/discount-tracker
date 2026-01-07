import { Component, OnInit, signal } from '@angular/core';
import { DiscountListView } from '../discount-list-view/discount-list-view';
import { DiscountFilterView } from '../discount-filter-view/discount-filter-view';
import { DiscountService } from '../../services/discount-service';

@Component({
  selector: 'app-discount-view',
  imports: [DiscountListView, DiscountFilterView],
  templateUrl: './discount-view.html',
  styleUrl: './discount-view.css',
})
export class DiscountView implements OnInit {
  keyword = signal<string>('');
  discountItems = signal<any[]>([]);

  constructor(private discountService: DiscountService) {}

  ngOnInit() {
    this.setDiscountItems();
  }

  onKeywordChange(newKeyword: string) {
    this.keyword.set(newKeyword);
    this.setDiscountItems();
  }

  setDiscountItems() {
    this.discountService.getDiscounts(this.keyword()).subscribe(discountItems => {
      this.discountItems.set(discountItems);
    })
  }
}
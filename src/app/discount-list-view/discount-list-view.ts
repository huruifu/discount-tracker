import { Component, input, signal, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { DiscountItemView } from '../discount-item-view/discount-item-view';
import { DiscountItem } from '../../data/discount';
import { DiscountService } from '../../services/discount-service';

@Component({
  selector: 'app-discount-list-view',
  imports: [
    MatGridListModule,
    MatProgressSpinnerModule,
    DiscountItemView
  ],
  templateUrl: './discount-list-view.html',
  styleUrl: './discount-list-view.css',
})
export class DiscountListView implements OnInit {
  discountItems = input<DiscountItem[]>([]);
  isLoading = signal<boolean>(false);

  constructor(private discountService: DiscountService) {}

  ngOnInit() {
    this.discountService.loading$.subscribe(loading => {
      this.isLoading.set(loading);
    });
  }
}

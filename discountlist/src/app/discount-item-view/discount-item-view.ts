import { Component, input } from '@angular/core';
import { CurrencyPipe, PercentPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';

import { DiscountItem } from '../../data/discount';

@Component({
  selector: 'app-discount-item-view',
  imports: [
    CurrencyPipe, 
    PercentPipe,
    MatCardModule, 
    MatBadgeModule,
  ],
  templateUrl: './discount-item-view.html',
  styleUrl: './discount-item-view.css',
})
export class DiscountItemView {
  discountItem = input.required<DiscountItem>();

  redirectToProductPage() {
    window.open(this.discountItem().productLink, '_blank');
  }
}

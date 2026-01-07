import { Component } from '@angular/core';
import { DiscountView } from './discount-view/discount-view';

@Component({
  selector: 'app-root',
  imports: [DiscountView],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}

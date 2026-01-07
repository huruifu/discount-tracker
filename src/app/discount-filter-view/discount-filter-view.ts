import { Component, output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-discount-filter-view',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './discount-filter-view.html',
  styleUrl: './discount-filter-view.css',
})
export class DiscountFilterView {
  protected discountForm = new FormGroup({
    keyword: new FormControl('')
  });
  protected keyword = output<string>();

  onKeywordChange() {
    const newKeyword = this.discountForm.value.keyword || '';
    this.keyword.emit(newKeyword);
  }

  onClickResetFilter() {
    this.discountForm.reset();
    this.keyword.emit('');
  }
}

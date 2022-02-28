import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../products/products.component';

@Component({
  selector: 'app-product-discounts',
  templateUrl: './product-discounts.component.html',
  styleUrls: ['./product-discounts.component.scss'],
})
export class ProductDiscountsComponent implements OnInit {
  @Input() product: IProduct | undefined;
  constructor() {}

  @Output() notify = new EventEmitter();

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { IShippingPrice } from 'src/app/types/types';
import { IProduct } from '../products/products.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items_to_buy: IProduct[] = [];
  shipping_data;

  constructor(private cartService: CartService) {
    this.items_to_buy = cartService.getItems();
    this.shipping_data = cartService.getShippingPrices();
  }

  showShippingData() {
    console.log('shippingData', this.shipping_data);
  }

  ngOnInit(): void {}
}

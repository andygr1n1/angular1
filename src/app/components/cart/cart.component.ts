import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { FormBuilder } from '@angular/forms';
import { IProduct } from '../products/products.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items_to_buy: IProduct[] = [];
  shipping_data;

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.items_to_buy = cartService.getItems();
    this.shipping_data = cartService.getShippingPrices();
  }

  showShippingData() {
    console.log('shippingData', this.shipping_data);
  }

  onSubmit(): void {
    // Process checkout data here
    this.items_to_buy = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit(): void {}
}

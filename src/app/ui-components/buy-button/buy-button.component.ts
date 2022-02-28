import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { IProduct } from 'src/app/components/products/products.component';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss'],
})
export class BuyButtonComponent implements OnInit {
  @Input() product: IProduct | undefined;
  
  constructor(private cartService: CartService) {}

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {}
}

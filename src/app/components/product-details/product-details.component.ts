import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import products from '../../../assets/products.json';
import { IProduct } from '../products/products.component';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined;
  shipping_info = false;
  shipping_data = this.cartService.getShippingPrices();

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  toggleShippingPrices(): void {
    this.shipping_info = !this.shipping_info;
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('productId'));
    this.product = products.find((product) => product.id === productId);

    console.log('product:::', this.product, productId);
  }
}
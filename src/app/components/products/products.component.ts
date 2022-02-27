import { Component, OnInit } from '@angular/core';
import productsData from '../../../assets/products.json';

export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor() {}

  products: IProduct[] = productsData;

  share(): void {
    alert('add in my life');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit(): void {}
}

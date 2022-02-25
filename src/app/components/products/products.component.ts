import { Component, OnInit } from '@angular/core';
import productsData from '../../../assets/products.json';

export interface Product {
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

  products: Product[] = productsData;

  share(): void {
    alert('add in my life');
  }

  ngOnInit(): void {}
}

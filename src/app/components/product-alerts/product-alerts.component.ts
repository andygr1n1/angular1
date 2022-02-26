import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products/products.component';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: Product | undefined;
  constructor() { }
  

  @Output() notify = new EventEmitter();

  ngOnInit(): void {}
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../products/products.component';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.scss'],
})
export class ProductAlertsComponent implements OnInit {
  @Input() product: IProduct | undefined;
  constructor() { }
  

  @Output() notify = new EventEmitter();

  ngOnInit(): void {}
}

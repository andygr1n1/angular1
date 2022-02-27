import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationMenuComponent } from './components/top-navigation-menu/top-navigation-menu.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RootBodyComponent } from './components/root-body/root-body.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationMenuComponent,
    ProductsComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    RootBodyComponent,
    CartComponent,
    ShippingComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

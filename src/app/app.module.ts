import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationMenuComponent } from './components/top-navigation-menu/top-navigation-menu.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDiscountsComponent } from './components/product-discounts/product-discounts.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RootBodyComponent } from './components/root-body/root-body.component';
import { CartComponent } from './components/cart/cart.component';
import { ShippingComponent } from './components/shipping/shipping.component';
import { BuyButtonComponent } from './ui-components/buy-button/buy-button.component';
import { FavoritesButtonComponent } from './ui-components/favorites-button/favorites-button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationMenuComponent,
    ProductsComponent,
    ProductDiscountsComponent,
    ProductDetailsComponent,
    RootBodyComponent,
    CartComponent,
    ShippingComponent,
    BuyButtonComponent,
    FavoritesButtonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

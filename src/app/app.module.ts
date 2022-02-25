import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationMenuComponent } from './components/top-navigation-menu/top-navigation-menu.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [AppComponent, TopNavigationMenuComponent, ProductsComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

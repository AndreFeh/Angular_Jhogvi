import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/nav-bar/menu-bar/menu-bar.component';
import { FooterBarComponent } from './components/nav-bar/footer-bar/footer-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { CostumerSupportComponent } from './pages/costumer-support/costumer-support.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { LeftComponent } from './components/home/left/left.component';
import { RightComponent } from './components/home/right/right.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    FooterBarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    MyAccountComponent,
    CostumerSupportComponent,
    EventosComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

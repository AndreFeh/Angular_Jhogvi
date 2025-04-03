import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { CostumerSupportComponent } from './pages/costumer-support/costumer-support.component';
import { EventosComponent } from './pages/eventos/eventos.component';

const routes: Routes = [
	{path:'', component:HomeComponent, pathMatch:'full'},
	{path:'produtos', component:ProductsComponent, pathMatch:'prefix'},
	{path:'carrinho', component:ShoppingCartComponent, pathMatch:'prefix'},
	{path:'checkout', component:CheckoutComponent, pathMatch:'prefix'},
	{path:'minha-conta', component:MyAccountComponent, pathMatch:'prefix'},
	{path:'suporte', component:CostumerSupportComponent, pathMatch:'prefix'},
	{path:'eventos', component:EventosComponent, pathMatch:'prefix'},
	{path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

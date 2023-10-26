import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './components/message/message.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { EnvioComponent } from './components/envio/envio.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'my-account', component: MyAccountComponent },
      { path: 'product-info', component: ProductInfoComponent },
      { path: 'envio', component: EnvioComponent },
    ],
  },
  {
    path: '**',
    component: MessageComponent, // Redirige a MessageComponent para rutas no encontradas
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

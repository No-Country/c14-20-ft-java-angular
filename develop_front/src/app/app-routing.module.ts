import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './components/message/message.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MyAccountComponent } from './components/my-account/my-account.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { EnvioComponent } from './components/envio/envio.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { DashboardAdminComponent } from './components/dashboard-admin/dashboard-admin.component';
import { CreateFoodComponent } from './components/create-food/create-food.component';
import { AuthGuard } from './auth.guard';
import { UpdateFoodComponent } from './components/update-food/update-food.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'my-account', component: MyAccountComponent },
      { path: 'product-info/:productId', component: ProductInfoComponent },
      { path: 'envio', component: EnvioComponent },
      { path: 'confirmacion', component: ConfirmationComponent },
      { path: 'admin-dashboard', component: DashboardAdminComponent,
        canActivate:[AuthGuard] },
      { path: 'create-food', component: CreateFoodComponent,
        canActivate:[AuthGuard] },
        { path: 'update-food', component: UpdateFoodComponent,
        canActivate:[AuthGuard] },
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from './home.component';
import { FooterComponent } from '../footer/footer.component';
import { ProductsComponent } from '../products/products.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { MyAccountComponent } from '../my-account/my-account.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    ShoppingCartComponent,
    MyAccountComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}

import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/interfaces/CartProduct.interface';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cartProducts!: CartProduct[];
  constructor(private shoppingCartService: ShoppingCartService) {}
  ngOnInit(): void {
    this.shoppingCartService.productsInCart.subscribe((data) => {
      this.cartProducts = data;
      console.log(this.cartProducts);
    });
  }
}

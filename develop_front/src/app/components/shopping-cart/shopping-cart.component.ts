import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/interfaces/CartProduct.interface';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  cartProducts!: CartProduct[];
  totalPrice: number = 0;
  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.shoppingCartService.productsInCart.subscribe((data) => {
      this.cartProducts = data;
      console.log(this.cartProducts);
      this.updateTotalPrice();
    });
  }

  redirectTo() {
    this.router.navigate(['/home/envio']);
  }
  updateTotalPrice() {
    this.cartProducts.forEach((element) => {
      this.totalPrice += element.quantity * element.product.price;
    });
    console.log(this.totalPrice);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/interfaces/CartProduct.interface';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {

  singleProductCount: number = 0;
  totalSum : number = 0;
  @Input() cartProduct!: CartProduct;
  constructor(
    private shoppingCartService: ShoppingCartService,
    ) {}
  ngOnInit(): void {
    this.shoppingCartService.productsInCart.subscribe((data) => {
      this.cartProducts = data;
      console.log(this.cartProducts);
      this.updateTotalPrice();
    });
    this.singleProductCount = this.shoppingCartService.getSingleProductCount(
      this.cartProduct.product
    );
    this.totalSum =
      this.totalSum + (this.singleProductCount * this.cartProduct.product.price);
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

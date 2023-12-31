import { Component, Input, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/interfaces/CartProduct.interface';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-single',
  templateUrl: './shopping-cart-single.component.html',
  styleUrls: ['./shopping-cart-single.component.css'],
})
export class ShoppingCartSingleComponent implements OnInit {
  singleProductCount: number = 0;
  subTotalPrice: number = 0;
  subTotalList: number[] = [];
  totalPrice : number = 0;
  @Input() cartProduct!: CartProduct;
  constructor(
    private shoppingCartService: ShoppingCartService
  ) {}
  ngOnInit(): void {
    this.shoppingCartService.productsInCart.subscribe((data) =>
      console.log(data)
    );
    this.singleProductCount = this.shoppingCartService.getSingleProductCount(
      this.cartProduct.product
    );
    this.subTotalPrice =
      this.singleProductCount * this.cartProduct.product.price;

      this.totalPrice += this.subTotalPrice;

  }
  onAddToCart() {
    this.shoppingCartService.addToCart(this.cartProduct.product);
    this.singleProductCount = this.shoppingCartService.getSingleProductCount(
      this.cartProduct.product
    );
    console.log(this.singleProductCount);
    this.updateQuantity();
  }
  onDelete() {
    this.shoppingCartService.deleteFromCart(this.cartProduct.product);
    this.singleProductCount = this.shoppingCartService.getSingleProductCount(
      this.cartProduct.product
    );
    console.log(this.singleProductCount);
    this.updateQuantity();
  }
  updateQuantity() {
    this.subTotalPrice =
      this.singleProductCount * this.cartProduct.product.price;
    console.log(this.subTotalPrice);
  }

}

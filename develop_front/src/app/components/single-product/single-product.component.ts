import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { Product } from 'src/app/mock/interfaces/Product.interface';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent implements OnInit {
  @Input() product!: Product;
  singleProductCount: number = 0;
  constructor(
    private shoppingCartService: ShoppingCartService
  ) {}
  ngOnInit(): void {
    this.shoppingCartService.productsInCart.subscribe((data) =>
      console.log(data)
    );
    this.singleProductCount = this.shoppingCartService.getSingleProductCount(
      this.product
    );
  }
  onAddToCart() {
    this.shoppingCartService.addToCart(this.product);
    this.singleProductCount = this.shoppingCartService.getSingleProductCount(
      this.product
    );
    console.log(this.singleProductCount);
  }
  onDelete() {
    this.shoppingCartService.deleteFromCart(this.product);
    this.singleProductCount = this.shoppingCartService.getSingleProductCount(
      this.product
    );
    console.log(this.singleProductCount);
  }
}

import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/Product.interface';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
})
export class SingleProductComponent {
  @Input() product!: Product;
  constructor(private shoppingCartService: ShoppingCartService) {}

  onAddToCart() {
    this.shoppingCartService.addToCart(this.product);
  }
}

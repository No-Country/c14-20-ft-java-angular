import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/interfaces/CartProduct.interface';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-single',
  templateUrl: './shopping-cart-single.component.html',
  styleUrls: ['./shopping-cart-single.component.css'],
})
export class ShoppingCartSingleComponent {
  @Input() cartProduct!: CartProduct;
  constructor(
    private router: Router,
    private ShoppingCartService: ShoppingCartService
  ) {}
}

import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/interfaces/CartProduct.interface';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { LoginUser } from 'src/app/mock/interfaces/Login.interface';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit{
  userData!: LoginUser;
  count: number = 0;

  constructor(
    private shoppingCartService: ShoppingCartService,
  ) {}
  ngOnInit() {
    this.shoppingCartService.productsInCart.subscribe((data) => {
      this.count = data.reduce((acc: number, e: CartProduct) => {
        acc += e.quantity;
        return acc;
      }, 0);
      console.log(this.count);
      console.log(this.userData);
    });
  }
  

}

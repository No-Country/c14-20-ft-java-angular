import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/interfaces/CartProduct.interface';
import { ShoppingCartService } from 'src/app/services/shopping-cart/shopping-cart.service';
import { CredentialsService } from 'src/app/services/credentials/credentials.service';
import { User } from 'src/app/interfaces/User.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit{
  userData!: User;
  count: number = 0;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private credentials: CredentialsService,
    private router: Router
  ) {}
  ngOnInit() {
    this.shoppingCartService.productsInCart.subscribe((data) => {
      this.count = data.reduce((acc: number, e: CartProduct) => {
        acc += e.quantity;
        return acc;
      }, 0);
      console.log(this.count);
      this.credentials.userData.subscribe((data) => (this.userData = data));
      console.log(this.userData);
    });
  }
  
  redirectTo(path: string) {
    this.router.navigate([path]);
  }
}
